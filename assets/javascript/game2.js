// Establish answer words as individual letters
var free = ["f", "r", "e", "e"];
var scared = ["s", "c", "a", "r", "e", "d"]
var control = ["c", "o", "n", "t", "r", "o", "l"]
var paranoia = ["p", "a", "r", "a", "n", "o", "i", "a"]

// Array of answers
var answerWord = [
    free,
    scared,
    control,
    paranoia,
]

// Establish blank variables as individual spaces
var freeBlank = ["_", "_", "_", "_"];
var scaredBlank = ["_", "_", "_", "_", "_"];
var controlBlank = ["_", "_", "_", "_", "_", "_"];
var paranoiaBlank = ["_", "_", "_", "_", "_", "_", "_"];


// Array of blanks
var blankGuess = [
    freeBlank,
    scaredBlank,
    controlBlank,
    paranoiaBlank,
]

// Establish the blankslotText variable in accordance to HTML
var blankslotText = document.getElementById("blankslot-text");


// Computer needs to make a selection
var computerGuess = answerWord[Math.floor(Math.random() * answerWord.length)];


// Make blank guess line up with computer guess

// For every index of the answer word array
for (i = 0; i<answerWord.length; i++) {

    // If the computer guess is index[i]
    if (computerGuess == answerWord[i]) {
        
        // Change the text content of blank
        blankslotText.textContent = blankGuess[i];
    }
}

console.log(computerGuess);
console.log(blankGuess);

