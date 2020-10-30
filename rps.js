// FUNCTIONS

const RESULT = {
    WIN: 'win',
    LOSE: 'lose',
    TIE: 'tie'
}

const RPS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors',
    INVALID: 'invalid'
}

const YESNO = {
    YES: 'yes',
    NO: 'no',
    INVALID: 'invalid'
}

const TEXT = {
    lets_play: "Let's play!",
    user_no_play: "Well fine then.",
    invalid_yes_no: "I showed you my rps, pls respond.",
    null_yes_no: "You did not answer me >:F"
}

/**
 * PLAY
 */
function rockPaperScissors() {
    pScore = 0;
    cScore = 0;
    while (true) {
        game();
        showResult();
        let isPlayAgain = playAgainAnswer();
        if (isPlayAgain) {
            alert(lets_play)
            cScore = 0;
            pScore = 0;
        } else {
            alert(user_no_play)
            break;
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
    while (true) {
        var input = prompt("Rock, paper or scissors?");
        let rps = parseRpsString(input);
        switch (rps) {
            case RPS.INVALID:
                alert("Invalid response")
                break;
            case null:
            case undefined:
            case "":
                alert("Please enter a response")
                break;
            // For valid rps responses
            default:
                return rps;
        }
    }
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
    while (true) {
        var input = prompt("Play again?");
        let yn = parseYesNoString(input);
        switch (yn) {
            case YESNO.INVALID:
                alert(null_yes_no)
                break;
            case YESNO.YES:
                return true;
            case YESNO.NO:
                return false;
            case null:
            case undefined:
            case "":
            default:
                alert(null_yes_no)
                break;
        }
    }
}

/**
 * Parse a string to an RPS enum
 *
 * @param {String} input A potential rps string answer
 * @return {String} An RPS enum
 */
function parseRpsString(input) {
    if (!input) { return null; }
    switch (input.toLowerCase()) {
        case RPS.ROCK:
        case 'r':
            return RPS.ROCK;
        case RPS.PAPER: return RPS.PAPER;
        case RPS.SCISSORS: return RPS.SCISSORS;
        default: return RPS.INVALID;
    }
}

/**
 * Parse a string to an YESNO enum
 *
 * @param {String} input A potential yes/no string answer
 * @return {String} An YESNO enum
 */
function parseYesNoString(input) {
    if (!input) { return null; }
    switch (input.toLowerCase()) {
        case YESNO.YES:
        case 'y':
            return YESNO.YES;
        case YESNO.NO:
        case 'n':
            return YESNO.NO;
        default: return YESNO.INVALID;
    }
}

// TESTS (we'll do more here later maybe)
/**
 * Prints a failed statement if failed,
 * Prints a success 
 */
function testParseRps() {
    // assertTrue(parseRpsString("ROCK"), RPS.ROCK)
    if (parseRpsString("ROCK") != RPS.ROCK) {
        console.log("FAILED 1");
        return;
    }
    if (parseRpsString("sCiSsOrS") != RPS.SCISSORS) {
        console.log("FAILED 2");
        return;
    }
    if (parseRpsString("asfd") != RPS.INVALID) {
        console.log("FAILED 3");
        return;
    }
    console.log("testParseRps");
}

testParseRps();

////// EXECUTION ///////

rockPaperScissors();