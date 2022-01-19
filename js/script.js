let playerScore = 0;
let computerScore = 0;

function computerSelection() {
    let computerDecision = Math.floor(Math.random() * 3);

    if (computerDecision == "0") {
        return "Rock";
    } else if (computerDecision == "1") {
        return "Paper"
    } else if (computerDecision == "2") {
        return "Scissors"
    }
}