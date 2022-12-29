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
   let show1=document.getElementById("containerContent");
   let show2=document.getElementById("containerSpecifications");
   let show3=document.getElementById("containerUx/Ui");
   let show4=document.getElementById("containerContenus");
   let show5=document.getElementById("containerFrontEnd");
   let show6=document.getElementById("containerArchitecture");
   let show7=document.getElementById("containerBakcEnd");
   let show8=document.getElementById("containerHebergement");
   if (number == 1){
      show1.style.display="block";
   }
   
   
   if (number == 2){
      show2.style.display="block";
   }
   if (number == 3){
      show3.style.display="block";
   }
   if (number == 4){
      show4.style.display="block";
   }
   if (number == 5){
      show5.style.display="block";
   }
   if (number == 6){
      show6.style.display="block";
   }
   if (number == 7){
      show7.style.display="block";
   }
   if (number == 8){
      show8.style.display="block";
   }
   
 }
