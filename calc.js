const panel = document.getElementById("panel");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

let currentInput = "";
let currentOperator = "";
let result = null;
let isCalculate = false;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (!isCalculate) {
      currentInput += number.textContent;
      panel.textContent += number.textContent;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (currentInput !== "") {
      if (result === null) {
        result = parseFloat(currentInput);
      } else {
        result = operate(result, currentOperator, parseFloat(currentInput));
      }
      currentInput = "";
      currentOperator = operator.textContent;
      panel.textContent += " " + currentOperator + " ";
    }
  });
});

equalButton.addEventListener("click", () => {
  if (currentInput !== "" && currentOperator !== "") {
    result = operate(result, currentOperator, parseFloat(currentInput));
    panel.textContent = result;
    currentInput = "";
    currentOperator = "";
    isCalculate = true;
  }
});

clearButton.addEventListener("click", () => {
  currentInput = "";
  currentOperator = "";
  result = null;
  panel.textContent = "";
  isCalculate = false;
});

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "X":
      return num1 * num2;
    case "%":
      return (num1 / 100) * num2;
    case "/":
      if (num2 === 0) {
        panel.textContent = "Error";
        return null;
      } else {
        return num1 / num2;
      }
    default:
      return null;
  }
}
