let BUFFER_SIZE = 5; // Tamanho do buffer
let buffer = []; // Inicialização do buffer

function produtor(item) {
  if (buffer.length < BUFFER_SIZE) { // Verifica se o buffer não está cheio
    buffer.push(item); // Adiciona o item ao buffer
    console.log(`Produzido: ${item}`);
    console.log(`Buffer: ${buffer}`);
  } else {
    console.log("Buffer cheio. Produtor aguardando.");
  }
}

function consumidor() {
  if (buffer.length > 0) { // Verifica se o buffer não está vazio
    const item = buffer.shift(); // Remove o primeiro item do buffer
    console.log(`Consumido: ${item}`);
    console.log(`Buffer: ${buffer}`);
  } else {
    console.log("Buffer vazio. Consumidor aguardando.");
  }
}

// Função para gerar um número inteiro aleatório entre min e max
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const produzir = 5;
const consumir = 5;

for (let i = 1; i <= produzir; i++) {
  produtor(numeroAleatorio(1, 1000));
}

for (let i = 1; i <= consumir; i++) {
  consumidor();
}

console.log("Todas as operações concluídas.");