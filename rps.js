
let computerScore = 0;
let humanScore = 0;

const choices = ['rock', 'paper', 'scissors'];

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");

const getScore = document.querySelector("#score");
const gameResult = document.querySelector("#result");
const outcomeMessage = document.querySelector("#beat")

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
        outcomeMessage.innerHTML = `${humanChoice} ties with ${computerChoice}`;

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        gameResult.innerHTML = "You won!";
        gameResult.style.color = "#a6e3a1";
        outcomeMessage.innerHTML = `${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        gameResult.innerHTML = "You lost!";
        gameResult.style.color = "#f38ba8";
        outcomeMessage.innerHTML = `${humanChoice} is beaten by ${computerChoice}`;
    }
    getScore.innerHTML = `Player: ${humanScore}  Computer: ${computerScore}`;
    
    checkWinner();
}

function checkWinner(){
    if (humanScore === 5){
        gameResult.innerHTML = "You won!";
        gameResult.style.color = "#a6e3a1";
        getScore.innerHTML = `Player: ${humanScore}  Computer: ${computerScore}`;
        stopGame();
    }
    if (computerScore === 5){
        gameResult.innerHTML = "You lost!";
        gameResult.style.color = "#f38ba8";
        getScore.innerHTML = `Player: ${humanScore}  Computer: ${computerScore}`;
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
    getScore.innerHTML = `Player: ${humanScore} Computer: ${computerScore}`;
    gameResult.innerHTML = "Choose one";
    gameResult.style.color = "#cdd6f4";
    outcomeMessage.innerHTML = "First to 5 wins the game!";
}
