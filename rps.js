const choices = ['rock', 'paper', 'scissors']
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});





function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(){
    let input = prompt("Choose Rock, Paper or Scissors ");
    if (choices.includes(input.toLowerCase())){
        return input.toLowerCase();
    }
else {
        while(!(choices.includes(input.toLowerCase()))){

            alert("not valid, try again");
            input = prompt("Choose Rock, Paper or Scissors ");

        } 
    }
}

    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice){
            console.log("It's a tie!")
        }
        else if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock"){
            console.log("You won!");
            humanScore++;
        }
        else{
            console.log("Computer won!");
            computerScore++;
        }


    }   
