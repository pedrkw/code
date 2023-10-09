//Escreva um programa que peça ao usuário para digitar um número e, em seguida, exiba a tabuada desse número de 1 a 10
function multiplicar(x) {
  for (let i = 0; i <= 10; i++) {
    let resultado = i * x;
    console.log(`${i} x ${x} = ${resultado}`);
  }
}

let n1 = prompt("Digite um número: ");
multiplicar(n1);