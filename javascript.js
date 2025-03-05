const header = document.querySelector("#header");
const clearBtn = document.querySelector("#clear-btn");
const percentageBtn = document.querySelector("#percentage");
const plusMinusBtn = document.querySelector("#plus-minus");
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
const decimalBtn = document.querySelector("#decimal-point");
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

function percentageByOneHundred(number1) {
  number1 = Number(number1);
  let calculatedNumber = number1 / 100;
  return Number(calculatedNumber.toFixed(2));
}

let num1 = "";
let operand = "";
let num2 = "";
const placeHolderNumber = "0";
header.textContent = placeHolderNumber;

function storeEquation(character) {
  if (operand.length < 1) {
    num1 += character;
    header.textContent = num1;
  } else if (operand.length >= 1 && num1.length === 0) {
    num1 += character;
    header.textContent = num1;
  } else {
    num2 += character;
    header.textContent = num2;
  }
}

function storeOperand(character) {
  if (operand === "") {
    operand += character;
  } else if (operand.length === 1) {
    let result = operate(num1, operand, num2);
    num1 = String(result);
    header.textContent = result;
    operand = "";
    operand += character;
    num2 = "";
  }
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
  } else if (operand === "%") {
    return percentageByOneHundred(num1);
  } else {
    return "ERROR";
  }
}

function toggleDecimalBtn() {
  let currentNumber = operand === "" ? num1 : num2;

  if (currentNumber.includes(".")) {
    decimalBtn.disabled = true;
  } else {
    decimalBtn.disabled = false;
  }
}

clearBtn.addEventListener("click", () => {
  num1 = "";
  operand = "";
  num2 = "";
  header.textContent = placeHolderNumber;
  decimalBtn.disabled = false;
});

plusMinusBtn.addEventListener("click", () => {
  if (num1[0] === "-") {
    num1 = String("" - num1);
    header.textContent = num1;
  } else {
    num1 = "-" + num1;
    header.textContent = num1;
  }

  toggleDecimalBtn();
});

percentageBtn.addEventListener("click", () => {
  storeOperand("%");
  let result = operate(num1, operand, num2);
  num1 = String(result);
  header.textContent = result;
  operand = "";
  num2 = "";

  toggleDecimalBtn();
});

divideBtn.addEventListener("click", () => {
  storeOperand("/");
  toggleDecimalBtn();
});

sevenBtn.addEventListener("click", () => {
  storeEquation(7);
  toggleDecimalBtn();
});

eightBtn.addEventListener("click", () => {
  storeEquation(8);
  toggleDecimalBtn();
});

nineBtn.addEventListener("click", () => {
  storeEquation(9);
  toggleDecimalBtn();
});

multiplyBtn.addEventListener("click", () => {
  storeOperand("*");
  toggleDecimalBtn();
});

fourBtn.addEventListener("click", () => {
  storeEquation(4);
  toggleDecimalBtn();
});

fiveBtn.addEventListener("click", () => {
  storeEquation(5);
  toggleDecimalBtn();
});

sixBtn.addEventListener("click", () => {
  storeEquation(6);
  toggleDecimalBtn();
});

minusBtn.addEventListener("click", () => {
  storeOperand("-");
  toggleDecimalBtn();
});

oneBtn.addEventListener("click", () => {
  storeEquation(1);
  toggleDecimalBtn();
});

twoBtn.addEventListener("click", () => {
  storeEquation(2);
  toggleDecimalBtn();
});

threeBtn.addEventListener("click", () => {
  storeEquation(3);
  toggleDecimalBtn();
});

plusBtn.addEventListener("click", () => {
  storeOperand("+");
  toggleDecimalBtn();
});

zeroBtn.addEventListener("click", () => {
  storeEquation(0);
  toggleDecimalBtn();
});

decimalBtn.addEventListener("click", () => {
  storeEquation(".");
  toggleDecimalBtn();
});

equalBtn.addEventListener("click", () => {
  if (num1 === "" || operand === "" || num2 === "") {
    header.textContent = num1;
    operand = "";
    num2 = "";
  } else if (operand === "/" && num2 === "0") {
    header.textContent = "Nope";
    num1 = "";
    operand = "";
    num2 = "";
  } else {
    let result = operate(num1, operand, num2);
    num1 = String(result);
    header.textContent = result;
    operand = "";
    num2 = "";
  }

  toggleDecimalBtn();
});

deleteBtn.addEventListener("click", () => {
  if (operand === "") {
    header.textContent = num1.slice(0, -1);
    num1 = num1.slice(0, -1);
  } else {
    header.textContent = num2.slice(0, -1);
    num2 = num2.slice(0, -1);
  }

  toggleDecimalBtn();
});
