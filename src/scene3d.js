import * as THREE from "three"
import { OrbitControls } from "./OrbitControls.js";
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { repository_rooms,STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970, END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970} from "./consts.js";
import { titanic_time_milliseconds_since_jan_1_1970 } from "./utility.js";

let scene = null;
let renderer = null;
let controls = null;
let camera = null;
let font = null;
let labelRenderer = null;
let unknownLocationMessageParent = document.getElementById("unknown-location-message-parent");
let dist_between_camera_and_target = 0;

let HIGHLIGHTED_PERSON_LEAVES_TRAIL = false

let failedRoomAccesses = {}
console.log(failedRoomAccesses)

function setDistBetweenCameraAndTargetFromCamAndTargetPos(newValue){
    dist_between_camera_and_target = newValue;
    return dist_between_camera_and_target
}

function makePlaneForCharacter(character, geometry, material){
    const mesh = new THREE.Mesh( geometry, material );
    mesh.name = character.id
    mesh.rotation.set(0, Math.random() * 360, 0, 'XYZ')
    mesh.position.set(0,-999,0)
    scene.add( mesh );
    character.object3d = mesh
}

function createScene(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color("#777777");
    camera = new THREE.OrthographicCamera( -window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight / 2, 0.1, 1000 );
    camera.zoom = 21.7
    
    labelRenderer = new CSS2DRenderer();
	labelRenderer.setSize( window.innerWidth, window.innerHeight );
	labelRenderer.domElement.style.position = 'absolute';
	labelRenderer.domElement.style.top = '0px';
    labelRenderer.domElement.className = "no-raycast"
	document.body.appendChild( labelRenderer.domElement );
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    controls = new OrbitControls( camera, renderer.domElement );
    camera.position.set(-62.980477838884106, 100, 181.9943944006987);
    controls.target.set(0, 22.5, 7.51)
    controls.enableRotate = false
    controls.mouseButtons = {
        LEFT: THREE.MOUSE.PAN,
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: THREE.MOUSE.PAN
    }
    controls.update();

}

function getLatestEntryInCharacterHistoryGivenThisTimestamp(character,time){
    let entry = {"time":0}; //starts with a placeholder for the sake of the initial comparison
    let index = -1;

    let hadToUseLastEntry = false; //if we end up using the last entry in their history, we just make their character disappear - stops random people who last logged off on the forecastle from staying there forever.

    for (let i = 0; i < character.room_entry_records.length; i++){
        let candidate = character.room_entry_records[i]
        if (candidate.time > entry.time && candidate.time <= time){
            entry = candidate;
            index = i;
            if (i == character.room_entry_records.length - 1){
                hadToUseLastEntry = true;
            }
        }
    }

    if (hadToUseLastEntry  //if this is their last entrance, then instead of displaying it, just put them in hell, off-screen - otherwise randos will be hanging around on titanic in the last place they spoke, even when it has sunk        
        || (character.room_entry_records[index+1].time > END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970)){ //(cont.) or, if their next entry is after the end of our viewing period.
        return {"roomid": 600, "time": 0};                                                                              
    }

    if (entry.time == 0){
        return {"roomid": 600, "time": 0}  //prevents it from accidentally returning the placeholder in the event that we didn't find any latest entry!
    } else {
        return entry;
    }
}

function getRoomById(id){
    for (let i = 0; i < repository_rooms.length; i++){
        let room = repository_rooms[i]
        if (room.id == id){
            return room;
        }
    }
    return null;
}

function decrementOccupants(room){
    room.occupants = room.occupants - 1;
}

function incrementOccupants(room){
    room.occupants = room.occupants + 1;
}

function removeItemFromArray(array,item){
    let indexOfItem = array.indexOf(item)
    return array.slice(0, indexOfItem).concat(array.slice(indexOfItem+1)) 
}

function recalculateRoomDistancesBetweenPeopleForLater(room){
    if (room.widthLength == null){
        return
    }
    let perSide = Math.sqrt(room.occupants)
    room.peopleAlongWidth = Math.ceil(perSide)
    room.peopleAlongLength = Math.ceil(perSide)
}

function getArrayOfStandingPositionsWithinRoom(room){

    if (room.object3d == null || room.widthLength == null){
        return (0,-999,0)
    }

    let w = (room.peopleAlongWidth * 0.12 * room.widthLength[0])
    let l = (room.peopleAlongLength * 0.12 * room.widthLength[1])

    if (w > room.widthLength[0]){ //cap the amount of width taken up by the people in the room at the room width
        w = room.widthLength[0];
    }

    if (l > room.widthLength[1]){ //cap the amount of length taken up by the people in the room at the room length
        l = room.widthLength[1];
    }

    let positions = Array.apply(null, Array(room.peopleAlongLength * room.peopleAlongWidth)).map(function () {})

    let xOrigin = room.object3d.position.x - (w/2)
    let zOrigin = room.object3d.position.z - (l/2)

    for (let z = 0; z < room.peopleAlongLength; z++){
        for (let x = 0; x < room.peopleAlongWidth; x++){
            positions[(z * room.peopleAlongWidth) + x] = [xOrigin + ((x/room.peopleAlongWidth) * w), 
                                                          zOrigin + ((z/room.peopleAlongLength) * l)];
        }    
    }

    room.personSpacingXZ = [w/room.peopleAlongWidth, l/room.peopleAlongLength]
    return positions
}

