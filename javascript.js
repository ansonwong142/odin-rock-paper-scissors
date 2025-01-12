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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        result.textContent = "It's a tie.";
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissor'
        || humanChoice === 'paper' && computerChoice === 'rock'
        || humanChoice === 'scissor' && computerChoice === 'paper') {
        result.textContent = `You Win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        score.textContent = `Human score: ${humanScore} Computer Score: ${computerScore}`;
    }
    else if (computerChoice === 'rock' && humanChoice === 'scissor'
        || computerChoice === 'paper' && humanChoice === 'rock'
        || computerChoice === 'scissor' && humanChoice === 'paper') {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        score.textContent = `Human score: ${humanScore} Computer Score: ${computerScore}`;
    }
    // game over
    if (humanScore === 5 || computerScore === 5){
        concludeGame();
        disableButtons();
    }
}

function initializeGame(){
    addButtons();
    humanScore = 0;
    computerScore = 0;
    result.textContent = "";
    score.textContent = "Human Score: 0 Computer Score: 0";
}

function concludeGame() {
    if (humanScore === 5) {
        result.textContent += "\nGame over, you win!";
    }
    else if (computerScore === 5) {
        result.textContent += "\nGame over, you lose!";
    }
}

function disableButtons(){
    inputButtons.forEach((button) => {
        button.removeEventListener("click", buttonClicked);
    })
}

function addButtons(){
    inputButtons.forEach((button) => {
        button.addEventListener("click", buttonClicked);
    });

}

function buttonClicked (event){
    const humanChoice = event.target.classList.value.split(" ")[0];
    playRound(humanChoice, getComputerChoice());
}

let humanScore;
let computerScore;

const inputButtons = document.querySelectorAll("button.input");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", initializeGame);

initializeGame();
