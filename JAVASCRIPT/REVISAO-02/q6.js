//Crie um programa que solicite ao usuário um número e, em seguida, determine se esse número é primo ou não, usando uma função
function isPrime(userNumber) {
  if (userNumber <= 1) {
    return false;
  }
  for (let i = 2; i < userNumber; i++) {
    if (userNumber % i === 0) {
      return false;
    }
  }
  return true;
}

let userNumber = parseInt(prompt("Digite um número: "));

if (isPrime(userNumber) === true) {
  console.log(`O número ${userNumber} é primo`)
} else {
  console.log(`O número ${userNumber} não primo`)
}