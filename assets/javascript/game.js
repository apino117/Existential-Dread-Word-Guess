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

// 2) Game Function
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




// START OF JAVASCRIPT //

// a) Make an array with the answers

var possibleAnswers = ["texas", "trio", "airplane", "hiphop", "international"]
console.log(possibleAnswers[0])



// b) Randomly (or maybe not so randomly) Pick Question

// Randomly chooses a choice from the options array. This is the Computer's guess.
var answerPrompt = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
console.log(answerPrompt)


// c) User Presses Letter



// d) Letter is either True or False (matches or doesn't):
    // d1) If letter is true --> replace according blank space with letter
    // d2) Else put letter on the guessed board and tick down a guess



// e) If all letters are filled display win message and restart loop with a different question



// f) If all guesses run out display lose message and restart loop with same (?) question






