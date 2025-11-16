const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const img = new Image();
const thinkImg = new Image();
const ResetBtn = document.getElementById("Reset");
const MenuBtn = document.getElementById("MenuBtn");
const Btn1 = document.getElementById("maze1");
const Btn2 = document.getElementById("maze2");
const Btn3 = document.getElementById("maze3");
const againButton = {
  x: 237.5,
  y: 300,
  width: 175,
  height: 100,
  text: "try again",
  textColor: "#ffffff",
  color: "#33ff00ff",
  border: "#000000ff",
  borderRadius: 20,
};

const startButton = {
  x: 237.5,
  y: 300,
  width: 175,
  height: 100,
  text: "Start",
  textColor: "#ffffff",
  color: "#44ff00ff",
  border: "#054d04ff",
  borderRadius: 20,
};

var fail = false;
var lvl = 0;
var Maxlvl = 1;
let maze1 = {
  maze: [
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
  ],
  pos: [0, 0], // starting position
  objctive: 3,
  trash: "/img/LixoAzul.webp",
};
let maze2 = {
  maze: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0],
    [4, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 5],
  ],
  pos: [0, 0], // starting position
  objctive: 4,
  trash: "/img/LixoAmarelo.png",
};

let maze3 = {
  maze: [
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 5, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 4, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 3, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  ],
  pos: [0, 0], // starting position;
  objctive: 5,
  trash: "/img/LixoVerde.png",
};

function resetlvl(level) {
  if (level === 1) {
    maze1 = {
      maze: [
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
      ],
      pos: [0, 0], // starting position
      objctive: 3,
      trash: "/img/LixoAzul.webp",
    };
  } else if (level === 2) {
    maze2 = {
      maze: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0],
        [4, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 5],
      ],
      pos: [0, 0], // starting position
      objctive: 4,
      trash: "/img/LixoAmarelo.png",
    };
  } else if (level === 3) {
    maze3 = {
      maze: [
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 5, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 4, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 3, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      ],
      pos: [0, 0], // starting position;
      objctive: 5,
      trash: "/img/LixoVerde.png",
    };
  } else {
    maze1 = {
      maze: [
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
      ],
      pos: [0, 0], // starting position
      objctive: 3,
      trash: "/img/LixoAzul.webp",
    };

    maze2 = {
      maze: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0],
        [4, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 5],
      ],
      pos: [0, 0], // starting position
      objctive: 4,
      trash: "/img/LixoAmarelo.png",
    };

    maze3 = {
      maze: [
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 5, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 4, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 3, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      ],
      pos: [0, 0], // starting position;
      objctive: 5,
      trash: "/img/LixoVerde.png",
    };
  }
}

