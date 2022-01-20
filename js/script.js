let playerScore = 0;
let computerScore = 0;
let movesLeft = 0;

const Rock = document.getElementById(rock-btn).onclick;
const Paper = document.getElementById(paper-btn).onclick;
const Scissors = document.getElementById(scissors-btn).onclick;

Rock.addEventListener("click", function(){
    let playerDecision = "Rock";
    let computerDecision = computerSelection();
});

Paper.addEventListener("click", function(){
    let playerDecision = "Paper";
    let computerDecision = computerSelection();
});

Scissors.addEventListener("click", function(){
    let playerDecision = "Scissors";
    let computerDecision = computerSelection();
});

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

function gameRound(playerChoice, computerChoice) {

    let playerChoice = $(playerDecision);
    let computerChoice = $(computerDecision);

    if (playerChoice === computerChoice) {
        return "It is a tie!"
    } else if (playerChoice === Rock && computerChoice === 1) {
        return "You lose. Paper beats Rock."
        computerScore++;
    } else if (playerChoice === Paper && computerChoice === 2) {
        return "You lose. Scissors beats Paper."
        computerScore++;
    } else if (playerChoice == Scissors && computerChoice == 0) {
        return "You lose. Rock beats Scissors."
        computerScore++;
    } else if (playerChoice === Rock && computerChoice === 2) {
        return "You win. Rock beats Scissors."
        playerScore++;
    } else if (playerChoice === Paper && computerChoice === 0) {
        return "You win. Paper beats Rock."
        playerScore++;
    } else if (playerChoice === Scissors && computerChoice === 1) {
        return "You win. Scissors beats Paper."
        playerScore++;
    }
}