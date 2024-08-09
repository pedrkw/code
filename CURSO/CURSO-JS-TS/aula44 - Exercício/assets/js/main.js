const outputIMC = document.getElementById("output-imc");
const peso = document.getElementById("input-peso");
const altura = document.getElementById("input-altura");

function showSuccess(message) {
  outputIMC.textContent = message;
  outputIMC.style.cssText = 'color: black; background-color: #caffbf; font-size: 18px; margin-top: 22px ;padding: 10px; border-radius: 5px;';
};

function showError(message) {
  outputIMC.textContent = message;
  outputIMC.style.cssText = 'color: black; background-color: #ffadad; font-size: 18px; margin-top: 22px ;padding: 10px; border-radius: 5px;';
};


function valiInput() {
  const pesoValue = parseFloat(peso.value);
  const alturaValue = parseFloat(altura.value);
  let isNumber = true;

  if (Number.isNaN(pesoValue) && Number.isNaN(alturaValue) == true) {
    showError("Digite um valor válido.");
    isNumber = false;
  };

  if (pesoValue <= 1) {
    showError("Digite um peso válido.");
    isNumber = false;
  } else if (alturaValue <= 1) {
    showError("Digite uma altura válida.");
    isNumber = false;
  };

  return isNumber;
};

function calcIMC(peso, altura) {
  const pesoValue = parseFloat(peso.value);
  const alturaValue = parseFloat(altura.value);
  const imc = pesoValue / (alturaValue * alturaValue);

  if (valiInput() == true) {
    if (imc < 18.5) {
      showSuccess(`IMC: ${imc.toFixed(2)} - Abaixo do peso`);
    } else if (imc >= 18.5 && imc <= 24.9) {
      showSuccess(`IMC: ${imc.toFixed(2)} - Peso normal`);
    } else if (imc >= 25 && imc <= 29.9) {
      showSuccess("`IMC: ${imc.toFixed(2)} - Sobrepeso`");
    } else if (imc >= 30 && imc <= 34.9) {
      showSuccess(`IMC: ${imc.toFixed(2)} - Obesidade grau 1`);
    } else if (imc >= 35 && imc <= 39.9) {
      showSuccess(`IMC: ${imc.toFixed(2)} - Obesidade grau 2`);
    } else {
      showSuccess("`IMC: ${imc.toFixed(2)} - Obesidade grau 3`");
    };
  };
};

document.getElementById("botao-calcular").addEventListener("click", (event) => {
  event.preventDefault();
  valiInput();
  calcIMC(peso, altura);
});