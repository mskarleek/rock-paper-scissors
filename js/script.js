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

// Determine winner of the round //

function gameRound(playerDecision, computerDecision) {

    if (playerDecision === computerDecision) {
        Result.innerHTML = "It's a tie!";
        checkWinner();
    } else if (playerDecision === "Rock" && computerDecision === "Paper") {
            document.getElementById("result").innerHTML = "You lose! Paper beats Rock."
            computerScore++;
            moves++;
            checkWinner();
    } else if (playerDecision === "Rock" && computerDecision === "Scissors") {
            document.getElementById("result").innerHTML = "You win! Rock beats Scissors."
            playerScore++;
            moves++;
            checkWinner();
    } else if (playerDecision === "Paper" && computerDecision === "Rock") {
            document.getElementById("result").innerHTML = "You win! Paper beats Rock."
            playerScore++;
            moves++;
            checkWinner();
    } else if (playerDecision === "Paper" && computerDecision === "Scissors") {
            document.getElementById("result").innerHTML = "You lose! Scissors beats Paper."
            computerScore++;
            moves++;
            checkWinner();   
    } else if (playerDecision === "Scissors" && computerDecision === "Rock") {
            document.getElementById("result").innerHTML = "You lose! Rock beats Scissors."
            computerScore++;
            moves++;
            checkWinner();
    } else if (playerDecision === "Scissors" && computerDecision === "Paper") {
            document.getElementById("result").innerHTML = "You win! Scissors beats Paper."
            playerScore++;
            moves++;
            checkWinner();
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
}}

// Establish the player and computer choices //
// and play a round //

document.querySelectorAll("button").forEach((item) => {
    item.addEventListener("click", (e) => {
        playerDecision = playerSelection();
        computerDecision = computerSelection();
        gameRound(playerDecision, computerDecision);
    })})