function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'rock';
    }
    else if (randomNumber === 2) {
        return 'paper';
    }
    else {
        return 'scissor';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('What is your choice?').toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('It\'s a tie!');
        return;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissor'
        || humanChoice === 'paper' && computerChoice === 'rock'
        || humanChoice === 'scissor' && computerChoice === 'paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 'human';
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return 'computer';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let roundResult = playRound(getHumanChoice(), getComputerChoice());
        if (roundResult === 'human') {
            humanScore++;
        }
        if (roundResult === 'computer') {
            computerScore++;
        }
    }
    displayWinner(humanScore, computerScore);
}

function displayWinner(humanScore, computerScore) {
    if (humanScore === computerScore) {
        console.log('Game over, it\'s a tie!')
    }
    else if (humanScore > computerScore) {
        console.log('Game over, you win!');
    }
    else if (humanScore < computerScore) {
        console.log('Game over, you lose!');
    }
}
//const computerChoice = getComputerChoice();
//const humanChoice = getHumanChoice();

playGame();
