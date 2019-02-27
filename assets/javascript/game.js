// Jquery didnt even work for the audio, why cant audio work?!?!?
// var bgMusic = document.createElement("audio");
// bgMusic.setAttribute("src", "assets/Dread-Guess-Background-Music.mp3");
// $(document).ready(function () {
//     document.querySelector("#audio-wrapper").append(bgMusic);
//     console.log(bgMusic);
//     bgMusic.play();
// });

// Attempt to hide music player after click
// var audioWrapper = document.getElementById("audio-Wrapper")
// var bgMusic = document.getElementById("bgMusic");
// bgMusic.onclick = function() {
//     document.getElementById("audio-Wrapper").style.visibility = "hidden";
// }

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

// Establish a guessesremaining & a win counter
var guessremainCounter = 13;
var winCounter = 0;

// Link guessremain counter to HTML
var guessremainText = document.getElementById("guessesremaining-text")
guessremainText.textContent = ("Guesses Remaining: " + guessremainCounter);

// Link win counter to HTML
var winsText = document.getElementById("wins-text")
winsText.textContent = ("Wins: " + winCounter);

// Establish letters guessed array
var lettersguessedArray = []

// Link to HTML
var lettersGuessed = document.getElementById("lettersguessed");
lettersGuessed.textContent = ("Letters Guessed: " + lettersguessedArray)

// Computer needs to make a selection
var computerGuess = answerWord[Math.floor(Math.random() * answerWord.length)];

function chooseWord() {
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

    // Update HTML of blankguess 
    blankslotText.textContent = blankGuess
    // Capture user guess (spoiler alert, everything happens in this function)

    // When a key is hit
    document.onkeyup = function () {

        var isGuessed = false;

        // Making sure all is lower case
        userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        // Shows us what we typed
        console.log(userGuess);

        // Push letter to already guessed array
        lettersguessedArray.push(userGuess);

        // Update HTML
        lettersGuessed.textContent = ("Letters Guessed: " + lettersguessedArray)

        // Determine if the key was correct or not 

        // 1. Loop through each letter in the guess
        for (i = 0; i < computerGuess.length; i++) {

            // 2. If the userguess is a key within the computer guess
            if (userGuess == computerGuess[i]) {

                // 3. Replace the blank slot accordingly
                blankGuess.splice(i, 1, userGuess);

                // 4. Update HTML
                blankslotText.textContent = blankGuess;

                isGuessed = true;

            }
        }
        if (!isGuessed) {

            // Lose a guess
            guessremainCounter--;

            //Update HTML
            guessremainText.textContent = ("Guesses Remaining: " + guessremainCounter);

            // If no guesses left
            if (guessremainCounter === 0) {

                //Lose screen
                alert("Ah...you've lost...that's probably okay...");

                // Reset everything
                location.reload();
            }
        }
        // If the blankguess doesnt have anymore "_" in it
        if (!blankGuess.includes("_")) {

            // Win condition
            alert("Ah...you've won...I'm free!");

            // Add a win counter
            winCounter++;

            winsText.textContent = ("Wins: " + winCounter);

            // Reset
            // Didn't figure out how to reset without reloading whole page

        }
    }
}

chooseWord();



