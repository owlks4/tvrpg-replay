import "./style.css";
import { GLTFLoader } from "./GLTFLoader.js";
import {createScene,scene,renderer,controls,camera,spawn2DText,labelRenderer,followedPlayers,
        setDistBetweenCameraAndTargetFromCamAndTargetPos,makePlaneForCharacter,movePeopleIfRequired} from "./scene3d.js";
import decks from "/decks.gltf?url"
import OUTPUT_PEOPLE_ROOM_HISTORIES_2023 from "/OUTPUT_PEOPLE_ROOM_HISTORIES_2023.json?url"
import OUTPUT_PEOPLE_ROOM_HISTORIES_2024 from "/OUTPUT_PEOPLE_ROOM_HISTORIES_2024.json?url"
import {STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970, END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970,
        TIMESCALE, repository_rooms, setStartingTime, setEndingTime } from "./consts.js"
import {setTime, titanic_time_milliseconds_since_jan_1_1970} from "./utility.js";
import * as THREE from "three"

let TIME_RANGE = document.getElementById("time-range");
TIME_RANGE.value = 0;

let YEAR = 2024
let MONTH = 3 //3 is april.
let DAY = 14
let HOUR = 21
let MIN = 0

let END_DAY = 15
let END_HOUR = 5
let END_MIN = 45

let iceberg_time = new Date();
iceberg_time.setYear(YEAR)
iceberg_time.setMonth(3)
iceberg_time.setDate(14)
iceberg_time.setHours(23)
iceberg_time.setMinutes(40)
iceberg_time.setSeconds(0)
iceberg_time.setMilliseconds(0)
iceberg_time = iceberg_time.getTime()

let titleText = document.getElementById("titleText");
let characters = []

document.getElementById("start-button").disabled = true;

let defaultMaterial = null;

let highlightedPeopleParent = document.getElementById("highlighted-people-parent");

let personSelector = document.getElementById("person-selector")
personSelector.onchange = (e) => {
  setHighlightStateOfPersonWithId(e.target.value,true);
};

let loadingFinished = false;

let willLiveMaterial = new THREE.MeshBasicMaterial( {color: 0x2070c0, side: THREE.DoubleSide} );

function setHighlightStateOfPersonWithId(id,shouldHighlight){
  for (let i = 0; i < characters.length; i++){
    let character = characters[i];
    if (character.id == id){
      if (shouldHighlight){
        if (!followedPlayers.includes(character)){
          followedPlayers.push(character);
          console.log(character.name + " was selected")
          character.object3d.material = new THREE.MeshBasicMaterial( {color: 0xe02020, side: THREE.DoubleSide} );
          character.object3d.scale.set(2, 2, 2)
          character.text = spawn2DText(character.object3d, character.name, 0.7, "", "", "")
          let personHighlightWidget = document.createElement("div");
          personHighlightWidget.className = "person-highlight-widget";
          personHighlightWidget.style = "background-color:#"+character.object3d.material.color.getHexString();
          let nameDiv = document.createElement("span");
          nameDiv.innerText = character.name;
          nameDiv.style = "margin-right:1em;"
          let colorInput = document.createElement("input");
          colorInput.setAttribute("type","color");
          colorInput.className = "personWidgetColorPicker";
          colorInput.value = "#"+character.object3d.material.color.getHexString();
          colorInput.oninput = (e) => {console.log(e.target.value);
                                      character.object3d.material.color = new THREE.Color(e.target.value);
                                      personHighlightWidget.style = "background-color:"+e.target.value};
          console.log(character.object3d.material.color.getHexString())
          personHighlightWidget.appendChild(nameDiv)
          personHighlightWidget.appendChild(colorInput)          
          let closeButton = document.createElement("span")
          closeButton.style = "margin-left:1em;margin-right:1em;cursor:pointer;"
          closeButton.innerText = "❌"
          closeButton.onclick = () => {personHighlightWidget.remove(); setHighlightStateOfPersonWithId(id, false)};
          personHighlightWidget.appendChild(closeButton);
          highlightedPeopleParent.appendChild(personHighlightWidget);
          personSelector.selectedIndex = 0;
        }
      } else {
        character.object3d.material = defaultMaterial; //character.dies ? defaultMaterial : willLiveMaterial;
        character.object3d.scale.set(1, 1, 1)
        character.myTrails.forEach(trail => {
            trail.textObject[0].remove(trail.textObject[1])
            scene.remove(trail)
        });
        character.myTrails = []
        if (character.text != null){
          character.text[0].remove(character.text[1])
          character.text = null;
        }
      }
      break;
    }
  }
}


