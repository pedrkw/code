// Variáveis para acompanhar o estado da calculadora
let currentInput = "";
let previousInput = "";
let operator = "";
let isNewInput = true;

// Função para atualizar a exibição no visor
function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = currentInput || previousInput || "0";
}

// Função para lidar com cliques em botões numéricos
function handleNumberClick(number) {
  if (isNewInput) {
    currentInput = number;
    isNewInput = false;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

// Função para lidar com cliques em botões de operadores
function handleOperatorClick(newOperator) {
  if (currentInput !== "") {
    if (previousInput !== "") {
      handleEqualsClick();
    } else {
      previousInput = currentInput;
    }
    operator = newOperator;
    isNewInput = true;
    updateDisplay();
  }
}

// Função para realizar cálculos com base nos números e operadores fornecidos
function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return (num1 + num2).toString();
    case "-":
      return (num1 - num2).toString();
    case "*":
      return (num1 * num2).toString();
    case "/":
      if (num2 === 0) {
        return "Error";
      }
      return (num1 / num2).toString();
    default:
      return num2;
  }
}

// Função para lidar com o clique no botão de igual
function handleEqualsClick() {
  if (previousInput !== "" && currentInput !== "") {
    const result = calculate(previousInput, currentInput, operator);
    currentInput = result;
    previousInput = "";
    operator = "";
    isNewInput = true;
    updateDisplay();
  }
}

// Função para limpar o visor
function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = "";
  isNewInput = true;
  updateDisplay();
}

// Vincular funções aos botões no HTML
document.getElementById("button0").addEventListener("click", () => handleNumberClick("0"));
document.getElementById("button1").addEventListener("click", () => handleNumberClick("1"));
document.getElementById("button2").addEventListener("click", () => handleNumberClick("2"));
document.getElementById("button3").addEventListener("click", () => handleNumberClick("3"));
document.getElementById("button4").addEventListener("click", () => handleNumberClick("4"));
document.getElementById("button5").addEventListener("click", () => handleNumberClick("5"));
document.getElementById("button6").addEventListener("click", () => handleNumberClick("6"));
document.getElementById("button7").addEventListener("click", () => handleNumberClick("7"));
document.getElementById("button8").addEventListener("click", () => handleNumberClick("8"));
document.getElementById("button9").addEventListener("click", () => handleNumberClick("9"));

document.getElementById("sum").addEventListener("click", () => handleOperatorClick("+"));
document.getElementById("subtract").addEventListener("click", () => handleOperatorClick("-"));
document.getElementById("multiply").addEventListener("click", () => handleOperatorClick("*"));
document.getElementById("division").addEventListener("click", () => handleOperatorClick("/"));

document.getElementById("result").addEventListener("click", handleEqualsClick);
document.getElementById("cleanDisplay").addEventListener("click", clearDisplay);
