const outputIMC = document.getElementById("output-imc");
const peso = document.getElementById("input-peso");
const altura = document.getElementById("input-altura");


function valiInput() {
  const pesoValue = parseFloat(peso.value);
  const alturaValue = parseFloat(altura.value);
  let isNumber = true

  if (Number.isNaN(pesoValue) && Number.isNaN(alturaValue) == true) {
    outputIMC.textContent = "Digite um valor válido.";
    outputIMC.style.cssText = 'color: black; background-color: #ffadad; font-size: 18px; margin-top: 22px ;padding: 10px; border-radius: 5px;';
    isNumber = false;
  }

  if (pesoValue <= 1) {
    outputIMC.textContent = "Digite um peso válido.";
    outputIMC.style.cssText = 'color: black; background-color: #ffadad; font-size: 18px; margin-top: 22px ;padding: 10px; border-radius: 5px;';
    isNumber = false;
  } else if (alturaValue <= 1) {
    outputIMC.textContent = "Digite uma altura válida.";
    outputIMC.style.cssText = 'color: black; background-color: #ffadad; font-size: 18px; margin-top: 22px ;padding: 10px; border-radius: 5px;';
    isNumber = false;
  }

  return isNumber;
}

function calcIMC(peso, altura) {
  const pesoValue = parseFloat(peso.value);
  const alturaValue = parseFloat(altura.value);
  const imc = pesoValue / (alturaValue * alturaValue);

  if (valiInput() == true) {
    if (imc < 18.5) {
      outputIMC.textContent = `IMC: ${imc.toFixed(2)} - Abaixo do peso`;
      outputIMC.style.cssText = 'color: black; background-color: #caffbf; font-size: 18px; margin-top: 22px ;padding: 10px; border-radius: 5px;';
    } else if (imc >= 18.5 && imc <= 24.9) {
      outputIMC.textContent = `IMC: ${imc.toFixed(2)} - Peso normal`;
      outputIMC.style.cssText = 'color: black; background-color: #caffbf; font-size: 18px; margin-top: 22px ;padding: 10px; border-radius: 5px;';
    } else if (imc >= 25 && imc <= 29.9) {
      outputIMC.textContent = `IMC: ${imc.toFixed(2)} - Sobrepeso`;
      outputIMC.style.cssText = 'color: black; background-color: #caffbf; font-size: 18px; margin-top: 22px ;padding: 10px; border-radius: 5px;';
    } else if (imc >= 30 && imc <= 34.9) {
      outputIMC.textContent = `IMC: ${imc.toFixed(2)} - Obesidade grau 1`;
      outputIMC.style.cssText = 'color: black; background-color: #caffbf; font-size: 18px; margin-top: 22px ;padding: 10px; border-radius: 5px;';
    } else if (imc >= 35 && imc <= 39.9) {
      outputIMC.textContent = `IMC: ${imc.toFixed(2)} - Obesidade grau 2`;
      outputIMC.style.cssText = 'color: black; background-color: #caffbf; font-size: 18px; margin-top: 22px ;padding: 10px; border-radius: 5px;';
    } else {
      outputIMC.textContent = `IMC: ${imc.toFixed(2)} - Obesidade grau 3`;
      outputIMC.style.cssText = 'color: black; background-color: #caffbf; font-size: 18px; margin-top: 22px ;padding: 10px; border-radius: 5px;';
    }
  }
}

document.getElementById("botao-calcular").addEventListener("click", (event) => {
  event.preventDefault();
  valiInput();
  calcIMC(peso, altura);
});