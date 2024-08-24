let score = 0;
let timeLeft = 30;
const circle = document.getElementById('circle');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

function moveCircle() {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

function updateScore() {
    score++;
    scoreDisplay.textContent = score;
}

function updateTime() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        alert(`Game Over! Your score is ${score}`);
        resetGame();
    }
}

function resetGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    startGame();
}

function startGame() {
    circle.addEventListener('click', updateScore);
    gameInterval = setInterval(() => {
        moveCircle();
        updateTime();
    }, 1000);
}

startGame();
