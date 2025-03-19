let peso = prompt("Digite o seu peso: ");
let altura = prompt("Digite a sua altura: ");
let imc = peso / (altura * altura);

console.log(`Peso: ${peso}`);
console.log(`Altura: ${altura}`);
console.log(`IMC: ${imc.toFixed(2)}`);

if (imc <= 16.9) {
    console.log("Muito abaixo do peso.");
} else if (imc >= 17 && imc <= 18.4) {
    console.log("Abaixo do peso.");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal.");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Acima do peso.");
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Obesidade grau I.");
} else if (imc >= 35 && imc <= 40) {
    console.log("Obesidade grau II.");
} else {
    console.log("Obesidade grau III.");
}
