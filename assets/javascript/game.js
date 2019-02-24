// HW instructions:
// Display the following on the page:
// Press any key to get started!
// Wins: (# of times user guessed the word correctly).
// Use key events to listen for the letters that your players will type.

// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// As the user guesses the correct letters, reveal them: m a d o _  _ a.

// Number of Guesses Remaining: (# of guesses remaining for the user).
// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// After the user wins/loses the game should automatically choose another word and make the user play it.

// Psuedo-Code:

// 1) Set-Up Screen:
// a) Title - CSS
// b) Instructions - HTML / CSS
// c) Wins - JVS
// d) Blank Letter Slots - JVS
// e) Revealed Letters - JVS
// f) Guesses Left - JVS
// g) Letters Guessed - JVS
// h) Question - HTML / CSS (Note - Maybe nix this part - just have a word and then maybe an explination. EG: "Guitar" and then it's like "yeah, they have a guitarist!"

// 2) Game Function:
// a) Set up list of questions and answers
// ---> Make an array with the answers
// b) Randomly (or maybe not so randomly) Pick Question
// c) User Presses Letter
// d) Letter is either True or False (matches or doesn't):
// d1) If letter is true --> replace according blank space with letter
// d2) Else put letter on the guessed board and tick down a guess
// e) If all letters are filled display win message and restart loop with a different question
// f) If all guesses run out display lose message and restart loop with same (?) question

// --------------------------------- //

// Questions & Answers:
// 1) Texas ("yeah, they're from houston!")
// 2) Trio ("that's right, they're a three-piece - drums, bass & guitar!"")
// 3) Airplane ("you got it, 'khraungbin' is a thai translation for 'air plane!'"")
// 4) Hip-hop ("oh yeah, DJ the drummer is a hip-hop producer so their songs definitely have a hip-hop backbeat!")
// 5) International ("yeah yeah, our heroes take influence ansd stlye from all over the world, giving their music a distinct fusion quality!")

// --------------------------------- //

// // Testing Words in Console Log // ---- Save this to see why it didnt work but basically scrap it. 
// var letters = ["0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// //Texas//
// console.log((letters[20]) + (letters[5]) + (letters[24]) + (letters[1]) + (letters[19]));
// //Trio//
// console.log((letters[20]) + (letters[18]) + (letters[9]) + (letters[15]));
// //Airplane//
// console.log((letters[1]) + (letters[9]) + (letters[18]) + (letters[16]) + (letters[12]) + (letters[1]) + (letters[14]) + (letters[5]));
// //HipHop//
// console.log((letters[8]) + (letters[9]) + (letters[16]) + (letters[8]) + (letters[15]) + (letters[16]));
// //International//
// console.log((letters[9]) + (letters[14]) + (letters[20]) + (letters[5]) + (letters[18]) + (letters[14]) + (letters[1]) + (letters[20]) + (letters[9]) + (letters[15]) + (letters[14]) + (letters[1]) + (letters[12]));



// START OF JAVASCRIPT //

// Establish baseline for variable
var guessesLeft = 12;

// Doc-ID Variables for HTML //
var wins = document.getElementById("wins");
var letterSlot = document.getElementById("letterSlot");
var letterReveal = document.getElementById("letterReveal");
var letterGuessed = document.getElementById("letterGuessed");
var guessesLeft = document.getElementById("guessesLeft");

var guessCounter = 13;

// For each word we'll have an according variable with blank spaces so they can be replaced mayb? //
var blankTexas = ["_" , "_" , "_" , "_" , "_" ];
var blankTrio = ["_" , "_" , "_" , "_" ];
var blankAirplane = ["_" , "_" , "_" , "_" , "_" , "_" , "_" , "_" ];
var blankHiphop = ["_" , "_" , "_" , "_" , "_" , "_" ];
var blankInternational = ["_" , "_" , "_" , "_" , "_" , "_" , "_" , "_" , "_" , "_" , "_" , "_" , "_" ];


// Possible answers as arrays of letters
var texas = ["t", "e", "x", "a", "s"];
var trio = ["t", "r", "i", "o"];
var airplane = ["a", "i", "r", "p", "l", "a", "n", "e"];
var hiphop = ["h", "i", "p", "h", "o", "p"];
var international = ["i", "n", "t", "e", "r", "n", "a", "t", "i", "o", "n", "a", "l"];

// Array of possible answers
var possibleAnswer = [texas, trio, airplane, hiphop, international];

// Random answer generator
// var computerGuess = possibleAnswer[Math.floor(Math.random() * possibleAnswer.length)];

// Comment this out and un-comment the above when we're ready to randomly choose a word, for now let's use texas.
// var computerGuess = possibleAnswer[0];

// The below is me doing a longer more written out method

// // When a key is hit
// document.onkeyup = function () {

//     // Making sure all is lower case
//     userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//     // Shows us what we typed
//     console.log(userGuess);

