let choices = ["Rock","Paper", "Scissors"] 
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(){
    let input = prompt("Choose something");
    return input;
}

console.log(getHumanChoice())

