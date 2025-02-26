const header = document.querySelector("#header");
const clearBtn = document.querySelector("#clear-btn");
const divideBtn = document.querySelector("#divide-btn");
const sevenBtn = document.querySelector("#seven-btn");
const eightBtn = document.querySelector("#eight-btn");
const nineBtn = document.querySelector("#nine-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const fourBtn = document.querySelector("#four-btn");
const fiveBtn = document.querySelector("#five-btn");
const sixBtn = document.querySelector("#six-btn");
const minusBtn = document.querySelector("#minus-btn");
const oneBtn = document.querySelector("#one-btn");
const twoBtn = document.querySelector("#two-btn");
const threeBtn = document.querySelector("#three-btn");
const plusBtn = document.querySelector("#plus-btn");
const zeroBtn = document.querySelector("#zero-btn");
const periodBtn = document.querySelector("#period");
const equalBtn = document.querySelector("#equal-btn");
const deleteBtn = document.querySelector("#delete-btn");

function add(number1, number2) {
  number1 = Number(number1);
  number2 = Number(number2);
  let calculatedNumber = number1 + number2;
  return Number(calculatedNumber.toFixed(2));
}

function subtract(number1, number2) {
  number1 = Number(number1);
  number2 = Number(number2);
  let calculatedNumber = number1 - number2;
  return Number(calculatedNumber.toFixed(2));
}

function multiply(number1, number2) {
  number1 = Number(number1);
  number2 = Number(number2);
  let calculatedNumber = number1 * number2;
  return Number(calculatedNumber.toFixed(2));
}
function divide(number1, number2) {
  number1 = Number(number1);
  number2 = Number(number2);
  let calculatedNumber = number1 / number2;
  return Number(calculatedNumber.toFixed(2));
}

let num1 = "";
let operand = "";
let num2 = "";

function storeEquation(character) {
  if (operand.length < 1) {
    num1 += character;
    header.textContent = num1;
  } else {
    num2 += character;
    header.textContent = num2;
  }
}

function storeOperand(character) {
  operand = "";
  operand += character;
}

function operate(num1, operand, num2) {
  if (operand === "+") {
    return add(num1, num2);
  } else if (operand === "-") {
    return subtract(num1, num2);
  } else if (operand === "*") {
    return multiply(num1, num2);
  } else if (operand === "/") {
    return divide(num1, num2);
  } else {
    ("ERROR");
  }
}

clearBtn.addEventListener("click", () => {
  num1 = "";
  operand = "";
  num2 = "";
  header.textContent = "";
});

divideBtn.addEventListener("click", () => {
  storeOperand("/");
});

sevenBtn.addEventListener("click", () => {
  storeEquation(7);
});

eightBtn.addEventListener("click", () => {
  storeEquation(8);
});

nineBtn.addEventListener("click", () => {
  storeEquation(9);
});

multiplyBtn.addEventListener("click", () => {
  storeOperand("*");
});

fourBtn.addEventListener("click", () => {
  storeEquation(4);
});

fiveBtn.addEventListener("click", () => {
  storeEquation(5);
});

sixBtn.addEventListener("click", () => {
  storeEquation(6);
});

minusBtn.addEventListener("click", () => {
  storeOperand("-");
});

oneBtn.addEventListener("click", () => {
  storeEquation(1);
});

twoBtn.addEventListener("click", () => {
  storeEquation(2);
});

threeBtn.addEventListener("click", () => {
  storeEquation(3);
});

plusBtn.addEventListener("click", () => {
  storeOperand("+");
});

zeroBtn.addEventListener("click", () => {
  storeEquation(0);
});

periodBtn.addEventListener("click", () => {
  storeEquation(".");
});

equalBtn.addEventListener("click", () => {
  let result = operate(num1, operand, num2);
  num1 = String(result);
  header.textContent = result;
  operand = "";
  num2 = "";
});

deleteBtn.addEventListener("click", () => {});
