//Implemente um algoritmo que calcule a média dos valores em um vetor de números
let listaNum = [];

// Função para gerar um número inteiro aleatório entre min e max
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Adiciona x números inteiros aleatórios ao vetor
for (let i = 0; i < 100; i++) {
  let numero = numeroAleatorio(2, 2);
  listaNum.push(numero);
}

for (var i = 0; i < listaNum.length; i++) {
  console.log(`Valor ${listaNum[i]} na posição ${i}`);
}

function mediaVetor(x) {
  let soma = 0;
  for (let i = 0; i < x.length; i++) {
    soma = soma + x[i];
  }
  let resultado = soma / x.length;
  return console.log("A média do vetor é: " + resultado);
}

mediaVetor(listaNum);
