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

// Doc-ID Variables for HTML //
var wins = document.getElementById("wins");
var letterSlot = document.getElementById("letterSlot");
var letterReveal = document.getElementById("letterReveal");
var letterGuessed = document.getElementById("letterGuessed");
var guessesLeft = document.getElementById("guessesLeft");
// When letter is correct add it to the rightAnswer array //
var rightAnswer = []
var wrongAnswer = []
// For each word we'll have an according variable with blank spaces so they can be replaced mayb? //
var blankTexas = ["0", "0", "0", "0", "0"];
var blankTrio = ["0", "0", "0", "0"];
var blankAirplane = ["0", "0", "0", "0", "0", "0", "0", "0"];
var blankHiphop = ["0", "0", "0", "0", "0", "0"];
var blankInternational = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0","0", "0", "0"];


// Possible Answers //

var texas = ["t", "e", "x", "a", "s"];
var trio = ["t", "r", "i", "o"];
var airplane = ["a", "i", "r", "p", "l", "a", "n", "e"];
var hiphop = ["h", "i", "p", "h", "o", "p"];
var international = ["i", "n", "t", "e", "r", "n", "a", "t", "i", "o","n", "a", "l"];

// Array of possible answers + Random Answer Generator //

var possibleAnswer = [texas, trio, airplane, hiphop, international];
var computerGuess = possibleAnswer[Math.floor(Math.random() * possibleAnswer.length)];


// // If statement for when answer is texas

// document.onkeyup = function() {
//     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//     console.log(userGuess);
//     console.log(computerGuess);
//     if ((computerGuess == possibleAnswer[0]) && ((userGuess === "t") || (userGuess === "e") || (userGuess === "x") || (userGuess === "a") || (userGuess === "s"))) {
//         console.log("yeah man!")
//     } else {
//         console.log("nope!")
//     }
// }

// Improved Formula (this one is for texas)

document.onkeyup = function() {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);
        console.log(computerGuess);
        if ((computerGuess == possibleAnswer[0]) && (texas.includes(userGuess))) {
            console.log("win");
        } else {
            console.log("lose");
        }
}

// d1) If letter is true --> replace according blank space with letter

// Function to push answer to rightAnswer array //

// Use random method to create a loop so that when the user guesses something it can be compared to a random letter in the computerguess (it's then looped through each letter)

// if (userGuess === "correct") {
//     rightAnswer.push(" ")
// }
// if (userGuess === "incorrect") {
//     wrongAnswer.push(" ")
// }



// d2) Else put letter on the guessed board and tick down a guess



// e) If all letters are filled display win message and restart loop with a different question



// f) If all guesses run out display lose message and restart loop with same (?) question






