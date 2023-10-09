//Escreva um programa que receba uma string do usuário e conte quantas vezes uma determinada letra (também fornecida pelo usuário) aparece na string, usando uma função.
let palavra = prompt("Digite uma palavra: ");
let caractere = prompt("Escolha uma letra: ");
let contador = 0;

function contarLetras(x) {
  for (let i = 0; i < x.length; i++) {
  if (caractere === x[i]) {
    contador++
  }
}
return console.log(`A letra "${caractere}" apareceu ${contador} vezes`);
}

contarLetras(palavra);