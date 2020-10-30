// FUNCTIONS

const RESULT = {
    WIN: 'win',
    LOSE: 'lose',
    TIE: 'tie'
}

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
        let result = playRound(pMove, cMove);
        var msg;

        switch (result) {
            case RESULT.WIN:
                pScore++;
                msg = `You win! ${pMove} beats ${cMove}.`;
                break;
            case RESULT.LOSE:
                cScore++
                msg = `You lose! ${cMove} beats ${pMove}.`;
                break;
            case RESULT.TIE:
            default:
                msg = "You tied. Try again.";
                break;
        }

        console.log(`The Computer played ${cMove}.\n ${msg}\n
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
        input = prompt("Rock, paper or scissors?")?.toLowerCase();
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
 * @param {String} playerSelection rock, paper, or scissors
 * @param {String} computerSelection rock, paper, or scissors
 * @return {String} The result: either win, lose, tie
 */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return RESULT.TIE;
    } else if (playerSelection == "rock") {
        return (computerSelection === "scissors") ? RESULT.WIN : RESULT.LOSE;
    } else if (playerSelection === "paper") {
        return (computerSelection === "rock") ? RESULT.WIN : RESULT.LOSE;
    } else {
        return (computerSelection === "paper") ? RESULT.WIN : RESULT.LOSE;
    }
}

/**
 * Show user game result.
 */
function showResult() {
    var msg;
    // Lots of different ways to write this one, I just think this looks cleaner
    if (pScore > cScore) { msg = "You are the winner!"; }
    else if (pScore === cScore) { msg = "Well, that was strange."; }
    else { msg = "You're a loser!"; }
    alert(msg);
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
        answer = prompt("Play again?")?.toLowerCase();
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
    if (!input) {
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
    if (!answer) {
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