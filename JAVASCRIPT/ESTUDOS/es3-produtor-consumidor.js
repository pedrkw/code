let BUFFER_SIZE = 5; // Tamanho do buffer
let buffer = []; // Inicialização do buffer

// Função do produtor
function produtor(item) {
  if (buffer.length < BUFFER_SIZE) { // Verifica se o buffer não está cheio
    buffer.push(item); // Adiciona o item ao buffer
    console.log(`Produtor produziu ${item}`);
    console.log(`Buffer: ${buffer}`);
  } else {
    console.log("Buffer cheio. Produtor aguardando.");
  }
}

// Função do consumidor
function consumidor() {
  if (buffer.length > 0) { // Verifica se o buffer não está vazio
    const item = buffer.shift(); // Remove o primeiro item do buffer
    console.log(`Consumidor consumiu ${item}`);
    console.log(`Buffer: ${buffer}`);
  } else {
    console.log("Buffer vazio. Consumidor aguardando.");
  }
}

// Função para gerar um número inteiro aleatório entre min e max
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// // Executar 10 produções e 10 consumos
// for (let i = 1; i <= 10; i++) {
//   //   produtor(i);
//   produtor(numeroAleatorio(1, 1000));
//   consumidor();
// }

for (let i = 1; i <= 10; i++) {
  if (i <= BUFFER_SIZE) {
    produtor(numeroAleatorio(1, 1000));
  } else {
    console.log("Produtor tentando produzir mais itens do que o buffer permite.");
    break
  }
  consumidor();
}


console.log("Todas as operações concluídas.");