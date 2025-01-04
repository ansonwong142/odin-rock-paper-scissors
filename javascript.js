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
    let humanChoice = prompt('What is your choice?').toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        humanScore++;
        computerScore++;
        console.log('human and computer both win this round');
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissor' 
        || humanChoice ==='paper' && computerChoice ==='rock'
        || humanChoice ==='scissor' && computerChoice ==='paper'){
            humanScore++;
            console.log('human wins this round');
    }
    else{
        computerScore++;
        console.log('computer wins this round');
    }
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;

playRound(humanChoice, computerChoice);