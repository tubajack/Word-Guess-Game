//Display a list of the Simpsons Characters
var SimpsonsCharacters = ["Homer", "Marge", "Bart", "Lisa", "Maggie", "Grandpa Simpson", "Ralph Wiggum", "Milhouse", "Mr Burns", "Moe"];


//Set the counters for number of wins and number of losses
var wins = 0, losses = 0;

//Declare an empty array for the characters inputted. Add to the array once you guess a letter
var guesses = [];


//Display the characters
var userText = document.getElementById("user-text");
console.log(userText);


document.onkeyup = function(event){

    //var node = document.createElement("DIV");
    var textnode = document.createTextNode(event.key + ",");
    //node.appendChild(textnode);
    userText.appendChild(textnode);

    
    //Add on to the guess array
    guesses.push(event.key);

    for(var i = 0; i < guesses.length; i++){
        //console.log(guesses[i]);
    }
}






