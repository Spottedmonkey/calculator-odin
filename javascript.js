const header = document.querySelector("#header");
const clearBtn = document.querySelector("#clear-btn");
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
  return number1 + number2;
}

console.log(add(3, 4));

function subtract(number1, number2) {
  return number1 - number2;
}

console.log(subtract(3, 4));

function multiply(number1, number2) {
  return number1 * number2;
}

console.log(multiply(3, 4));

function divide(number1, number2) {
  return number1 / number2;
}

console.log(divide(3, 4));

let num1 = 0;
let operand = "";
let num2 = 0;

function operate(num1, operand, num2) {
  return operand === "+"
    ? add(num1, num2)
    : operand === "-"
    ? subtract(num1, num2)
    : operand === "x"
    ? multiply(num1, num2)
    : operand === "➗"
    ? divide(num1, num2)
    : "My kitty is prettier than yours";
}

let equation = "";

clearBtn.addEventListener("click", () => {
  header.textContent = "";
  equation = "";
  console.log(equation);
});

sevenBtn.addEventListener("click", () => {
  header.textContent += 7;
  equation += 7;
  console.log(equation);
});

eightBtn.addEventListener("click", () => {
  header.textContent += 8;
  equation += 8;
  console.log(equation);
});

nineBtn.addEventListener("click", () => {
  header.textContent += 9;
  equation += 9;
  console.log(equation);
});

multiplyBtn.addEventListener("click", () => {
  header.textContent += "x";
  equation += "*";
  console.log(equation);
});

fourBtn.addEventListener("click", () => {
  header.textContent += 4;
  equation += 4;
  console.log(equation);
});

fiveBtn.addEventListener("click", () => {
  header.textContent += 5;
  equation += 5;
  console.log(equation);
});

sixBtn.addEventListener("click", () => {
  header.textContent += 6;
  equation += 6;
  console.log(equation);
});

minusBtn.addEventListener("click", () => {
  header.textContent += "-";
  equation += "-";
  console.log(equation);
});

oneBtn.addEventListener("click", () => {
  header.textContent += 1;
  equation += 1;
  console.log(equation);
});

twoBtn.addEventListener("click", () => {
  header.textContent += 2;
  equation += 2;
  console.log(equation);
});

threeBtn.addEventListener("click", () => {
  header.textContent += 3;
  equation += 3;
  console.log(equation);
});

plusBtn.addEventListener("click", () => {
  header.textContent += "+";
  equation += "+";
  console.log(equation);
});

zeroBtn.addEventListener("click", () => {
  header.textContent += 0;
  equation += 0;
  console.log(equation);
});

periodBtn.addEventListener("click", () => {
  header.textContent += ".";
  equation += ".";
  console.log(equation);
});

equalBtn.addEventListener("click", () => {
  let total = equation.join();
  console.log(total);
});

deleteBtn.addEventListener("click", () => {
  header.textContent -= "";
  equation.pop();
  console.log(equation);
});
