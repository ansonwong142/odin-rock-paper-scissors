function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1){
        return 'rock';
    }
    else if (computerChoice === 2){
        return 'paper';
    }
    else{
        return 'scissor';
    }
}

function getHumanChoice(){
    let humanChoice = prompt('What is your choice?')
    return humanChoice;
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
console.log('human choice: '+humanChoice);