//Display a list of the Simpsons Characters
var SimpsonsCharacters = ["Homer", "Marge", "Bart", "Lisa", "Maggie", "Abe Simpson", "Ralph Wiggum", "Milhouse", "Mr Burns", "Moe", "Principal Skinner",
"Groundskeeper Willie", "Patty", "Selma", "Nelson"];
var characterClues = ["Catchphrase is 'Doh'", 
"Has tall blue hair", 
"Mischievous prankster. Son of Homer and Marge", 
"Plays the saxophone. Most intellecutal Simpson",
"Sucks on a red pacificer. Trips over clothing and falls on face constantly. ",
"Father of Homer Simpson. Tells many long, rambling, and incoherent stories.",
"Oddball. Has very erratic behavior. Son of the Springfield Police Chief. Is good friends with Lisa Simpson",
"Best friend of Bart Simpson. Wears thick eyeglasses. One of the few characters to have eyebrows.",
"Owner of the Springfield Nuclear Power Plant. Boss of Homer Simpson.",
"Bartender. Homer Simpson is a frequent visitor to his bar."
];


//Set the counters for number of wins and number of losses
var wins = 0
var losses = 0;

//Declare an empty array for the characters inputted. Add to the array once you guess a letter
var guesses = [];
var letterguess = 0;


//Display the characters
var userText = document.getElementById("user-text");
//console.log(userText);


document.onkeyup = function(event){
    letterguess++;

    if(letterguess === 1){
        var textnode = document.createTextNode(event.key);
    }
    else{
        //var node = document.createElement("DIV");
        var textnode = document.createTextNode("," + event.key);
    }

    //node.appendChild(textnode);
    userText.appendChild(textnode);
    
    //Add on to the guess array
    guesses.push(event.key);

    //Make all guesses uppercase
    userText.style.textTransform = "uppercase";

    for(var i = 0; i < guesses.length; i++){
        //console.log(guesses[i]);
    }
}