TIME_RANGE.oninput = (e) => {
  let newValue = e.target.value;
  setTime(STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970 + (newValue * (END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970 - STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970)))
  updateVisualClock();
  movePeopleIfRequired();
  }

let loader = new GLTFLoader();

setTime(STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970);
let clockRunning = true;
let lastTimeClockUpdated = Date.now()

createScene();
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
    if (record.t >= STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970 && record.t <= END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970){
      return true;
    }
  }
  return false;
}

async function start() {

    var s = new Date();
    s.setYear(YEAR)
    s.setMonth(MONTH)
    s.setDate(DAY)
    s.setHours(HOUR)
    s.setMinutes(MIN)
    s.setSeconds(0)
    s.setMilliseconds(0)

    var e = new Date();
    e.setYear(YEAR)
    e.setMonth(MONTH)
    e.setDate(END_DAY)
    e.setHours(END_HOUR)
    e.setMinutes(END_MIN)
    e.setSeconds(0)
    e.setMilliseconds(0)

    setStartingTime(s.getTime())
    setEndingTime(e.getTime())

    setTime(STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970);

    let icebergPercentageTranslation = ((iceberg_time - STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970)
                                        / (END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970 - STARTING_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970)) * 100;
    document.getElementById("iceberg").style = "left:"+icebergPercentageTranslation+"%";

    repository_rooms.forEach(room => {
      room.name = room.name.trim().replaceAll("  "," ")
    })

    let response = null;

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
      room.name = room.name.trim().replaceAll("  "," ").replaceAll(" ","_").replaceAll(".","")
      room.occupants = 0
      room.occupants3d = []
    }

    updateVisualClock();

    console.log("Beginning hunting")

    loader.load(decks,async function (gltf) {
        await scene.add(gltf.scene); //adds the gltf content to the scene

        //for each deck, gives all the rooms in repository_rooms that are represented in the model a location reference from the model

        let numDecks = getChildByName(gltf.scene, "DECKS").children.length;

        getChildByName(gltf.scene, "DECKS").children.forEach((deck, index) => {
          console.log("Hunting for rooms on deck: "+deck.name)
          deck.children.forEach((location)=>{
            location.name = location.name.trim()
            for (let i = 0; i < repository_rooms.length; i++){
              let room = repository_rooms[i];
              if (room.name == location.name){
                  //console.log(room.name + " was located.")
                  room.object3d = location
                  room.object3d.position.set(location.position.x,deck.position.y,location.position.z)
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
          character.myTrails = [];
          makePlaneForCharacter(character,personTemplate.geometry, personTemplate.material)
          character.myRandomPositionScalar = [(Math.random() * amountOfVarianceAllowedInRandomPosition) - (amountOfVarianceAllowedInRandomPosition / 2),
                                              (Math.random() * amountOfVarianceAllowedInRandomPosition) - (amountOfVarianceAllowedInRandomPosition / 2)]          
          charactersSortedbyName.push(character)
          let lastRoomId = character.room_entry_records[character.room_entry_records.length - 1].rm
          if (lastRoomId == 600 || lastRoomId == 800){
            character.dies = true
          } else {
            character.dies = false
           }
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
        
        personTemplate.position.set(0,-999,0)
        scene.remove(personTemplate)
        movePeopleIfRequired();
        loadingFinished = true;
        let startButton = document.getElementById("start-button");
        startButton.style = "";
        startButton.disabled = false;
        startButton.innerText = "Start";
        startButton.onclick = () => {document.getElementById("loading-text").remove(); animate();}
      });                       
}

function animate() {
  requestAnimationFrame( animate );
  let now = Date.now()

  if (clockRunning && titanic_time_milliseconds_since_jan_1_1970 < END_TIME_IN_MILLISECONDS_SINCE_JAN_1_1970 && now - lastTimeClockUpdated >= 1000/TIMESCALE){
    setTime(titanic_time_milliseconds_since_jan_1_1970 + 1000 * (TIMESCALE/1)); //tick clock 
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

export {TIMESCALE,characters}