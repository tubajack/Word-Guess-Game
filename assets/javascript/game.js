//Display a list of the Simpsons Characters
var SimpsonsCharacters = ["HOMER", "MARGE", "BART", "LISA", "MAGGIE", "ABE SIMPSON", "RALPH WIGGUM", "MILHOUSE", "MR BURNS", "MOE SYZLAK", 
"PRINCIPAL SKINNER","GROUNDSKEEPER WILLIE", "PATTY", "SELMA", "NELSON", "EDNA KRABAPPEL"];

//Display all of the user clues
var characterClues = ["Catchphrase is 'Doh'", 
"Has tall blue hair", 
"Mischievous prankster. Son of Homer and Marge", 
"Plays the saxophone. Most intellecutal Simpson",
"Sucks on a red pacificer. Trips over clothing and falls on face constantly. ",
"Father of Homer Simpson. Tells many long, rambling, and incoherent stories.",
"Oddball. Has very erratic behavior. Son of the Springfield Police Chief. Is good friends with Lisa Simpson",
"Best friend of Bart Simpson. Wears thick eyeglasses. One of the few characters to have eyebrows.",
"Owner of the Springfield Nuclear Power Plant. Boss of Homer Simpson.",
"Bartender. Homer Simpson is a frequent visitor to his bar.",
"Principal of Springfield Elementary School. Has an unhealthy dependence on his mother.",
"Groundskeeper of Springfield Elementary School. Is of Scottish descent. Lives in a shack on school property.",
"One of Marge Simpson's twin sisters. Has an afro. Wears triangular earrings. Is a lesbian.",
"The older of Marge's two twin sisters. Longs for male companionship.",
"One of the bullies at Springfield Elementary. Catchphrase is 'Ha-Ha'",
"Bart and Milhouse's teacher at Springfield Elementary School. Is desperate for a man"
];


//Set the counters for number of wins and number of losses
var wins = 0
var losses = 0;
//var livesRemaining = SimpsonsCharacters.length() + 1;

//Declare an empty array for the characters inputted. Add to the array once you guess a letter
var guesses = [];
var letterguess = 0;


//Create variables for holding references to where we display things in HTML
//var wordGuessLength = document.getElementById("word-guess");
//var clueGiven = document.getElementById("clues-text");
//var winsText = document.getElementById("wins-text");
//var lossesText = document.getElementById("losses-text");
//var livesRemaining = document.getElementById("livesremaining-text");

//Pick a random character for the Simpson's trivia game
var randomGuess = SimpsonsCharacters[Math.floor(Math.random() * SimpsonsCharacters.length)];
console.log(randomGuess);

var length = 0; 
for(var i = 0; i < randomGuess.length; i++){
    if(randomGuess[i] !== " "){
        length++;
    }
}
console.log(length);

//Display the underscore dashes which happen before the game starts
/*var correctAnswer = [];
for(var i = 0; i < SimpsonsCharacters.length; i++){
    correctAnswer[i] = '_';
}*/

//Display how many letters are left to guess
//var lettersleftforsuccess = SimpsonsCharacters.length;


//while(lettersleftforsuccess > 0){
//}

//Display the characters

if(String.fromCharCode() >= 65 && String.fromCharCode() <= 90){
    
}
var userText = document.getElementById("user-text");

document.onkeyup = function(event){
    letterguess++;

    if(letterguess === 1){
        var textnode = document.createTextNode(event.key);
    }
    else{
        var textnode = document.createTextNode("," + event.key);
    }

    userText.appendChild(textnode);
        
    //Add on to the guess array
    guesses.push(event.key);

    //Make all guesses uppercase
    userText.style.textTransform = "uppercase";
}








