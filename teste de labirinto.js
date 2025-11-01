const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = 600;
canvas.height = 600;

// Define the maze grid (0 = wall, 1 = path)
const maze = [
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
];

// Cell size
const cellSize = canvas.width / maze.length;

// Draw the maze
function drawMaze() {
    for(let row = 0; row < maze.length; row++) {
        for(let col = 0; col < maze[row].length; col++) {
            if(maze[row][col] === 0) {
                ctx.fillStyle = 'black';
            } else {
                ctx.fillStyle = 'white';
            }
            ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
            ctx.strokeStyle = '#ccc';
            ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
    }
}

// Initial draw
drawMaze();