const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Create a proxy to handle state changes
const gameState = new Proxy({
    lvl: 0
}, {
    set: function(target, property, value) {
        const oldValue = target[property];
        target[property] = value;
        
        // Handle level changes
        if (property === 'lvl' && oldValue !== value) {
            console.log(`Level changed from ${oldValue} to ${value}`);
            if (value === 1) {
                
                maze1();         // Start the maze
            }
        }
        return true;
    }
});

function clearcanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function maze1(){
  clearcanvas();
    // Define the maze grid (0 = wall, 1 = path)
    var maze = [
        [1, 0, 1, 1, 1, 0, 1, 1, 0, 0,0,1,1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 1,1,1,0],
        [1, 1, 1, 0, 1, 1, 1, 1, 0, 1,0,1,0],
        [0, 0, 0, 0, 1, 0, 0, 1, 0, 1,0,1,0],
        [1, 1, 1, 0, 1, 0, 0, 1, 0, 1,0,1,0],
        [1, 0, 1, 0, 1, 0, 0, 1, 0, 1,0,1,0],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 1,0,1,0],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1,0,1,0],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0,1,0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 1,0,1,0],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1,0,1,0],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 0,0,1,0],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 0,0,1,0],
    ];
 var pos = [0,0]; // starting position
  maze[pos[0]][pos[1]] = 2; // mark starting position
  // Cell size
  const cellSize = canvas.width / maze.length;

  // Draw the maze
  function drawMaze() {
    
    for(let row = 0; row < maze.length; row++) {
        for(let col = 0; col < maze[row].length; col++) {
            if(maze[row][col] === 0) {
                ctx.fillStyle = 'black';
                ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
                ctx.strokeStyle = '#000000ff';
                ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
            } else if(maze[row][col] === 1) {
                ctx.fillStyle = 'white';
                ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
                ctx.strokeStyle = '#ffffffff';
                ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
            }
            else if(maze[row][col] === 2) {
                ctx.fillStyle = 'blue';
                ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
                ctx.strokeStyle = '#0000ffff';
                ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
            }
            
        }
    }
    ;
  }

  // Initial draw
  drawMaze();

  //controls
  addEventListener("keydown", function(event) {  
        let newPos = pos;
        if(event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
            if(maze[pos[0]-1][pos[1]] === 1){
            newPos = [pos[0]-1, pos[1]];
            console.log(newPos);}
        else{
            console.log("Wall ahead!");
        }}
        if(event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
            if(maze[pos[0]+1][pos[1]] === 1){
            newPos = [pos[0]+1, pos[1]];
            console.log(newPos);}
             else{
            console.log("Wall ahead!");
        }}
        if(event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
            if(maze[pos[0]][pos[1]-1] === 1){
            newPos = [pos[0], pos[1]-1];
            console.log(newPos);}
            else{
            console.log("Wall ahead!");
        }}
        if(event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
            if(maze[pos[0]][pos[1]+1] === 1){
            newPos = [pos[0], pos[1]+1];
            console.log(newPos);}
            else{
            console.log("Wall ahead!");
        }}
        maze[pos[0]][pos[1]] = 1; // clear previous position
        pos = newPos;
        maze[pos[0]][pos[1]] = 2; // mark new position

        drawMaze();
        console.log(maze);  
        }
        )
}
// botão de start
const startButton = {
  x: 250,
  y: 300,
  width: 175,
  height: 100,
  text: "Start",
  textColor: "#ffffff",
  color: "#44ff00ff",
  border: "#054d04ff",
  borderRadius: 20,
};
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

;

const text = "Labirinto de Lixo";
const targetX = 340;
const startX = -400; // start off-canvas
const targetY = 50;
const colorDuration = 1200; // ms per color transition
const colors = [
  [0, 0, 255], // blue
  [0, 255, 0], // green
  [255, 255, 0], // yellow
];

const text2 = "Controls: Usa o rato ou as techas WASD para mover o lixo pelo labirinto";
const targetX2 = 340;
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
  const grad = ctx.createLinearGradient(gradStart, targetY, gradEnd, targetY);

  grad.addColorStop(0, rgbToString(colors[0]));
  grad.addColorStop(0.5, rgbToString(colors[1]));
  grad.addColorStop(1, rgbToString(colors[2]));

  ctx.fillStyle = grad;
  ctx.fillText(text, x, targetY);

  // Add this to draw the controls text
  ctx.fillStyle = "#000000"; // Black color for controls text
  ctx.font = "20px Arial"; // Smaller font for controls
  ctx.fillText(text2, targetX2, 100); // Position it below the title

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

createButton(startButton);

canvas.addEventListener("click", function (event) {
  const mouseX = event.clientX - canvas.offsetLeft;
  const mouseY = event.clientY - canvas.offsetTop;
  if (
    mouseX >= startButton.x &&
    mouseX <= startButton.x + startButton.width &&
    mouseY >= startButton.y &&
    mouseY <= startButton.y + startButton.height
  && gameState.lvl === 0)  
  {console.log("valid"); gameState.lvl = 1;}  // This will trigger the proxy handler
 //{maze1();}
})  ;

// go get the text here https://www.w3schools.com/jsref/canvas_filltext.asp
