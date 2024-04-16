import * as THREE from "three"
import { OrbitControls } from "./OrbitControls.js";
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { repository_rooms, END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970 } from "./consts.js";

let scene = null;
let renderer = null;
let controls = null;
let camera = null;
let font = null;
let labelRenderer = null;
let unknownLocationMessageParent = document.getElementById("unknown-location-message-parent");
let dist_between_camera_and_target = 0;

function setDistBetweenCameraAndTargetFromCamAndTargetPos(newValue){
    dist_between_camera_and_target = newValue;
    return dist_between_camera_and_target
}

function makePlaneForCharacter(character, geometry, material){
    const mesh = new THREE.Mesh( geometry, material );
    mesh.name = character.id
    mesh.displayname = character.name;
    scene.add( mesh );
    character.object3d = mesh
    spawn2DText(mesh, character.name, 1, "", "", "")
}

function createScene(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color("#111121");
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
    camera.position.set(-62.980477838884106, 95.59640814208967, 181.9943944006987);
    controls.target.set(5.52, 17.37, 7.51)
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

    if (hadToUseLastEntry || (character.room_entry_records[index+1].time > END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970)){ //if this is their last entrance, then instead of displaying it, just put them in heaven, off-screen - otherwise randos will be hanging around on titanic in the last place they spoke, even when it has sunk
        return {"roomid": 600, "time": 0};                                                                              //(cont. or, if their next entry is after the end of our viewing period.)
    }

    if (entry.time == 0){
        return null;   //prevents it from accidentally returning the placeholder in the event that we didn't find any latest entry!
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

function movePeopleIfRequired(characters,time){
    if (characters == undefined){return;}

   characters.forEach((character) => {
        let newestEntryAtThisTime = getLatestEntryInCharacterHistoryGivenThisTimestamp(character,time);
        if (newestEntryAtThisTime != null){
            let shouldBeInThisRoom = newestEntryAtThisTime.roomid
            if (character.roomItIsCurrentlyDisplayedIn != shouldBeInThisRoom){  //if the character needs to be moved from its current room to the one it should be in instead
                if (character.roomItIsCurrentlyDisplayedIn != null){
                    let oldRoom = getRoomById(character.roomItIsCurrentlyDisplayedIn)
                    decrementOccupants(oldRoom)
                    oldRoom.occupants3d = removeItemFromArray(oldRoom.occupants3d,character)
                }
                character.roomItIsCurrentlyDisplayedIn = shouldBeInThisRoom
                let newRoom = getRoomById(shouldBeInThisRoom)
                newRoom.occupants3d.push(character)
                character.myRoom = newRoom
                incrementOccupants(newRoom)
                if (newRoom.position3D != null){
                    character.object3d.position.set(newRoom.position3D.x,newRoom.position3D.y,newRoom.position3D.z)
                    //console.log("Should be visually moving "+character.name + " to room "+character.roomItIsCurrentlyDisplayedIn)
                } else {
                    character.object3d.position.set(0,0,0)
                    console.log(character.name + " moved to "+newRoom.name + "... but because it doesn't have a physical location ascribed to it, their position will not update from their old position...")
                }
            }
        }

        if (character.myRoom != null && character.object3d != null){
            let scale = 1 + (character.myRoom.occupants/5)
            if (character.object3d.scale.x != scale){
                character.object3d.scale.set(scale,scale >= 1 ? 1 : 0,scale)
            }
        }
   });
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