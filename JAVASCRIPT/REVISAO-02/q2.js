//Crie uma função que receba um vetor de números como parâmetro e retorne a soma de todos os elementos do vetor
let vetor = [];
let valor = 0;
for (let i = 0; i < 3; i++) {
  valor = parseInt(prompt("Digite um valor: "));
  vetor.push(valor);
}

function vetorSoma(x) {
  let valores = 0;
  for (i = 0; i < x.length; i++) {
    valores = valores + x[i];
  }
  console.log(`A soma dos valores é: ${valores}`);
}

vetorSoma(vetor);