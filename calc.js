let operators = document.querySelectorAll(".operators");
let anyOperator = "";
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    anyOperator = operator.textContent;
    console.log(`operator clicked: ${anyOperator}`);
  });
});
