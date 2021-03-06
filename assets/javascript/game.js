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
var possibleguesses = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//var guesses = [];
var letterguess = 0;


//Create variables for holding references to where we display things in HTML
var wordGuessLength = document.getElementById("word-guess");
var randomGuessDiv = document.getElementById("random-guess");
var gameResult = document.getElementById("game-result");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var livesRemaining = document.getElementById("livesremaining-text");



livesRemaining.textContent = "Lives Remaining: ";

//Pick a random character for the Simpson's trivia game
//The random guess is a string. 
var randomGuess = SimpsonsCharacters[Math.floor(Math.random() * SimpsonsCharacters.length)];
console.log(randomGuess);


//This code is being written out so that the space bar doesn't count as a character. 
//This is the length not including the space bar character. 
var length = 0; 
var correctAnswer = "";

for(var i = 0; i < randomGuess.length; i++){
    if(randomGuess[i] !== " "){
        length++;
        correctAnswer += "_";
    }
    else{
        correctAnswer += " ";
    }
}

randomGuessDiv.textContent = "The word is: " + correctAnswer;
console.log(length);
console.log(correctAnswer);

//Declare a lives remaining variable
var livesRemaining2 = length + 1;




//This array is to tell the user what letters have already been guessed
var alreadyGuessed = [];

var userText = document.getElementById("user-text");

document.onkeyup = function(event){
    //letterguess++;
    var keyPress = event.key.toUpperCase();

    if(possibleguesses.includes(keyPress)){
        //Make sure it has not already been guessed
        if(!alreadyGuessed.includes(keyPress)){
            alreadyGuessed.push(keyPress);

            if(randomGuess.includes(keyPress)){
                //Replace the dashes with the letter guessed
                for(var j = 0; j < randomGuess.length; j++){
                    //Replace the dash with the letter if and only if it is a match
                    if(randomGuess[j] === keyPress){
                        //Replace the dash with that letter

                        correctAnswer = correctAnswer.split("");
                        correctAnswer[j] = keyPress;
                        correctAnswer = correctAnswer.join("");

                        randomGuessDiv.textContent = "The word is: " + correctAnswer;
                        console.log(randomGuess);
                        console.log(correctAnswer);
                        

                        //If the word is successfully guessed, add 1 to the wins counter
                        if((correctAnswer === randomGuess) && (livesRemaining2 > 0)){
                            //correctAnswer = correctAnswer.join();
                            gameResult.textContent = "Congratulations. You have won this round!";
                            wins++;
                            winsText.textContent = "Wins: " + wins;
                            reset();
                        } 

                        
                    }
                }
            }
           

            letterguess++;
            if(letterguess === 1){
                var textnode = document.createTextNode(event.key);
            }
            else{
                var textnode = document.createTextNode("," + event.key);
            }

            userText.appendChild(textnode);
                
            //Add on to the guess array
            alreadyGuessed.push(event.key);

            //Make all guesses uppercase
            userText.style.textTransform = "uppercase";

            //Decrement the lives remaining
            livesRemaining2--;
            livesRemaining.textContent = "Lives Remaining: " + livesRemaining2;


            //If lives remaining is equal to 0, add 1 to the loss counter
            if(livesRemaining2 === 0){
                gameResult.textContent = "Sorry, you lost. Better luck next time.";
                losses++;
                lossesText.textContent = "Losses: " + losses;
                reset();
            }

            
        }
    } 
}

//Display all necessary information
wordGuessLength.textContent = "The word you are guessing is " + length + " characters long.";
randomGuessDiv.textContent = "The word is: " + correctAnswer;
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
livesRemaining.textContent = "Lives Remaining: " + livesRemaining2; 


//Create a reset function
function reset(){

    //Reset the word, previous inputs, and lives remaining
    alreadyGuessed = [];
    //userText = "";
    correctAnswer = "";

    randomGuess = SimpsonsCharacters[Math.floor(Math.random() * SimpsonsCharacters.length)];

    length = 0;
    for(var i = 0; i < randomGuess.length; i++){
        if(randomGuess[i] !== " "){
            length++;
            correctAnswer += "_";
        }
        else{
            correctAnswer += " ";
        }
    }
     

    console.log(randomGuess);
    console.log(length);

    livesRemaining2 = length + 1;

    wordGuessLength.textContent = "The word you are guessing is " + length + " characters long.";
    randomGuessDiv.textContent = correctAnswer;
    livesRemaining.textContent = "Lives Remaining: " + livesRemaining2;

   
    
    
}








