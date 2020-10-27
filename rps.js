// FUNCTIONS

/**
 * PLAY
 */
function rockPaperScissors() {
    pScore = 0;
    cScore = 0;
    let isPlayAgain = true;
    while (isPlayAgain) {
        game();
        showResult();
        let userWantsToPlayAgain = playAgainAnswer();
        if (userWantsToPlayAgain) {
            cScore = 0;
            pScore = 0;
        } else {
            isPlayAgain = false;
        }
    }
}

/**
 * Keep score for five rounds
 */
function game() {
    for (i = 1; i <= 5; i++) {
        // Get move from both players
        let pMove = getPlayerMove();
        let cMove = getComputerMove();
        let winner = playRound(pMove, cMove);

        if (winner.search("win") >= 0) {
            pScore++;
        } else if (winner.search("lose") >= 0) {
            cScore++
        }

        console.log(`The Computer played ${cMove}.\n ${winner}\n
                    Round: ${i}   Your Score: ${pScore}   Computer: ${cScore}`)
    }
}

/**
 * Get player's move + confirm is valid; if not valid, explain why and prompt again.
 *
 * @return {String} The user's valid input. "rock", "paper", or "scissors"
 */
function getPlayerMove() {
    let inputIsInvalid = true;
    let input;
    while (inputIsInvalid) {
        input = prompt("Rock, paper or scissors?").toLowerCase();
        let output = validateInput(input);
        if (output !== "valid") {
            alert(output);
        } else {
            inputIsInvalid = false;
        }
    }
    return input;
}

/**
 * Get computer's move
 * 
 * @return {String} The computer's move
 */
function getComputerMove() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

/**
 * Play rock paper scissors: compare player's move with computer's move and declare winner
 *
 * @param {String} playerSelection Rock, paper, or scissors
 * @param {String} computerSelection Rock, paper, or scissors
 * @return {String} The message to display victory
 */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "You tied. Try again."
    } else if (playerSelection == "rock") {
        return (computerSelection === "scissors") ? "You win! Rock beats scissors." : "You lose! Paper beats rock.";
    } else if (playerSelection === "paper") {
        return (computerSelection === "rock") ? "You win! Paper beats rock." : "You lose! Scissors beats paper.";
    } else {
        return (computerSelection === "paper") ? "You win! Scissors beats paper." : "You lose! Rock beats scissors.";
    }
}

/**
 * Show final score from game()
 */
function showResult() {
    (pScore > cScore) ? alert("You are the winner!") : (pScore === cScore) ? alert("Well, that was strange.") : alert("You're a loser!");
}

/**
 * Ask to play again
 *
 * @return {boolean} Returns true if the user wants to play again, false if not
 */
function playAgainAnswer() {
    let answerIsValid = false;
    let answer;
    while (!answerIsValid) {
        answer = prompt("Play again?").toLowerCase();
        let response = validateYesNo(answer);
        if (response === "Well, fine then.") {
            answerIsValid = true;
            answer = false;
        } else if (response === "Let's play!") {
            answerIsValid = true;
            answer = true;
        } // else answer is not valid
        alert(response);
    }
    return answer;
}

/**
 * Confirm player's text input is rock, paper or scissors
 *
 * @param {String} input The text inputed by the user for thier move
 * @return {String} The response to the user, or "valid" when the input is valid
 */
function validateInput(input) {
    if (input === "") {
        return "Please make a choice.";
    } else if ((input !== "rock") && (input !== "paper") && (input !== "scissors")) {
        return 'You can only choose "rock", "paper", or "scissors".';
    } else {
        return "valid";
    }
}


/**
 * Validate yes/no for playAgain()
 * 
 * @param {String} answer The user's answer to "Do you want to play again?"
 * @return {*}  
 */
function validateYesNo(answer) {
    if (answer === "") {
        return "You did not answer me.";
    } else if (answer === "no") {
        return "Well, fine then.";
    } else if (answer === "yes") {
        return "Let's play!"
    } else {
        return 'I do not recognize that answer. Please choose "yes" or "no".'
    }
}

////// EXECUTION ///////

rockPaperScissors();

/* 
// TESTS (we'll do more here later maybe)

test playRound():
const playerSelection = "SciSSors";
const computerSelection = computerPlay();
console.log(`The computer chose ${computerSelection}.`);
console.log(playRound(playerSelection, computerSelection));

test validateInput():
let input = prompt("Rock, paper or scissors?").toLowerCase();
console.log(validateInput(input));

test getValidInput()
console.log(getValidInput());
*/

