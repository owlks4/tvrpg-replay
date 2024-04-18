import "./style.css";
import { GLTFLoader } from "./GLTFLoader.js";
import {createScene,scene,renderer,controls,camera,spawn2DText,labelRenderer,setDistBetweenCameraAndTargetFromCamAndTargetPos,makePlaneForCharacter,movePeopleIfRequired} from "./scene3d.js";
import decks from "/decks.gltf?url"
import OUTPUT_PEOPLE_ROOM_HISTORIES_2023 from "/OUTPUT_PEOPLE_ROOM_HISTORIES_2023.json?url"
import {STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970, END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970,
        TIMESCALE, repository_rooms, years_jan_1, April_10th_offset, April_14th_offset, April_14th_evening_offset, setStartingTime} from "./consts.js"
import * as THREE from "three"

createScene();

let TIME_RANGE = document.getElementById("time-range");
TIME_RANGE.value = 0;

let YEAR = 2023

let titleText = document.getElementById("titleText");
let characters = []

let defaultMaterial = null;

let personSelector = document.getElementById("person-selector")
personSelector.onchange = (e) => {highlightPersonWithId(e.target.value)};

function highlightPersonWithId(id){
  characters.forEach(character => {
    if (character.id == id){
      console.log(character.name + " was selected")
      character.object3d.material = new THREE.MeshBasicMaterial( {color: 0xe02020, side: THREE.DoubleSide} );
      character.object3d.scale.set(2, 2, 2)
      character.text = spawn2DText(character.object3d, character.name, 0.7, "", "", "")
    } else {
      character.object3d.material = defaultMaterial;
      character.object3d.scale.set(1, 1, 1)
      if (character.text != null){
        character.text[0].remove(character.text[1])
      }
    }
  })
}

TIME_RANGE.oninput = (e) => {
  let newValue = e.target.value;
  titanic_time_milliseconds_since_jan_1_1970 = STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970 + (newValue * (END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970 - STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970))
  updateVisualClock();
  movePeopleIfRequired();
  }

let loader = new GLTFLoader();

let titanic_time_milliseconds_since_jan_1_1970 = STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970;
let clockRunning = true;
let lastTimeClockUpdated = Date.now()

start();

function milliseconds_since_jan_1_1970_to_string_time(input) {
  return new Date(input).toString().split("GMT")[0]
}

function updateVisualClock(){
  titleText.innerText = milliseconds_since_jan_1_1970_to_string_time(titanic_time_milliseconds_since_jan_1_1970);
}

function getChildByName(scene, name){
  for (let i = 0; i < scene.children.length; i++){
    let child = scene.children[i];
    if (child.name == name){
      return child;
    }
  }
}

function atLeastOneCharacterEntryFallsWithinTargetTimeframe(character){
  for (let i = 0; i < character.room_entry_records.length; i++){
    let record = character.room_entry_records[i]
    if (record.time >= STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970 && record.time <= END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970){
      return true;
    }
  }
  return false;
}

async function start() {
    let response = null;

    setStartingTime(years_jan_1[YEAR] + April_14th_evening_offset)
    titanic_time_milliseconds_since_jan_1_1970 = STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970;

    switch (YEAR){
      case 2023:
        response = await fetch(OUTPUT_PEOPLE_ROOM_HISTORIES_2023);
      break;
      case 2024:
        response = await fetch(OUTPUT_PEOPLE_ROOM_HISTORIES_2024);
      break;
      default:
        print("THAT YEAR IS NOT REGISTERED IN THE YEAR SWITCH STATEMENT THAT LOCATES THE JSON FILE!")
      break;
    }

    characters = await response.json();

    for (let i = 0; i < repository_rooms.length; i++){
      let room = repository_rooms[i];
      room.name = room.name.replaceAll(" ","_").replaceAll(".","").trim()
      room.occupants = 0
      room.occupants3d = []
    }

    updateVisualClock();

    loader.load(decks,async function (gltf) {
        await scene.add(gltf.scene); //adds the gltf content to the scene
        console.log(gltf.scene)

        //for each deck, gives all the rooms in repository_rooms that are represented in the model a location reference from the model
       
        getChildByName(gltf.scene, "DECKS").children.forEach(deck => {
          console.log("Hunting for rooms on deck: "+deck.name)
          deck.children.forEach((location)=>{
            location.name = location.name.trim()
            for (let i = 0; i < repository_rooms.length; i++){
              let room = repository_rooms[i];
              if (room.name == location.name){
                  console.log(room.name + " was located.")
                  room.object3d = location
                  room.position3D = {"x":location.position.x, "y": deck.position.y, "z":location.position.z};
                  room.widthLength = [location.scale.x*2, location.scale.z*2]
                  break;
              }
            }
            //console.log("No physical location found for room: "+location.name)
          });
        });

        //create a template from the person mesh and use it to create a little figurine for each character:
        let personTemplate = getChildByName(scene.children[0],"PERSON");
        
        defaultMaterial = personTemplate.material;

        let charactersSortedbyName = []
        let amountOfVarianceAllowedInRandomPosition = 0.75; // 0 = no deviation, everyone will be in strict lines like an army, 1 = everyone will deviate a lot from their standard position, but it means that when the number of people in the crowd changes, the resulting position changes amongst the occupants are distractingly large

        characters.forEach((character) => {
          makePlaneForCharacter(character,personTemplate.geometry, personTemplate.material)
          character.myRandomPositionScalar = [(Math.random() * amountOfVarianceAllowedInRandomPosition) - (amountOfVarianceAllowedInRandomPosition / 2),
                                              (Math.random() * amountOfVarianceAllowedInRandomPosition) - (amountOfVarianceAllowedInRandomPosition / 2)]          
          charactersSortedbyName.push(character)
        })

        charactersSortedbyName.sort((a,b) => {return a.name.localeCompare(b.name)})

        charactersSortedbyName.forEach(character => {

          if (atLeastOneCharacterEntryFallsWithinTargetTimeframe(character)){
            let newElement = document.createElement("option");
            newElement.setAttribute("value",character.id);
            newElement.innerText = character.name;
            personSelector.appendChild(newElement);
          } else {
            character.object3d.position.set(-999,-999,-999)
          }
        })

        scene.remove(personTemplate)
        movePeopleIfRequired();

        animate();
      });                                 
}

function animate() {
  requestAnimationFrame( animate );
  let now = Date.now()
  if (clockRunning && titanic_time_milliseconds_since_jan_1_1970 < END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970 && now - lastTimeClockUpdated >= 1000/TIMESCALE){
    titanic_time_milliseconds_since_jan_1_1970 += 1000 * (TIMESCALE/1); //tick clock 
    movePeopleIfRequired(characters,titanic_time_milliseconds_since_jan_1_1970);
    lastTimeClockUpdated = now;
    updateVisualClock()
    TIME_RANGE.value = (titanic_time_milliseconds_since_jan_1_1970 - STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970) / (END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970 - STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970)
  }
  controls.update();
  setDistBetweenCameraAndTargetFromCamAndTargetPos(camera.position.distanceTo(controls.target))
  renderer.render( scene, camera );
  labelRenderer.render( scene, camera );
}

export {TIMESCALE,characters,titanic_time_milliseconds_since_jan_1_1970}