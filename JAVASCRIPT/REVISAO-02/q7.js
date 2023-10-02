//Desenvolva um algoritmo que gere os primeiros "n" números da sequência de Fibonacci e os exiba em um vetor
let vetor = [];
let anterior = 0;
let atual = 1;
let n = 12; // Quantidade de numeros que serão gerados

for (let i = 2; i < n; i++) {
  if (vetor.length === 0) {
    vetor.push(0);
    vetor.push(1);
  }
  let proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
  console.log(proximo);
  vetor.push(proximo);
}

for (var y = 0; y < 12; y++) {
  console.log(`Valor do vetor na posição ${y}: ${vetor[y]}`);
}