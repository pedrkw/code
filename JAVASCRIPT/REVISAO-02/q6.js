//Crie um programa que solicite ao usuário um número e, em seguida, determine se esse número é primo ou não, usando uma função
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

let numero = parseInt(prompt("Digite um número: "));

if (ePrimo(numero) === true) {
  console.log(`O número ${numero} é primo`)
} else {
  console.log(`O número ${numero} não primo`)
}