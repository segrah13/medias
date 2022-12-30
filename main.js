let show1=document.getElementById("containerContent");
let show2=document.getElementById("containerSpecifications");
let show3=document.getElementById("containerUx/Ui");
let show4=document.getElementById("containerContenus");
let show5=document.getElementById("containerFrontEnd");
let show6=document.getElementById("containerArchitecture");
let show7=document.getElementById("containerBakcEnd");
let show8=document.getElementById("containerHebergement");

let statusArray = [
   {object: show1, state: false, key: "show1"},
   {object: show2, state: false, key: "show2"},
   {object: show3, state: false, key: "show3"},
   {object: show4, state: false, key: "show4"},
   {object: show5, state: false, key: "show5"},
   {object: show6, state: false, key: "show6"},
   {object: show7, state: false, key: "show7"},
   {object: show8, state: false, key: "show8"}
]


function readTextFile(file, callback) {
   var rawFile = new XMLHttpRequest();
   rawFile.overrideMimeType("application/json");
   rawFile.open("GET", file, true);
   rawFile.onreadystatechange = function() {
       if (rawFile.readyState === 4 && rawFile.status == "200") {
           callback(rawFile.responseText);
       }
   }
   rawFile.send(null);
}

//usage:
readTextFile("data.json", function(text){
   var data = JSON.parse(text);
   addElement(data);
});


function addElement(data) {
   let actuelleDiv;
   for (let i=0; i<500; i++){
      // create a new div element
      switch (data[i].field1){
         case "STRATEGIE":
            actuelleDiv = document.getElementById("strategieMarker");
            break;
         case "SPECIFICATIONS":
             actuelleDiv = document.getElementById("specificationsMarker");
            break;
         case "UX/UI":
               actuelleDiv = document.getElementById("Ux/UiMarker");
               break;
         case "CONTENUS":
               actuelleDiv = document.getElementById("contenusMarker");
                break;
         case "FRONTEND":
               actuelleDiv = document.getElementById("frontEndMarker");
               break;
         case "ARCHITECTURE":
               actuelleDiv = document.getElementById("architectureMarker");
               break;
         case "BACKEND":
               actuelleDiv = document.getElementById("backEndMarker");
               break;
         case "HEBERGEMENT":
               actuelleDiv = document.getElementById("hebergementMarker");
               break; 
      }

      const newDiv = document.createElement("div");
      newDiv.className = "field7";

      // and give it some content
      const newContent = document.createTextNode(data[i].field7);
      
      
      // add the text node to the newly created div
      newDiv.appendChild(newContent);
      
      // add the newly created element and its content into the DOM
      let parent = actuelleDiv.parentNode;
      parent.insertBefore(newDiv, actuelleDiv);

   }
 }

 function show(number){

   var key = "show" + number
   
   index =  statusArray.findIndex((obj => obj.key == key));

   if(statusArray[index].state == false){
      statusArray[index].object.style.display = "block"
      statusArray[index].state = true
   }else{
      statusArray[index].object.style.display = "none"
      statusArray[index].state = false
   }

 }
