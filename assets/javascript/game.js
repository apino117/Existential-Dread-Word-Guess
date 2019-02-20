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
        // h) Question - HTML / CSS
    // 2) Game Function
        // a) Set up list of questions and answers
        // b) Randomly (or maybe not so randomly) Pick Question
        // c) User Presses Letter
        // d) Letter is either True or False (matches or doesn't):
            // d1) If letter is true --> replace according blank space with letter
            // d2) Else put letter on the guessed board and tick down a guess
        // e) If all letters are filled display win message and restart loop with a different question
        // f) If all guesses run out display lose message and restart loop with same (?) question
        


