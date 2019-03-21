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
    var textnode = document.createTextNode(event.key);
    //node.appendChild(textnode);
    userText.appendChild(textnode);

    //var node = document.createElement("LI");                 // Create a <li> node
    //var textnode = document.createTextNode("Water");         // Create a text node
    //node.appendChild(textnode);                              // Append the text to <li>
    //document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

    //userText.appendChild(event.key);

    //$("#user-text").append(event.key);

    //Add on to the guess array
    guesses.push(event.key);

    for(var i = 0; i < guesses.length; i++){
        //console.log(guesses[i]);
    }
}






