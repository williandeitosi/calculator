const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const panel = document.querySelector("#panel");

let anyNumbers = [];
let anyOperator = "";
let result = 0;

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    anyOperator = operator.textContent;
    console.log(`operator clicked: ${anyOperator}`);
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    anyNumbers.push(Number(number.textContent));
    console.log(`Number clicked: ${anyNumbers}`);
  });
});

const sum = (...value) => {
  let result = value.reduce((acc, num) => acc + num, 0);
  return result;
};
const performCalculation = () => {
  if (anyNumbers.length >= 2) {
    const num1 = anyNumbers.shift();
    const num2 = anyNumbers.shift();

    if (anyOperator === "-") {
      result = num1 - num2;
    }

    console.log(`Calculation result: ${result}`);

    panel.textContent = result;
    anyOperator = null;
    anyNumbers.push(result);
  }
};
// testando git merge
equal.addEventListener("click", () => {
  const makeSum = anyOperator === "+" && anyNumbers.length > 0;
  const makeSubtract = anyOperator === "-" && anyNumbers.length > 0;
  const numericNumbers = anyNumbers.map(Number); // Converta todos os números para valores numéricos
  if (makeSum) {
    const result = sum(...numericNumbers);
    panel.textContent = result;
  } else if (makeSubtract) {
    performCalculation();
  }
});

clear.addEventListener("click", () => {
  anyNumbers = [];
  anyOperator = "";
  panel.textContent = "";
});
