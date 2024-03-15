function scriptTest(){
    alert("Hey my script is running");
}
document.getElementById("date").innerHTML = "Date : " + Date();

function getToKnow(){
    let user = document.getElementById("userName").value;
 
    let output;
    if(typeof user === "string"){
        output = `Welcome, ${user}! We're glad you are doing well!`
    }else{
        output= "make sure you enter your name"
    }
    
    document.getElementById("greeting").innerHTML = output;
}

 function moodRate(){
    let mood = document.getElementById("number").value;
    
   let text;
    if (isNaN(mood) || mood < 1 || mood > 10) {
       text =  "Mood Can't exceed 10";
      } else if (mood<= 5){
        text = `Womp Womp ${number}`;
      }else{
        text= `You are feeling ${number} out of 10 Nice to hear that`
      }
      document.getElementById("moodrating").innerHTML = text;

 } 

 

    
 function findPolygon(){
    let polygon = document.getElementById("favoriteNumber").value;
    let text;
    const Polygons = {
        "monogon": 1,
        "bigon": 2,
        "triangle": 3,
        "quadrilateral": 4,
        "pentagon": 5,
        "hexagon": 6,
        "heptagon": 7,
        "octagon": 8,
        "ennagon": 9,
        "decagon": 10,  
    };
    if(isNaN(polygon)){
        text = "Make sure it is between 1-10"
    }else if(polygon < 0 ){
       text = Math.abs(polygon);
    }else{
        text = polygon;
    }

    if (favoriteNumber.isInteger(text)) {
        text = text.toFixed(0); 
    }
    document.getElementById("yourPolygon").innerHTML = text;
 }