// Scores and total round moves //

let playerScore = 1;
let computerScore = 1;
let moves = 0;

// Determine computer choice //

function computerSelection() {
    switch (Math.floor(Math.random() * 3) ){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
}};

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

// Determine winner of the round //

function gameRound(playerDecision) {

    if (playerDecision === computerDecision) {
        Result.innerHTML = "It's a tie!";
        checkWinner(playerScore, computerScore);
    } else if (playerDecision === "Rock" && computerDecision === "Paper") {
            Result.innerHTML = "You lose! Paper beats Rock."
            computerTally.innerHTML = "<b>Computer:</b> " + computerScore++;
            moves++;
            checkWinner(playerScore, computerScore);
    } else if (playerDecision === "Rock" && computerDecision === "Scissors") {
            Result.innerHTML = "You win! Rock beats Scissors."
            playerTally.innerHTML = "<b>Player:</b> " + playerScore++;
            moves++;
            checkWinner(playerScore, computerScore);
    } else if (playerDecision === "Paper" && computerDecision === "Rock") {
            Result.innerHTML = "You win! Paper beats Rock."
            playerTally.innerHTML = "<b>Player:</b> " + playerScore++;
            moves++;
            checkWinner(playerScore, computerScore);
    } else if (playerDecision === "Paper" && computerDecision === "Scissors") {
            Result.innerHTML = "You lose! Scissors beats Paper."
            computerTally.innerHTML = "<b>Computer:</b> " + computerScore++;
            moves++;
            checkWinner(playerScore, computerScore);
    } else if (playerDecision === "Scissors" && computerDecision === "Rock") {
            Result.innerHTML = "You lose! Rock beats Scissors."
            computerTally.innerHTML = "<b>Computer:</b> " + computerScore++;
            moves++;
            checkWinner(playerScore, computerScore);
    } else if (playerDecision === "Scissors" && computerDecision === "Paper") {
            Result.innerHTML = "You win! Scissors beats Paper."
            playerTally.innerHTML = "<b>Player:</b> " + playerScore++;
            moves++;
            checkWinner(playerScore, computerScore);
    }

// Determine if a winner has been decided //

function checkWinner() {
    if (playerScore === 6 || computerScore === 6) {
        if (playerScore > computerScore) {
            gameOver.innerHTML = "You win the game! Refresh to play again."
            document.querySelectorAll("button").forEach((item) => {
                item.disabled = true;
              });
        } else if (playerScore < computerScore) {
            gameOver.innerHTML = "You lose the game! Refresh to play again."
            document.querySelectorAll("button").forEach((item) => {
                item.disabled = true;
              });
        } else if (playerScore === computerScore) {
            gameOver.innerHTML = "It's a tie! Refresh to play again."
            document.querySelectorAll("button").forEach((item) => {
                item.disabled = true;
              });
        }
    }
}}

// Establish the player and computer choices //
// and play a round //

document.querySelectorAll("button").forEach((item) => {
    item.addEventListener("click", (e) => {
        playerDecision = e.target.id;
        computerDecision = computerSelection();
        gameRound(playerDecision, computerDecision);
    })})