//     // If the answer is texas
//     if (computerGuess = possibleAnswer[0]) {


//         // If the user guess is t
//         if (userGuess == "t") {

//             // Replace slot 0 with t
//             blankTexas.splice([0], 1, (userGuess));

//             //Establish where in the HTML to replace this
//             letterReveal.textContent = blankTexas;

//             // Show us the new blank texas array to check
//             console.log(blankTexas);

//             // If the userguess is e
//         } else if (userGuess == "e") {

//             // Replace slot 1 with e
//             blankTexas.splice([1], 1, (userGuess));

//             //Establish where in the HTML to replace this
//             letterReveal.textContent = blankTexas;

//             // Show us the new blank texas array to check
//             console.log(blankTexas);

//             // If the usergues is x
//         } else if (userGuess == "x") {

//             // Replace slot 2 with x
//             blankTexas.splice([2], 1, (userGuess));

//             //Establish where in the HTML to replace this
//             letterReveal.textContent = blankTexas;

//             // Show us the new blank texas array to check
//             console.log(blankTexas);

//             // If the usergues is a
//         } else if (userGuess == "a") {

//             // Replace slot 3 with a
//             blankTexas.splice([3], 1, (userGuess));

//             //Establish where in the HTML to replace this
//             letterReveal.textContent = blankTexas;

//             // Show us the new blank texas array to check
//             console.log(blankTexas);

//             // If it's none of those letters

//             // If the usergues is s
//         } else if (userGuess == "s") {

//             // Replace slot 4 with s
//             blankTexas.splice([4], 1, (userGuess));

//             //Establish where in the HTML to replace this
//             letterReveal.textContent = blankTexas;

//             // Show us the new blank texas array to check
//             console.log(blankTexas);

//             // Finally if it's the wrong letter
//         } else {

//             // Just to make sure we know
//             console.log("lose");

//             // Lose a guess
//             guessCounter--;

//             // Update guess counter
//             guessesLeft.textContent = ("You've got " + guessCounter + " more tries!");

//             //need to push to unlikely suspects array

//             // If you have no guesses left
//             if (guessCounter === 0) {

//                 // Lose screen!
//                 alert("You lost! But no worries, you must lose to know what it is to win!");

//                 // Reset everything
//                 location.reload();
//             }

//         }
//     }
// }






// The section below is a notepad, planning ideas to move into code above



// // The below is me trying to use the .include method


// // Show us computer's guess so we have something to check against
// console.log(computerGuess)

// // When a key is hit
// document.onkeyup = function() {

//     // Making sure all is lower case
//     userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//     // Shows us what we typed
//     console.log(userGuess);

//     // If the answer is texas
//     if (computerGuess == possibleAnswer[0]) {

//         // Run a loop through each letter in texas
//         for (i = 0; i<texas.length; i++) {

//             // If the user guess is a letter included in texas
//             if (texas[i] == userGuess) {

//                 // Take the user guess and replace one element in blank texas (this is the issue)
//                 blankTexas.splice(i, 1, userGuess);

//                 // Show us the new blank texas array to check
//                 console.log(blankTexas);

//                 // If the userguess is not in texas
//             } else {
//                 console.log("lose");
//             }
//         }
//     }
// }


// ----------------------------------------------------------------------------------------------------------

// Trying out Petrell code idea:



// Making a blankGuess array
var blankGuess = [

    blankTexas,
    blankTrio,
    blankAirplane,
    blankHiphop,
    blankInternational,

];

// Make Computer choose a word
var computerGuess = possibleAnswer[Math.floor(Math.random() * possibleAnswer.length)];

// Console log to check computer guess
console.log(computerGuess);

// Make blank guess line up appropriately

// For every possible answer
for (i = 0; i < possibleAnswer.length; i++) {

    // If the computer guess is whatever answer in the array
    if (computerGuess == possibleAnswer[i]) {

        // The blank guess is of that same index
        letterReveal.textContent = blankGuess[i];

        // Check
        console.log(blankGuess[i]);
    }
}





// Onkeyup capture
document.onkeyup = function () {

    // Lowercase
    userGuess = String.fromCharCode(event.Key).toLowerCase();

    // For loop to match letters 

    // For every letter in the computer's guess
    for(i = 0; i < computerGuess.length; i++) {

        // If the user's guess is equal to that letter
        if(computerGuess[i] == userGuess) {

            // Splice the userguess at the index of the computerguess
            blankGuess.splice(i, 1, userGuess);

            // Console log to check
            letterReveal.textContent = blankGuess;
        }
    }

}

// Petrell Code //

// for(var i = 0; i < newArr.length; i++) {
//     console.log(newArr[i], 'newArr[i]', guess, 'guess');
//     if(newArr[i] == guess) {        
//         newArr.splice(i, 1, 'x');
//     }
// }