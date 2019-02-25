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
var controlBlank = ["_", "_", "_", "_", "_", "_", "_"];
var paranoiaBlank = ["_", "_", "_", "_", "_", "_", "_", "_"];


// Array of blanks
var blankWords = [
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

// So for each word in the answer array
for (i = 0; i < answerWord.length; i++) {

    // If the computer guesses word [i]
    if (computerGuess == answerWord[i]) {

        // Blank guess will be blankword[i]
        var blankGuess = blankWords[i];
    }
}

console.log(blankGuess);
console.log(computerGuess);
blankslotText.textContent = blankGuess



// Capture user guess (spoiler alert, everything happens in this function)

// When a key is hit
document.onkeyup = function () {

    // Making sure all is lower case
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // Shows us what we typed
    console.log(userGuess);

    // Determine if the key was correct or not 

    // 1. Loop through each letter in the guess
    for (i = 0; i < computerGuess.length; i++) {
        
        // If the userguess is a key within the computer guess
        if (userGuess == computerGuess[i]) {
            
            // Replace the blank slot accordingly
            blankGuess.splice(i, 1, userGuess);

            // Update HTML
            blankslotText.textContent = blankGuess;

        }
    }
}
