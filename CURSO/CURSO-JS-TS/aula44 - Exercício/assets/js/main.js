const outputIMC = document.getElementById("output-imc");
const peso = document.getElementById("input-peso");
const altura = document.getElementById("input-altura");

function updateOutput(message, isError) {
  outputIMC.textContent = message;
  outputIMC.style.cssText = isError
    ? 'color: black; background-color: #ffadad; font-size: 18px; margin-top: 22px; padding: 10px; border-radius: 5px;'
    : 'color: black; background-color: #caffbf; font-size: 18px; margin-top: 22px; padding: 10px; border-radius: 5px;';
}

function valiInput() {
  const pesoValue = parseFloat(peso.value);
  const alturaValue = parseFloat(altura.value);
  let isNumber = true;

  if (Number.isNaN(pesoValue) || Number.isNaN(alturaValue)) {
    updateOutput("Digite um valor válido.", true);
    isNumber = false;
  };

  if (pesoValue <= 1) {
    updateOutput("Digite um peso válido.", true);
    isNumber = false;
  } else if (alturaValue <= 1) {
    updateOutput("Digite uma altura válida.", true);
    isNumber = false;
  };

  return isNumber;
};

function calcIMC(peso, altura) {
  if (!valiInput()) return;
  const pesoValue = parseFloat(peso.value);
  const alturaValue = parseFloat(altura.value);
  const imc = pesoValue / (alturaValue * alturaValue);

  if (imc < 18.5) {
    updateOutput(`IMC: ${imc.toFixed(2)} - Abaixo do peso`, false);
  } else if (imc >= 18.5 && imc <= 24.9) {
    updateOutput(`IMC: ${imc.toFixed(2)} - Peso normal`, false);
  } else if (imc >= 25 && imc <= 29.9) {
    updateOutput(`IMC: ${imc.toFixed(2)} - Sobrepeso`, false);
  } else if (imc >= 30 && imc <= 34.9) {
    updateOutput(`IMC: ${imc.toFixed(2)} - Obesidade grau 1`, false);
  } else if (imc >= 35 && imc <= 39.9) {
    updateOutput(`IMC: ${imc.toFixed(2)} - Obesidade grau 2`, false);
  } else {
    updateOutput(`IMC: ${imc.toFixed(2)} - Obesidade grau 3`, false);
  };
};

document.getElementById("botao-calcular").addEventListener("click", (event) => {
  event.preventDefault();
  valiInput();
  calcIMC(peso, altura);
});