function createButton(button) {
  //retângulo do botão
  ctx.roundRect(
    button.x,
    button.y,
    button.width,
    button.height,
    button.borderRadius
  );
  ctx.fillStyle = button.color; // Cor do botão
  ctx.fill();
  //texto do botão
  ctx.fillStyle = button.textColor; // Cor do texto
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(
    button.text,
    button.x + button.width / 2,
    button.y + button.height / 2
  );
  //borda do botão
  ctx.strokeStyle = button.border; // Cor da borda
  ctx.lineWidth = 4;
  ctx.stroke();
}
function clearcanvas() {
  ctx.fillStyle = "#85F9FF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function drawMaze1() {
  clearcanvas();
  maze1.maze[maze1.pos[0]][maze1.pos[1]] = 2; // mark starting position
  // Cell size
  const cellSize = canvas.height / maze1.maze.length;
  img.src = "/img/blue.png";
  img.onload = function () {
    // x and y are maze grid coordinates multiplied by cell size
    ctx.drawImage(img, cellSize, cellSize, cellSize, cellSize);
  };
  const img2 = new Image();
  img2.src = "/img/yellow.jpg";
  img2.onload = function () {
    // x and y are maze grid coordinates multiplied by cell size
    ctx.drawImage(img2, cellSize, cellSize, cellSize, cellSize);
  };
  const img3 = new Image();
  img3.src = "/img/green.avif";
  img3.onload = function () {
    // x and y are maze grid coordinates multiplied by cell size
    ctx.drawImage(img3, cellSize, cellSize, cellSize, cellSize);
  };
  const trash = new Image();
  trash.src = maze1.trash;
  trash.onload = function () {
    // x and y are maze grid coordinates multiplied by cell size
    ctx.drawImage(trash, cellSize, cellSize, cellSize, cellSize);
  };
  for (let row = 0; row < maze1.maze.length; row++) {
    for (let col = 0; col < maze1.maze[row].length; col++) {
      if (maze1.maze[row][col] === 0) {
        ctx.fillStyle = "#098f07ff"; //mark1
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#098f07ff"; //mark1
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze1.maze[row][col] === 1) {
        ctx.fillStyle = "#85F9FF"; //mark2
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#85F9FF"; //mark2
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze1.maze[row][col] === 2) {
        ctx.fillStyle = "#85F9FF";
        ctx.drawImage(
          trash,
          col * cellSize,
          row * cellSize,
          cellSize,
          cellSize
        );
        ctx.strokeStyle = "#85F9FF";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze1.maze[row][col] === 3) {
        ctx.fillStyle = "#85F9FF";
        ctx.drawImage(img, col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#85F9FF";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze1.maze[row][col] === 4) {
        ctx.fillStyle = "#85F9FF";
        ctx.drawImage(img2, col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#85F9FF";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze1.maze[row][col] === 5) {
        ctx.fillStyle = "#85F9FF";
        ctx.drawImage(img3, col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#85F9FF";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
  }
}

function drawMaze2() {
  clearcanvas();
  maze2.maze[maze2.pos[0]][maze2.pos[1]] = 2; // mark starting position
  // Cell size
  const cellSize = canvas.height / maze2.maze.length;
  img.src = "/img/blue.png";
  img.onload = function () {
    // x and y are maze grid coordinates multiplied by cell size
    ctx.drawImage(img, cellSize, cellSize, cellSize, cellSize);
  };
  const img2 = new Image();
  img2.src = "/img/yellow.jpg";
  img2.onload = function () {
    // x and y are maze grid coordinates multiplied by cell size
    ctx.drawImage(img2, cellSize, cellSize, cellSize, cellSize);
  };
  const img3 = new Image();
  img3.src = "/img/green.avif";
  img3.onload = function () {
    // x and y are maze grid coordinates multiplied by cell size
    ctx.drawImage(img3, cellSize, cellSize, cellSize, cellSize);
  };
  const trash = new Image();
  trash.src = maze2.trash;
  trash.onload = function () {
    // x and y are maze grid coordinates multiplied by cell size
    ctx.drawImage(trash, cellSize, cellSize, cellSize, cellSize);
  };

  for (let row = 0; row < maze2.maze.length; row++) {
    for (let col = 0; col < maze2.maze[row].length; col++) {
      if (maze2.maze[row][col] === 0) {
        ctx.fillStyle = "#098f07ff"; //mark1
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#098f07ff"; //mark1
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze2.maze[row][col] === 1) {
        ctx.fillStyle = "#85F9FF"; //mark2
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#85F9FF"; //mark2
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze2.maze[row][col] === 2) {
        ctx.fillStyle = "#85F9FF";
        ctx.drawImage(
          trash,
          col * cellSize,
          row * cellSize,
          cellSize,
          cellSize
        );
        ctx.strokeStyle = "#85F9FF";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze2.maze[row][col] === 3) {
        ctx.fillStyle = "#85F9FF";
        ctx.drawImage(img, col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#85F9FF";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze2.maze[row][col] === 4) {
        ctx.fillStyle = "#85F9FF";
        ctx.drawImage(img2, col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#85F9FF";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else if (maze2.maze[row][col] === 5) {
        ctx.fillStyle = "#85F9FF";
        ctx.drawImage(img3, col * cellSize, row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#85F9FF";
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
  }
}

function drawMaze3() {
  clearcanvas();
  maze3.maze[maze3.pos[0]][maze3.pos[1]] = 2; // mark starting position
    // Cell size
      const cellSize = canvas.height / maze3.maze.length;
      img.src = "/img/blue.png";
      img.onload = function () {
        // x and y are maze grid coordinates multiplied by cell size
        ctx.drawImage(img, cellSize,  cellSize, cellSize, cellSize);
      };
      const img2 = new Image();
      img2.src = "/img/yellow.jpg";
      img2.onload = function () {
        // x and y are maze grid coordinates multiplied by cell size
        ctx.drawImage(img2, cellSize,  cellSize, cellSize, cellSize);
      };
      const img3 = new Image();
      img3.src = "/img/green.avif";
      img3.onload = function () {
        // x and y are maze grid coordinates multiplied by cell size
        ctx.drawImage(img3, cellSize,  cellSize, cellSize, cellSize);
      };
       const trash = new Image();
      trash.src = maze3.trash;
      trash.onload = function () {
        // x and y are maze grid coordinates multiplied by cell size
        ctx.drawImage(trash, cellSize,  cellSize, cellSize, cellSize);
      };
    for (let row = 0; row < maze3.maze.length; row++) {
      for (let col = 0; col < maze3.maze[row].length; col++) {
        if (maze3.maze[row][col] === 0) {
          ctx.fillStyle = "#098f07ff"; //mark1
          ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
          ctx.strokeStyle = "#098f07ff"; //mark1
          ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
        } else if (maze3.maze[row][col] === 1) {
          ctx.fillStyle = "#85F9FF";  //mark2
          ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
          ctx.strokeStyle = "#85F9FF";  //mark2
          ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
        } else if (maze3.maze[row][col] === 2) {
          ctx.fillStyle = "#85F9FF";
          ctx.drawImage(trash, col * cellSize, row * cellSize, cellSize, cellSize);
          ctx.strokeStyle = "#85F9FF";
          ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
        } else if (maze3.maze[row][col] === 3) {
          ctx.fillStyle = "#85F9FF";
          ctx.drawImage(img, col * cellSize, row * cellSize, cellSize, cellSize);
          ctx.strokeStyle = "#85F9FF";
          ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
        } else if (maze3.maze[row][col] === 4) {
          ctx.fillStyle = "#85F9FF";
          ctx.drawImage(img2, col * cellSize, row * cellSize, cellSize, cellSize);
          ctx.strokeStyle = "#85F9FF";
          ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
        } else if (maze3.maze[row][col] === 5) {
          ctx.fillStyle = "#85F9FF";
          ctx.drawImage(img3, col * cellSize, row * cellSize, cellSize, cellSize);
          ctx.strokeStyle = "#85F9FF";
          ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }

      }
    }
    ;
    
  }
function failScreen() {
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

       
  thinkImg.src = "/img/think.webp";
      ctx.drawImage(thinkImg, 250, 100, 150, 150);

      let textfail = "WRONG BIN, TRY AGAIN!!";
      let targetXfail = 325;
      let targetYfail = 50;
      ctx.fillStyle = "Black";
      ctx.textAlign = "center";
      ctx.font = "30px Arial";
      ctx.fillText(textfail, targetXfail, targetYfail, 300)

      createButton(againButton);

}

  function victory() {
  clearcanvas();
  const text = "CONGRATULATIONS!!!";
  const targetX = 325;
  const startX = -400; // start off-canvas
  const targetY = 50;
  const colorDuration = 1200; // ms per color transition
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.font = "30px Arial";
  ctx.fillText(text, targetX, targetY, 300);

  const text2 = "YOU CLEARED ALL THE MAZES!!";
  const targetX2 = 325;
  const startX2 = 400; // start off-canvas
  const targetY2 = 50;

  ctx.textAlign = "center";
  ctx.fillStyle = "black";
  ctx.fillText(text2, targetX2, 100);

  ctx.fillStyle = "#098f07ff"; //ground
  ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

  const BushImg = new Image();
  BushImg.src = "/img/bush.png";
  ctx.drawImage(BushImg, 20, 430, 200, 200);
  ctx.drawImage(BushImg, 430, 430, 200, 200);
}

function restart() {
  console.log("reiniciar func");
  fail = false;
}
// botão de start
function startMenu() {
  clearcanvas();


  const text = "Labirinto de Lixo";
  const targetX = 315;
  const startX = -400; // start off-canvas
  const targetY = 50;
  const colorDuration = 1200; // ms per color transition
  const colors = [
    [0, 0, 255], // blue
    [0, 255, 0], // green
    [255, 255, 0], // yellow
  ];

  const text2 =
    "Controls: Use the arrows and WASD keys to lead the trash to the correct bin.";
  const targetX2 = 315;
  const startX2 = 400; // start off-canvas
  const targetY2 = 50;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  function lerpColor(a, b, t) {
    return [
      Math.round(lerp(a[0], b[0], t)),
      Math.round(lerp(a[1], b[1], t)),
      Math.round(lerp(a[2], b[2], t)),
    ];
  }
  function rgbToString(rgb) {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }
  const totalColorCycle = colors.length * colorDuration;

  let startTime = null;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    // FAIL SCREEN
    if (fail === true) {
    failScreen();
    }
    else {
      if (lvl === 0) {
        // keep text fixed in the original position
        const x = targetX;

        // clear and redraw
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        createButton(startButton);

        // ensure font is set before measuring
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // create a sliding linear gradient for the text color
        const textWidth = ctx.measureText(text).width;
        const gradientLength = textWidth * 2; // length of the moving gradient
        const pos = (elapsed % totalColorCycle) / totalColorCycle; // 0..1 over full color cycle
        const gradStart = x - textWidth + pos * gradientLength;
        const gradEnd = gradStart + gradientLength;
        const grad = ctx.createLinearGradient(
          gradStart,
          targetY,
          gradEnd,
          targetY
        );

        grad.addColorStop(0, rgbToString(colors[0]));
        grad.addColorStop(0.5, rgbToString(colors[1]));
        grad.addColorStop(1, rgbToString(colors[2]));

        ctx.fillStyle = grad;
        ctx.fillText(text, x, targetY);

        // Add this to draw the controls text
        ctx.fillStyle = "#000000"; // Black color for controls text
        ctx.font = "17px Arial"; // Smaller font for controls
        ctx.textAlign = "center";
        ctx.fillText(text2, targetX2, 100); // Position it below the title

        ctx.fillStyle = "#098f07ff"; //ground
        ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

        //draw contentor and bush image
        const BushImg = new Image();
        BushImg.src = "/img/bush.png";
        ctx.drawImage(BushImg, 20, 430, 200, 200);
        ctx.drawImage(BushImg, 430, 430, 200, 200);

        const conteinerImg = new Image();
        conteinerImg.src = "/img/lixomenu.png";
        ctx.drawImage(conteinerImg, 125, 510, 400, 133);

        //ctx.stroke();
      }

      if (lvl === 1) {
        drawMaze1();
      }

      if (lvl === 2) {
        drawMaze2();
      }
      if (lvl === 3) {
        drawMaze3();
      }
      if (lvl === 4) {
        victory();
      }

      if (Maxlvl >= 2) {
        Btn2.classList.remove("invalidbtn");
        Btn2.classList.add("validbtn");
      }
      if (Maxlvl >= 3) {
        Btn3.classList.remove("invalidbtn");
        Btn3.classList.add("validbtn");
      }
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  //animate();

  createButton(startButton);

  canvas.addEventListener("click", function (event) {
    const mouseX = event.clientX - canvas.offsetLeft;
    const mouseY = event.clientY - canvas.offsetTop;
    if (
      mouseX >= startButton.x &&
      mouseX <= startButton.x + startButton.width &&
      mouseY >= startButton.y &&
      mouseY <= startButton.y + startButton.height
    ) {
      if (lvl === 0) {
        lvl = 1;
        console.log("Start button clicked!");
        console.log(lvl);
        return;
      }

      if (fail === true) {
        fail = false;
      }
    }
  });
}
startMenu();

//controls
addEventListener("keydown", function (event) {
  if (fail === false) {
    if (lvl === 1) {
      let pos = maze1.pos;
      if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
        if (maze1.maze[pos[0] - 1][pos[1]] === 1) {
          maze1.maze[pos[0]][pos[1]] = 1;
          maze1.pos = [pos[0] - 1, pos[1]];
          console.log(maze1.pos);
        } else if (maze1.maze[pos[0] - 1][pos[1]] === maze1.objctive) {
          resetlvl(1);
          lvl = 2;
          if (Maxlvl < 2) {
            Maxlvl = 2;
          }
        } else if (
          maze1.maze[pos[0] - 1][pos[1]] === 3 ||
          maze1.maze[pos[0] - 1][pos[1]] === 4 ||
          maze1.maze[pos[0] - 1][pos[1]] === 5
        ) {
          resetlvl(lvl);
          console.log("falhou");
          fail = true;
        } else {
          console.log("Wall ahead!");
        }
      }
      if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
        if (maze1.maze[pos[0] + 1][pos[1]] === 1) {
          maze1.maze[pos[0]][pos[1]] = 1;
          maze1.pos = [pos[0] + 1, pos[1]];
          console.log(maze1.pos);
        } else if (maze1.maze[pos[0] + 1][pos[1]] === maze1.objctive) {
          resetlvl(1);
          lvl = 2;
          if (Maxlvl < 2) {
            Maxlvl = 2;
          }
        } else if (
          maze1.maze[pos[0] + 1][pos[1]] === 3 ||
          maze1.maze[pos[0] + 1][pos[1]] === 4 ||
          maze1.maze[pos[0] + 1][pos[1]] === 5
        ) {
          resetlvl(lvl);
          console.log("falhou");
          fail = true;
        } else {
          console.log("Wall ahead!");
        }
      }
      if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
        if (maze1.maze[pos[0]][pos[1] - 1] === 1) {
          maze1.maze[pos[0]][pos[1]] = 1;
          maze1.pos = [pos[0], pos[1] - 1];
          console.log(maze1.pos);
        } else if (maze1.maze[pos[0]][pos[1] - 1] === maze1.objctive) {
          resetlvl(1);
          lvl = 2;
          if (Maxlvl < 2) {
            Maxlvl = 2;
          }
        } else if (
          maze1.maze[pos[0]][pos[1] - 1] === 3 ||
          maze1.maze[pos[0]][pos[1] - 1] === 4 ||
          maze1.maze[pos[0]][pos[1] - 1] === 5
        ) {
          resetlvl(lvl);
          console.log("falhou");
          fail = true;
        } else {
          console.log("Wall ahead!");
        }
      }
      if (
        event.key === "ArrowRight" ||
        event.key === "d" ||
        event.key === "D"
      ) {
        if (maze1.maze[pos[0]][pos[1] + 1] === 1) {
          maze1.maze[pos[0]][pos[1]] = 1;
          maze1.pos = [pos[0], pos[1] + 1];
          console.log(maze1.pos);
        } else if (maze1.maze[pos[0]][pos[1] + 1] === maze1.objctive) {
          resetlvl(1);
          lvl = 2;
          if (Maxlvl < 2) {
            Maxlvl = 2;
          }
        } else if (
          maze1.maze[pos[0]][pos[1] + 1] === 3 ||
          maze1.maze[pos[0]][pos[1] + 1] === 4 ||
          maze1.maze[pos[0]][pos[1] + 1] === 5
        ) {
          resetlvl(lvl);
          console.log("falhou");
          fail = true;
        } else {
          console.log("Wall ahead!");
        }
      }
    } else {
      console.log("not lvl 1");
    }

    if (lvl === 2) {
      let pos = maze2.pos;
      if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
        if (maze2.maze[pos[0] - 1][pos[1]] === 1) {
          maze2.maze[pos[0]][pos[1]] = 1;
          maze2.pos = [pos[0] - 1, pos[1]];
          console.log(maze2.pos);
        } else if (maze2.maze[pos[0] - 1][pos[1]] === maze2.objctive) {
          resetlvl(2);
          lvl = 3;
          if (Maxlvl < 3) {
            Maxlvl = 3;
          }
        } else if (
          maze2.maze[pos[0] - 1][pos[1]] === 3 ||
          maze2.maze[pos[0] - 1][pos[1]] === 4 ||
          maze2.maze[pos[0] - 1][pos[1]] === 5
        ) {
          resetlvl(lvl);
          console.log("falhou");
          fail = true;
        } else {
          console.log("Wall ahead!");
        }
      }
      if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
        if (maze2.maze[pos[0] + 1][pos[1]] === 1) {
          maze2.maze[pos[0]][pos[1]] = 1;
          maze2.pos = [pos[0] + 1, pos[1]];
          console.log(maze2.pos);
        } else if (maze2.maze[pos[0] + 1][pos[1]] === maze2.objctive) {
          resetlvl(2);
          lvl = 3;
          if (Maxlvl < 3) {
            Maxlvl = 3;
          }
        } else if (
          maze2.maze[pos[0] + 1][pos[1]] === 3 ||
          maze2.maze[pos[0] + 1][pos[1]] === 4 ||
          maze2.maze[pos[0] + 1][pos[1]] === 5
        ) {
          resetlvl(lvl);
          console.log("falhou");
          fail = true;
        } else {
          console.log("Wall ahead!");
        }
      }
      if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
        if (maze2.maze[pos[0]][pos[1] - 1] === 1) {
          maze2.maze[pos[0]][pos[1]] = 1;
          maze2.pos = [pos[0], pos[1] - 1];
          console.log(maze2.pos);
        } else if (maze2.maze[pos[0]][pos[1] - 1] === maze2.objctive) {
          resetlvl(2);
          lvl = 3;
          if (Maxlvl < 3) {
            Maxlvl = 3;
          }
        } else if (
          maze2.maze[pos[0]][pos[1] - 1] === 3 ||
          maze2.maze[pos[0]][pos[1] - 1] === 4 ||
          maze2.maze[pos[0]][pos[1] - 1] === 5
        ) {
          resetlvl(lvl);
          console.log("falhou");
          fail = true;
        } else {
          console.log("Wall ahead!");
        }
      }
      if (
        event.key === "ArrowRight" ||
        event.key === "d" ||
        event.key === "D"
      ) {
        if (maze2.maze[pos[0]][pos[1] + 1] === 1) {
          maze2.maze[pos[0]][pos[1]] = 1;
          maze2.pos = [pos[0], pos[1] + 1];
          console.log(maze2.pos);
        } else if (maze2.maze[pos[0]][pos[1] + 1] === maze2.objctive) {
          resetlvl(2);
          lvl = 3;
          if (Maxlvl < 3) {
            Maxlvl = 3;
          }
        } else if (
          maze2.maze[pos[0]][pos[1] + 1] === 3 ||
          maze2.maze[pos[0]][pos[1] + 1] === 4 ||
          maze2.maze[pos[0]][pos[1] + 1] === 5
        ) {
          resetlvl(lvl);
          console.log("falhou");
          fail = true;
        } else {
          console.log("Wall ahead!");
        }
      }
    } else {
      console.log("not lvl 2");
    }

    if (lvl === 3) {
      let pos = maze3.pos;
      if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
        if (maze3.maze[pos[0] - 1][pos[1]] === 1) {
          maze3.maze[pos[0]][pos[1]] = 1;
          maze3.pos = [pos[0] - 1, pos[1]];
          console.log(maze3.pos);
        } else if (maze3.maze[pos[0] - 1][pos[1]] === maze3.objctive) {
          resetlvl(3);
          lvl = 4;
          if (Maxlvl < 4) {
            Maxlvl = 4;
          }
        } else if (
          maze3.maze[pos[0] - 1][pos[1]] === 3 ||
          maze3.maze[pos[0] - 1][pos[1]] === 4 ||
          maze3.maze[pos[0] - 1][pos[1]] === 5
        ) {
          resetlvl(lvl);
          console.log("falhou");
          fail = true;
        } else {
          console.log("Wall ahead!");
        }
      }
      if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
        if (maze3.maze[pos[0] + 1][pos[1]] === 1) {
          maze3.maze[pos[0]][pos[1]] = 1;
          maze3.pos = [pos[0] + 1, pos[1]];
          console.log(maze3.pos);
        } else if (maze3.maze[pos[0] + 1][pos[1]] === maze3.objctive) {
          resetlvl(3);
          lvl = 4;
          if (Maxlvl < 4) {
            Maxlvl = 4;
          }
        } else if (
          maze3.maze[pos[0] + 1][pos[1]] === 3 ||
          maze3.maze[pos[0] + 1][pos[1]] === 4 ||
          maze3.maze[pos[0] + 1][pos[1]] === 5
        ) {
          resetlvl(lvl);
          console.log("falhou");
          fail = true;
        } else {
          console.log("Wall ahead!");
        }
      }
      if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
        if (maze3.maze[pos[0]][pos[1] - 1] === 1) {
          maze3.maze[pos[0]][pos[1]] = 1;
          maze3.pos = [pos[0], pos[1] - 1];
          console.log(maze3.pos);
        } else if (maze3.maze[pos[0]][pos[1] - 1] === maze3.objctive) {
          resetlvl(3);
          lvl = 4;
          if (Maxlvl < 4) {
            Maxlvl = 4;
          }
        } else if (
          maze3.maze[pos[0]][pos[1] - 1] === 3 ||
          maze3.maze[pos[0]][pos[1] - 1] === 4 ||
          maze3.maze[pos[0]][pos[1] - 1] === 5
        ) {
          resetlvl(lvl);
          console.log("falhou");
          fail = true;
        } else {
          console.log("Wall ahead!");
        }
      }
      if (
        event.key === "ArrowRight" ||
        event.key === "d" ||
        event.key === "D"
      ) {
        if (maze3.maze[pos[0]][pos[1] + 1] === 1) {
          maze3.maze[pos[0]][pos[1]] = 1;
          maze3.pos = [pos[0], pos[1] + 1];
          console.log(maze3.pos);
        } else if (maze3.maze[pos[0]][pos[1] + 1] === maze3.objctive) {
          resetlvl(3);
          lvl = 4;
          if (Maxlvl < 4) {
            Maxlvl = 4;
          }
        } else if (
          maze3.maze[pos[0]][pos[1] + 1] === 3 ||
          maze3.maze[pos[0]][pos[1] + 1] === 4 ||
          maze3.maze[pos[0]][pos[1] + 1] === 5
        ) {
          resetlvl(lvl);
          console.log("falhou");
          fail = true;
        } else {
          console.log("Wall ahead!");
        }
      }
    } else {
      console.log("not lvl 3");
    }
  }
  if (event.key === "r" || event.key === "R") {
    resetlvl(lvl);
  }
  if (event.key === "1") {
    lvl = 1;
    return;
  }
  if (event.key === "2") {
    lvl = 2;
    return;
  }
  if (event.key === "3") {
    lvl = 3;
    return;
  }
  if (event.key === "4") {
    lvl = 4;
    return;
  }
  if (event.key === "t" || event.key === "T" || event.key === "esc") {
    lvl = 0;
    return;
  }

  if (event.key === "f" || event.key === "F") {
    fail = true;
  }
});

MenuBtn.addEventListener("click", function (event) {
  console.log("Menu button clicked!");
  lvl = 0;
});

Btn1.addEventListener("click", function (event) {
  if (Maxlvl >= 1) {
    console.log("Maze 1 button clicked!");
    lvl = 1;
  }
});

Btn2.addEventListener("click", function (event) {
  if (Maxlvl >= 2) {
    console.log("Maze 2 button clicked!");
    lvl = 2;
  }
});

Btn3.addEventListener("click", function (event) {
  if (Maxlvl >= 3) {
    console.log("Maze 3 button clicked!");
    lvl = 3;
  }
});

ResetBtn.addEventListener("click", function (event) {
  console.log("Reset button clicked!");
  resetlvl(lvl);
});

addEventListener("keydown", function (event) {
  if (event.key === "u" || event.key === "U") {
    console.log("Unlock all levels");
    Maxlvl = 3;
  }
  if (event.key === "l" || event.key === "L") {
    console.log(Maxlvl);
    console.log(lvl);
    console.log("maze1", maze1);
    console.log("maze2", maze2);
    console.log("maze3", maze3);
  }
});
// go get the text here https://www.w3schools.com/jsref/canvas_filltext.asp
