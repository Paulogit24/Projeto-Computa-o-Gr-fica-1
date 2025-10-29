const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');    
// butão de start
const startButton = {
    x: 250,
    y: 300,
    width: 175,
    height: 100,
    text: 'Start',
    textColor: '#ffffff',
    color: '#44ff00ff',
    border: '#054d04ff',
    borderRadius: 20
}
function createButton(button) {
    //retângulo do botão
    ctx.roundRect(button.x, button.y, button.width, button.height, button.borderRadius);
    ctx.fillStyle = button.color; // Cor do botão
    ctx.fill();
    //texto do botão
    ctx.fillStyle = button.textColor; // Cor do texto
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(button.text, button.x + button.width / 2, button.y + button.height / 2);
    //borda do botão
    ctx.strokeStyle = button.border; // Cor da borda
    ctx.lineWidth = 4;
    ctx.stroke();
}
createButton(startButton);

// go get the text here https://www.w3schools.com/jsref/canvas_filltext.asp

//ctx.font = "20px Georgia";
ctx.fillStyle = '#000000'; // Black color, you can change this to any color
ctx.fillText("nome do jogo", 340, 50, 700);
