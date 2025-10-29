const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');    
// butão de start
const startButton = {
    x: 250,
    y: 300,
    width: 175,
    height: 100,
    text: 'Start',
}
function createButton(button) {
    // Desenhar o retângulo do botão
    ctx.fillStyle = '#44ff00ff'; // Cor do botão
    ctx.fillRect(button.x, button.y, button.width, button.height);

    // Desenhar o texto do botão
    ctx.fillStyle = '#ffffffff'; // Cor do texto
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(button.text, button.x + button.width / 2, button.y + button.height / 2);
}

// Desenhar um retângulo verde (representando grama)
ctx.fillStyle = '#2600fc43'; // Cor verde clara
ctx.fillRect(250, 300, 175, 100); // x, y, largura, altura