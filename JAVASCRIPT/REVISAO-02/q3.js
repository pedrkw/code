//Desenvolva um algoritmo que calcule o fatorial de um número usando uma função recursiva em JavaScript
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * fatorial(n - 1);
}
let numero = 0;
numero = parseInt(prompt("Digite um número: "));
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`)