//Implemente um algoritmo que calcule a média dos valores em um vetor de números
let listaNum = [];

// Função para gerar um número inteiro aleatório entre min e max
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Adiciona números inteiros aleatórios ao vetor
for (let i = 0; i < 5; i++) {
  let numero = numeroAleatorio(1, 100);
  listaNum.push(numero);
}

for (var i = 0; i < listaNum.length; i++) {
  console.log(`Valor ${listaNum[i]} na posição ${i}`);
}

function mediaVetor(x) {
  let contador = 0;
  let resultado = 0;
  for (let i = 0; i < x.length; i++) {
    contador = contador + x[i];
    resultado = contador / x.length;
  }
  return console.log("A média do vetor é: " + resultado);
}

mediaVetor(listaNum);