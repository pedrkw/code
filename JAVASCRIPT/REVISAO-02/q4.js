//Desenvolva um algoritmo em JavaScript que gere os primeiros "n" números primos e os armazene em um vetor. Crie uma função que verifique se um número é primo e utilize-a para preencher o vetor com os números primos
function ePrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function gerarPrimos(n) {
  let primos = [];
  let numero = 2; // Começamos com o primeiro número primo.

  while (primos.length < n) {
    if (ePrimo(numero)) {
      primos.push(numero);
    }
    numero++;
  }

  return primos;
}

let n = 10; // Altere o valor de "n" para a quantidade desejada de números primos.
let numerosPrimos = gerarPrimos(n);
console.log("Os primeiros " + n + " números primos são: " + numerosPrimos.join(", "));