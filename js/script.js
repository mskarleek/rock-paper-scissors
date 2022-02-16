// Scores and total round moves //

let playerScore = 0;
let computerScore = 0;
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
        resultsDisplay();
    } else if (playerDecision === "Rock" && computerDecision === "Paper") {
            Result.innerHTML = "You lose! Paper beats Rock."
            computerScore += 1
            computerTally.innerHTML = "<b>Computer:</b> " + computerScore;
            moves++;
            checkWinner(playerScore, computerScore);
            resultsDisplay();
            scoresDisplay()
    } else if (playerDecision === "Rock" && computerDecision === "Scissors") {
            Result.innerHTML = "You win! Rock beats Scissors."
            playerScore += 1
            playerTally.innerHTML = "<b>Player:</b> " + playerScore;
            moves++;
            checkWinner(playerScore, computerScore);
            resultsDisplay();
            scoresDisplay()
    } else if (playerDecision === "Paper" && computerDecision === "Rock") {
            Result.innerHTML = "You win! Paper beats Rock."
            playerScore += 1
            playerTally.innerHTML = "<b>Player:</b> " + playerScore;
            moves++;
            checkWinner(playerScore, computerScore);
            resultsDisplay();
            scoresDisplay()
    } else if (playerDecision === "Paper" && computerDecision === "Scissors") {
            Result.innerHTML = "You lose! Scissors beats Paper."
            computerScore += 1;
            computerTally.innerHTML = "<b>Computer:</b> " + computerScore;
            moves++;
            checkWinner(playerScore, computerScore);
            resultsDisplay();
            scoresDisplay()
    } else if (playerDecision === "Scissors" && computerDecision === "Rock") {
            Result.innerHTML = "You lose! Rock beats Scissors."
            computerScore += 1
            computerTally.innerHTML = "<b>Computer:</b> " + computerScore;
            moves++;
            checkWinner(playerScore, computerScore);
            resultsDisplay();
            scoresDisplay()
    } else if (playerDecision === "Scissors" && computerDecision === "Paper") {
            Result.innerHTML = "You win! Scissors beats Paper."
            playerScore += 1
            playerTally.innerHTML = "<b>Player:</b> " + playerScore;
            moves++;
            checkWinner(playerScore, computerScore);
            resultsDisplay();
            scoresDisplay()
    }

// Display results //

function resultsDisplay() {
    var results = document.getElementById("results");
    results.style.display = "block";
  }

// Display scores //

function scoresDisplay() {
    var currentScores = document.getElementById("currentScores");
    currentScores.style.display = "block";
  }

// Display reset //

function resetDisplay() {
    var resetButton = document.getElementById("resetButton");
    resetButton.style.display = "block";
  }

// Determine if a winner has been decided //

function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            gameOver.innerHTML = "You win the game! Reset the game to play again."
            document.querySelectorAll("input").forEach((item) => {
                item.disabled = true;
                resetDisplay();
              });
        } else if (playerScore < computerScore) {
            gameOver.innerHTML = "You lose the game! Reset the game to play again."
            document.querySelectorAll("input").forEach((item) => {
                item.disabled = true;
                resetDisplay();
              });
        } else if (playerScore === computerScore) {
            gameOver.innerHTML = "It's a tie! Reset the game to play again."
            document.querySelectorAll("input").forEach((item) => {
                item.disabled = true;
                resetDisplay();
              });
        }
    }
}}

// Establish the player and computer choices //
// and play a round //

document.querySelectorAll("input").forEach((item) => {
    item.addEventListener("click", (e) => {
        playerDecision = e.target.id;
        computerDecision = computerSelection();
        gameRound(playerDecision, computerDecision);
    })})


// Reset game //

function reset() {
    playerScore = 0;
    computerScore = 0;
    moves = 0;
    resetButton.style.display = "none";
    results.style.display = "none";
    currentScores.style.display = "none";
    gameOver.innerHTML = "";
    playerTally.innerHTML = "";
    computerTally.innerHTML = "";
    document.querySelectorAll("input").forEach((item) => {
        item.disabled = false;
    });
}