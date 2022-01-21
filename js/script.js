// Scores and total round moves //

let playerScore = 0;
let computerScore = 0;
let moves = 0;

// Determine computer choice //

function computerSelection() {
    let computerDecision = Math.floor(Math.random() * 3);

    if (computerDecision == "0") {
        return "Rock";
    } else if (computerDecision == "1") {
        return "Paper"
    } else if (computerDecision == "2") {
        return "Scissors"
    }
};

// Determine player choice //

let playerSelection = () => {
    document.getElementById("Rock").addEventListener("click", function () {
        playerDecision = document.getElementById("Rock").innerHTML;
    });
    document.getElementById("Paper").addEventListener("click", function () {
        playerDecision = document.getElementById("Paper").innerHTML;
    });
    document.getElementById("Scissors").addEventListener("click", function () {
        playerDecision = document.getElementById("Scissors").innerHTML;
    });
}

let computerDecision = computerSelection();
let playerDecision = playerSelection();

// Determine winner of the round //

function gameRound(playerDecision) {

    if (playerDecision === computerDecision) {
        document.getElementById("result").innerHTML = "It's a tie!"
    } else if (playerDecision === Rock) {
        if (computerDecision === 1) {
            document.getElementById("result").innerHTML = "You lose! Paper beats Rock."
            computerScore++;
            moves++;
        } else {
            document.getElementById("result").innerHTML = "You win! Rock beats Scissors."
            playerScore++;
            moves++;
        }
    } else if (playerDecision === Paper) {
        if (computerDecision === 0) {
            document.getElementById("result").innerHTML = "You win! Paper beats Rock."
            playerScore++;
            moves++;
        } else {
            document.getElementById("result").innerHTML = "You lose! Scissors beats Paper."
            computerScore++;
            moves++;
        }    
    } else if (playerDecision === Scissors) {
        if (computerDecision === 0) {
            document.getElementById("result").innerHTML = "You lose! Rock beats Scissors."
            computerScore++;
            moves++;
        } else {
            document.getElementById("result").innerHTML = "You win! Scissors beats Paper."
            playerScore++;
            moves++;
    }

// Determine if a winner has been decided //

function checkWinner() {
    if (moves === 5) {
        if (playerScore > computerScore) {
            return "You win!"
        } else if (playerScore < computerScore) {
            return "You lose!"
        } else if (playerScore === computerScore) {
            return "It's a tie."
        }
    }
}

// Establish the game and determined the player and computer choices //
// and whether or not the game is finished //

function game() {
    computerSelection();
    playerSelection();
    gameRound();
    checkWinner();    
}}}

game();