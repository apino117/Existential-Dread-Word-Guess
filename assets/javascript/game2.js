// Establish Answer Words

// Variables as individual letters
var free = ["f", "r", "e", "e"];
var scared = ["s", "c", "a", "r", "e", "d"]
var control = ["c", "o", "n", "t", "r", "o", "l"]
var paranoia = ["p", "a", "r", "a", "n", "o", "i", "a"]

// Array of variabled-out answer words
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

console.log(blankGuess)

// Computer needs to make a selection
var computerGuess = answerWord[Math.floor(Math.random() * answerWord.length)];
console.log(computerGuess);