function movePeopleIfRequired(characters,time){
    if (characters == undefined){return;}

    let roomsRequiredInSecondPass = []

   characters.forEach((character) => {
        let newestEntryAtThisTime = getLatestEntryInCharacterHistoryGivenThisTimestamp(character,time);
        if (newestEntryAtThisTime != null){
            let shouldBeInThisRoom = newestEntryAtThisTime.roomid
            if (character.roomItIsCurrentlyDisplayedIn != shouldBeInThisRoom){  //if the character needs to be moved from its current room to the one it should be in instead
                if (character.roomItIsCurrentlyDisplayedIn != null){
                    let oldRoom = getRoomById(character.roomItIsCurrentlyDisplayedIn)
                    decrementOccupants(oldRoom)
                    oldRoom.occupants3d = removeItemFromArray(oldRoom.occupants3d,character)
                    recalculateRoomDistancesBetweenPeopleForLater(oldRoom)
                    roomsRequiredInSecondPass.push(oldRoom);
                }
                character.roomItIsCurrentlyDisplayedIn = shouldBeInThisRoom
                let newRoom = getRoomById(shouldBeInThisRoom)
                newRoom.occupants3d.push(character)
                character.myRoom = newRoom
                incrementOccupants(newRoom)
                recalculateRoomDistancesBetweenPeopleForLater(newRoom)
                roomsRequiredInSecondPass.push(newRoom)

                if (newRoom.position3D == null){
                    character.object3d.position.set(0,-999,0)
                    //console.log("Someone moved to "+newRoom.name + "... but because it doesn't have a physical location ascribed to it, their position has been set to the origin.")
                    
                    if (newRoom.deck <= 10 || newRoom.deck == 36){
                        if (Object.keys(failedRoomAccesses).includes(newRoom.name)){
                            failedRoomAccesses[newRoom.name] += 1;
                        } else {
                            failedRoomAccesses[newRoom.name] = 1;
                        }
                    }
                } else if(HIGHLIGHTED_PERSON_LEAVES_TRAIL && character.text != null){
                        let trail = new THREE.Mesh( character.object3d.geometry, character.object3d.material )
                        trail.position.set(newRoom.object3d.position.x,newRoom.position3D.y,newRoom.object3d.position.z)
                        trail.scale.set(3,3,3)
                        spawn2DText(trail, new Date(newestEntryAtThisTime.time).toTimeString().split(" GMT")[0], 0.5, "", "", "")
                        scene.add(trail)
                    }
            }
        }
   });

   roomsRequiredInSecondPass.forEach((room) => {
    if (room.object3d != null) {
        let positions = getArrayOfStandingPositionsWithinRoom(room)
        room.occupants3d.sort((a,b) => {return a.name.localeCompare(b.name)}) // sort occupants into alphabetical order; means the character indices within the room stay more consistent when people leave/join, instead of sliding about everywhere
        room.occupants3d.forEach((character,index) => {
                let newPos = positions[index]      //givenMyIndexInRoomWhatRelativePositionShouldIBeIn(room,character)
                character.object3d.position.set(newPos[0] + (room.personSpacingXZ[0] * character.myRandomPositionScalar[0]),
                                                room.position3D.y,
                                                newPos[1] + (room.personSpacingXZ[1] * character.myRandomPositionScalar[1]))    
            });
        }
   })
}

function spawn2DText(parentObject, text, yMultiplier, extraTextClass, attributionText, subscript){

    const div = document.createElement('div');

    if (extraTextClass == null){
        div.className = 'label';
    } else {
        div.className = "label " + extraTextClass;
    }
	
    let textHolder = document.createElement('div');
    textHolder.className = "label-toggle text";
    textHolder.textContent = text;
    div.appendChild(textHolder);

    if (parentObject != null && extraTextClass == "message-box"){
        let speechBubbleTail = document.createElement('div');
        speechBubbleTail.className = "speech-bubble-tail";
        div.appendChild(speechBubbleTail);
    }

    if (attributionText != null){
        let attributionTextDiv = document.createElement('div');
        attributionTextDiv.className = "attribution-text"
        attributionTextDiv.innerText = attributionText;
        div.appendChild(attributionTextDiv);
    }

    if (subscript != null){
        let subscriptDiv = document.createElement('div');
        subscriptDiv.className = "subscript-text"
        subscriptDiv.innerText = subscript;
        div.appendChild(subscriptDiv);
    }

    let label = null;
    unknownLocationMessageParent.innerHTML = "";

    if (parentObject == null){
        unknownLocationMessageParent.appendChild(div);        
    } else {
        let boundingBox = new THREE.Box3().setFromObject(parentObject);
        let height = boundingBox.max.y - boundingBox.min.y;
    
        if (yMultiplier == null){
            yMultiplier = 1;
        }
        label = new CSS2DObject(div);
        label.position.set(0, (yMultiplier * height) + (extraTextClass == "message-box" ? getYOffsetForMessageBasedOnCamDist() : 0), 0);
        label.center.set( 0.5, 1 );
        parentObject.add(label);
        label.layers.set( 0 );
    }

    return [parentObject, label];
}

function getYOffsetForMessageBasedOnCamDist(){

    let min = 100;
    let max = 200;

    let step = (dist_between_camera_and_target - min) / (max - min);

    return step * 5;
}

export {createScene,scene,renderer,controls,camera, spawn2DText,labelRenderer,setDistBetweenCameraAndTargetFromCamAndTargetPos,makePlaneForCharacter,movePeopleIfRequired}