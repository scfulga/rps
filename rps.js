
let computerScore = 0;
let humanScore = 0;

const choices = ['rock', 'paper', 'scissors'];

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");

const getScore = document.querySelector("#score");
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

resetBtn.addEventListener('click', () => {
    resetGame();    
})

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        gameResult.innerHTML = "It's a tie!";
        gameResult.style.color = "#fab387";

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        gameResult.innerHTML = "You won!";
        gameResult.style.color = "#a6e3a1";
    } else {
        computerScore++;
        gameResult.innerHTML = "Computer won!";
        gameResult.style.color = "#f38ba8";
    }
    getScore.innerHTML = `${humanScore} - ${computerScore}`;
    
    checkWinner();
}

function checkWinner(){
    if (humanScore === 5){
        gameResult.innerHTML = "You are the winner";
        stopGame();
    }
    if (computerScore === 5){
        gameResult.innerHTML = "Computer is the winner";
        stopGame();
    }
}

function stopGame(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled= true;
}

function resetGame(){
    humanScore = 0;
    computerScore = 0 
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled= false;
    getScore.innerHTML = `${humanScore} - ${computerScore}`;
    gameResult.innerHTML = "Start";
}
