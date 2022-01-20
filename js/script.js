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

// Determine player choice including the computer choice //

let playerSelection = () => {
    document.getElementById("Rock").addEventListener("click", function () {
        playerDecision = document.getElementById("Rock").innerHTML;
        computerDecision = computerSelection();
    });
    document.getElementById("Paper").addEventListener("click", function () {
        playerDecision = document.getElementById("Paper").innerHTML;
        computerDecision = computerSelection();
    });
    document.getElementById("Scissors").addEventListener("click", function () {
        playerDecision = document.getElementById("Scissors").innerHTML;
        computerDecision = computerSelection();
    });
}

// Announce win, lose, or tie //

let playerWin = "You win. ${playerDecision} beats ${computerDecision}.";
let computerWin = "You lose. ${computerDecision} beats ${playerDecision}.";
let tie = "It's a tie.";

// Determine winner of the round //

function gameRound(playerDecision, computerDecision) {

    if (playerDecision === Rock && computerDecision === 0) {
        console.log("It's a tie.");
        moves++;
    } else if (playerDecision === Rock && computerDecision === 1) {
        console.log(computerWin);
        computerScore++;
        moves++;
    } else if (playerDecision === Paper && computerDecision === 2) {
        console.log(computerWin);
        computerScore++;
        moves++;
    } else if (playerDecision === Scissors && computerDecision == 0) {
        console.log(computerWin);
        computerScore++;
        moves++;
    } else if (playerDecision === Rock && computerDecision === 2) {
        console.log(playerWin);
        playerScore++;
        moves++;
    } else if (playerDecision === Paper && computerDecision === 0) {
        console.log(playerWin);
        playerScore++;
        moves++;
    } else if (playerDecision === Scissors && computerDecision === 1) {
        console.log(playerWin);
        playerScore++;
        moves++;
    }
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
}

game();