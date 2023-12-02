const rock = "rock";
const scissors = "scissors";
const paper = "paper";
const gameElements = [rock, paper, scissors];
const restartButton = document.getElementById("restartButton");
const computerValue = document.getElementById('computerValue');
const playerValue = document.getElementById('playerValue');

let computerScore = 0;
let playerScore = 0;

const gameItems = document.querySelectorAll('.gameItem');
gameItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log("Player: " + item.alt);
        const computerSelection = computerPlay();
        console.log("Computer: " + computerSelection);
        
        const roundResult = determineRoundResult(item.alt, computerSelection);
        updateScore(roundResult);
    });
});

function computerPlay() {
    const i = Math.floor(Math.random() * 3);
    return gameElements[i];
}

function determineRoundResult(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "tie";
    } else if ((playerSelection === rock && computerSelection === scissors) ||
               (playerSelection === paper && computerSelection === rock) ||
               (playerSelection === scissors && computerSelection === paper)) {
        return "player";
    } else {
        return "computer";
    }
}

function updateScore(roundResult) {
    if (roundResult === "player") {
      playerScore++;
      playerValue.textContent = playerScore;
    } else if (roundResult === "computer") {
      computerScore++;
      computerValue.textContent = computerScore;
    }
  }
  
  function restartGame() {
      computerScore = 0;
      playerScore = 0;
      computerValue.textContent = "0";
      playerValue.textContent = "0";
      console.log("Game restarted!");
  }
  
  function updateScore(roundResult) {
    const roundResultElement = document.querySelector('.round span');
  
    if (roundResult === "player") {
      playerScore++;
      playerValue.textContent = playerScore;
      roundResultElement.textContent = "Игрок победил!";
      roundResultElement.classList.remove('red', 'yellow');
      roundResultElement.classList.add('green');
    } else if (roundResult === "computer") {
      computerScore++;
      computerValue.textContent = computerScore;
      roundResultElement.textContent = "Компьютер победил!";
      roundResultElement.classList.remove('green', 'yellow');
      roundResultElement.classList.add('red');
    } else {
      roundResultElement.textContent = "Ничья!";
      roundResultElement.classList.remove('green', 'red');
      roundResultElement.classList.add('yellow');
    }
  }
  
  restartButton.addEventListener("click", restartGame);