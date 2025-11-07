const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = 600;
canvas.height = 600;

// Define the maze grid (0 = wall, 1 = path)
let maze = [
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
  [1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
  [1, 0, 1, 1, 1, 5, 0, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [4, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1],
];
let pos = [0, 0]; // starting position
maze[pos[0]][pos[1]] = 2; // mark starting position
// Cell size
const cellSize = canvas.width / maze.length;

// Draw the maze
function drawMaze() {
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      if (maze[row][col] === 0) {
        ctx.fillStyle = "black";
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#000000ff";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze[row][col] === 1) {
        ctx.fillStyle = "white";
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#ffffffff";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze[row][col] === 2) {
        ctx.fillStyle = "grey";
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#49494bff";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze[row][col] === 3) {
        ctx.fillStyle = "blue";
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#ffffffff";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze[row][col] === 4) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#ffffffff";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze[row][col] === 5) {
        ctx.fillStyle = "green";
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#ffffffff";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      }


      //ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
      //ctx.strokeStyle = '#ffffffff';
      //ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
    }
  }
}

// Initial draw
drawMaze();

addEventListener("keydown", function (event) {
  let newPos = pos;
  if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
    if (maze[pos[0] - 1][pos[1]] === 1) {
      newPos = [pos[0] - 1, pos[1]];
      console.log(newPos);
    } else {
      console.log("Wall ahead!");
    }
  }
  if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
    if (maze[pos[0] + 1][pos[1]] === 1) {
      newPos = [pos[0] + 1, pos[1]];
      console.log(newPos);
    } else {
      console.log("Wall ahead!");
    }
  }
  if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
    if (maze[pos[0]][pos[1] - 1] === 1) {
      newPos = [pos[0], pos[1] - 1];
      console.log(newPos);
    } else {
      console.log("Wall ahead!");
    }
  }
  if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
    if (maze[pos[0]][pos[1] + 1] === 1) {
      newPos = [pos[0], pos[1] + 1];
      console.log(newPos);
    } else {
      console.log("Wall ahead!");
    }
  }
  maze[pos[0]][pos[1]] = 1; // clear previous position
  pos = newPos;
  maze[pos[0]][pos[1]] = 2; // mark new position

  drawMaze();
});
