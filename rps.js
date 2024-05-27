let choices = ["rock", "paper", "scissors"]

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
            input = prompt("Choose Rock , Paper or Scissors ");

        } 
    }
}


function playGame(){
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
    
    for(i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(`Score ${humanScore} : ${computerScore}`);
    }
    

}

playGame();

