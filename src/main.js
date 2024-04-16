import "./style.css";
import { GLTFLoader } from "./GLTFLoader.js";
import {createScene,scene,renderer,controls,camera,spawn2DText,labelRenderer,setDistBetweenCameraAndTargetFromCamAndTargetPos,makePlaneForCharacter,movePeopleIfRequired} from "./scene3d.js";
import decks from "/decks.gltf?url"
import OUTPUT_PEOPLE_ROOM_HISTORIES_2023 from "/OUTPUT_PEOPLE_ROOM_HISTORIES_2023.json?url"
import {STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970, END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970,
        TIMESCALE, repository_rooms, years_jan_1, April_10th_offset, April_14th_offset, setStartingTime} from "./consts.js"
import { Vector3 } from "three";

createScene();

let TIME_RANGE = document.getElementById("time-range");
TIME_RANGE.value = 0;

let YEAR = 2023

let titleText = document.getElementById("titleText");
let characters = []

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

async function start() {
    let response = null;

    setStartingTime(years_jan_1[YEAR] + April_14th_offset)
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
                  break;
              }
            }
            //console.log("No physical location found for room: "+location.name)
          });
        });

        //create a template from the person mesh and use it to create a little figurine for each character:
        let personTemplate = getChildByName(scene.children[0],"PERSON");
        
        characters.forEach(character => {
          makePlaneForCharacter(character,personTemplate.geometry, personTemplate.material)
        }) 

        scene.remove(personTemplate)
        movePeopleIfRequired();
      });                                 

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
    animate();
}

export {TIMESCALE,characters,titanic_time_milliseconds_since_jan_1_1970}