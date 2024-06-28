
let computerScore = 0;
let humanScore = 0;

const choices = ['rock', 'paper', 'scissors'];

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const score = document.querySelector("#score");
const gameResult = document.querySelector("#result");

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        gameResult.innerHTML = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        gameResult.innerHTML = "You won!";
        score.innerHTML = `${humanScore} - ${computerScore}`;
    } else {
        computerScore++;
        gameResult.innerHTML = "Computer won!";
        score.innerHTML = `${humanScore} - ${computerScore}`;
    }
}

