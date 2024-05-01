function scriptTest(){
    alert("Hey my script is running");
}

document.getElementById("date").innerHTML = "Date : " + Date();


function moodGreeting() {
    let userName = document.getElementById("userName").value.trim();
    let moodRating = parseInt(document.getElementById("moodRating").value);

    if (userName === "") {
        document.getElementById("greetingMessage").innerHTML = "Please enter your name.";
        return;
    }

    if (isNaN(moodRating) || moodRating < 1 || moodRating > 10) {
        document.getElementById("greetingMessage").innerHTML = "Mood must be a number between 1 and 10.";
        return;
    }

    let moodMessage;
    if (moodRating <= 5) {
        moodMessage = "Womp Womp";
    } else {
        moodMessage = "You are feeling good";
    }

    document.getElementById("greetingMessage").innerHTML = `The Su Designs welcomes you, ${userName}!<br>We're glad you are doing ${moodMessage}!`;
}


 document.getElementById("polygonForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let favoriteNumber = parseFloat(document.getElementById("favoriteNumber").value);
    favoriteNumber = Math.abs(Math.round(favoriteNumber)); 
    favoriteNumber = Math.min(Math.max(favoriteNumber, 0), 10);
    const polygonNames = 
    [
        "", 
        "Monogon",
        "Digon",
        "Triangle",
        "Quadrilateral", 
        "Pentagon", 
        "Hexagon", 
        "Heptagon", 
        "Octagon",
        "Nonagon",
        "Decagon"
    ];
    alert("The name of the polygon with " + favoriteNumber + " sides is: " + polygonNames[favoriteNumber]);
  });

