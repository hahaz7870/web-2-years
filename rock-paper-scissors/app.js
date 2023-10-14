const rock = "rock";
const scissors = "scissors";
const paper = "paper";
const gameElements = [rock, paper, scissors];

const gameItems = document.querySelectorAll('.gameItem');
gameItems.forEach(item => {
    item.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * 3);
        console.log(gameElements[randomIndex]);
    });
});




