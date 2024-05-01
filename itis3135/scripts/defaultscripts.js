function scriptTest(){
    alert("Hey my script is running");
}

document.getElementById("date").innerHTML = "Date : " + Date();


function moodGreeting() {
    // Prompt the user for their name
    let userName = prompt("What's your name?");
    
    // Validate if the user entered a name
    if (userName) {
        // Prompt the user for their mood rating
        let mood = prompt("How are you feeling today? (Rate it on a scale of 1-10)");

        // Validate the mood rating
        if (!isNaN(mood) && mood >= 1 && mood <= 10) {
            let text;
            if (mood <= 5) {
                text = `Womp Womp ${userName}!`;
            } else {
                text = `You are feeling good, ${userName}!`;
            }

            // Display the greeting message
            alert(`The {name of your company} welcomes you, ${userName}! ${text}`);
        } else {
            alert("Mood must be a number between 1 and 10.");
        }
    } else {
        alert("Please enter your name.");
    }
}

// function getToKnow(){
//     let user = document.getElementById("userName").value;
 
//     let output;
//     if(typeof user === "string"){
//         output = `Welcome, ${user}! We're glad you are doing well!`
//     }else{
//         output= "make sure you enter your name"
//     }
    
// document.getElementById("greeting").innerHTML = output;
// }

// function moodRate(){
//     let mood = document.getElementById("number").value;
//     let text;
//     if (isNaN(mood) || mood < 1 || mood > 10) {
//        text =  "Mood Can't exceed 10";
//       } else if (mood<= 5){
//         text = `Womp Womp ${number}`;
//       }else{
//         text= `You are feeling ${number} out of 10 Nice to hear that`
//       }
//       document.getElementById("moodrating").innerHTML = text;

//  } 

 document.getElementById("polygonForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission
  
    // Get the value entered by the user
    let favoriteNumber = parseFloat(document.getElementById("favoriteNumber").value);
  
    // Ensure the number is between 0 and 10
    favoriteNumber = Math.abs(Math.round(favoriteNumber)); // Converts negative numbers to positive and rounds decimals to nearest integer
    favoriteNumber = Math.min(Math.max(favoriteNumber, 0), 10); // Clamps the number between 0 and 10
  
    // Array containing polygon names
    const polygonNames = ["", "Monogon", "Digon", "Triangle", "Quadrilateral", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"];
  
    // Alert the name of the polygon based on the number of sides
    alert("The name of the polygon with " + favoriteNumber + " sides is: " + polygonNames[favoriteNumber]);
  });

 

    
//  function findPolygon(){
//     let polygon = document.getElementById("favoriteNumber").value;
//     let text;
//     const Polygons = {
//         "monogon": 1,
//         "bigon": 2,
//         "triangle": 3,
//         "quadrilateral": 4,
//         "pentagon": 5,
//         "hexagon": 6,
//         "heptagon": 7,
//         "octagon": 8,
//         "ennagon": 9,
//         "decagon": 10,  
//     };
//     if(isNaN(polygon)){
//         text = "Make sure it is between 1-10"
//     }else if(polygon < 0 ){
//        text = Math.abs(polygon);
//     }else{
//         text = polygon;
//     }

//     if (favoriteNumber.isInteger(text)) {
//         text = text.toFixed(0); 
//     }
//     document.getElementById("yourPolygon").innerHTML = text;
//  }