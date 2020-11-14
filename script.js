const snakeboard = document.getElementById('gameBoard');
const snakeboard_ctx = gameCanvas.getContext('2d');

let snake = [{x: 200, y: 200}, {x: 200, y: 190}, {x: 200, y: 180}, {x: 200, y: 170}, {x: 200, y: 160}]

function drawSnakePart(part) {
    snakeboard_ctx.fillStyle = 'lightblue';
    snakeboard_ctx.strokeStyle = 'darkblue';
    snakeboard_ctx.fillRect(part.x, part.y, 10, 10);
    snakeboard_ctx.strokeRect(part.x, part.y, 10, 10);
}

function drawSnake() {
    snake.forEach(drawSnakePart)
}