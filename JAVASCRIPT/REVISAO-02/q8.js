//Crie um programa em JavaScript que peça ao usuário para inserir números em um vetor até que ele digite um número negativo. Em seguida, encontre o maior e o menor número no vetor e exiba-os
let vetor = [];
let numero = 0;
let maior = 0;
let menor = 0;

while (numero >= 0) {
  numero = parseInt(prompt("Digite um número: "));
  vetor.push(numero);
  if (menor > numero) {
    menor = numero;
  }

  if (maior < numero) {
    maior = numero;
  }
}

// for (let i = 0; i < vetor.length; i++) {
//   if (menor < vetor[i]) {
//     menor = vetor[i];
//   }

//   if (maior > vetor[i]) {
//     maior = vetor[i];
//   }
// }

console.log(`O maior número do vetor é: ${maior}`);
console.log(`O menor número do vetor é: ${menor}`);