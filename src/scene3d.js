import * as THREE from "three"
import { OrbitControls } from "./OrbitControls.js";
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

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

function makePlaneForCharacter(character){
    const mesh = new THREE.Mesh( geometry, material );
    mesh.name = character.id
    mesh.displayname = character.name;
    scene.add( mesh );
    character.mesh = mesh
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

    for (let i = 0; i < character.room_entry_records.length; i++){
        let candidate = character.room_entry_records[i]
        if (candidate.time > entry.time && candidate.time <= time){
            entry = candidate;
        }
    }

    if (entry.time == 0){
        return null;   //prevents it from accidentally returning the placeholder in the event that we didn't find any latest entry!
    } else {
        return entry;
    }
}

function movePeopleIfRequired(characters,time){
   characters.forEach((character) => {
        let newestEntryAtThisTime = getLatestEntryInCharacterHistoryGivenThisTimestamp(character,time);
        if (newestEntryAtThisTime != null){
            let shouldBeInThisRoom = newestEntryAtThisTime.roomid
            if (character.roomItIsCurrentlyDisplayedIn != shouldBeInThisRoom){  //if the character needs to be moved from its current room to the one it should be in instead
                character.roomItIsCurrentlyDisplayedIn = shouldBeInThisRoom
                console.log("TODO: " +character.name + " moves to room "+character.roomItIsCurrentlyDisplayedIn)
            }
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