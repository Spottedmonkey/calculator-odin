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

let add = (number1, number2) => number1 + number2;

console.log(add(3, 4));

let subtract = (number1, number2) => number1 - number2;

console.log(subtract(3, 4));

let multiply = (number1, number2) => number1 * number2;

console.log(multiply(3, 4));

let divide = (number1, number2) => number1 / number2;

console.log(divide(3, 4));

let equation = [];

function operate(num1, operand, num2) {
  return operand === "+"
    ? (equation = [add(num1, num2)])
    : operand === "-"
    ? (equation = [subtract(num1, num2)])
    : operand === "*"
    ? (equation = [multiply(num1, num2)])
    : operand === "/"
    ? (equation = [divide(num1, num2)])
    : "My kitty is prettier than yours";
}

clearBtn.addEventListener("click", () => {
  header.textContent = "";
  equation = [];
  console.log(equation);
});

divideBtn.addEventListener("click", () => {
  header.textContent += "/";
  equation.push(" / ");
});

sevenBtn.addEventListener("click", () => {
  header.textContent += 7;
  equation.push(7);
  console.log(equation);
});

eightBtn.addEventListener("click", () => {
  header.textContent += 8;
  equation.push(8);
  console.log(equation);
});

nineBtn.addEventListener("click", () => {
  header.textContent += 9;
  equation.push(9);
  console.log(equation);
});

multiplyBtn.addEventListener("click", () => {
  header.textContent += "x";
  equation.push(" * ");
  console.log(equation);
});

fourBtn.addEventListener("click", () => {
  header.textContent += 4;
  equation.push(4);
  console.log(equation);
});

fiveBtn.addEventListener("click", () => {
  header.textContent += 5;
  equation.push(5);
  console.log(equation);
});

sixBtn.addEventListener("click", () => {
  header.textContent += 6;
  equation.push(6);
  console.log(equation);
});

minusBtn.addEventListener("click", () => {
  header.textContent += "-";
  equation.push(" - ");
  console.log(equation);
});

oneBtn.addEventListener("click", () => {
  header.textContent += 1;
  equation.push(1);
  console.log(equation);
});

twoBtn.addEventListener("click", () => {
  header.textContent += 2;
  equation.push(2);
  console.log(equation);
});

threeBtn.addEventListener("click", () => {
  header.textContent += 3;
  equation.push(3);
  console.log(equation);
});

plusBtn.addEventListener("click", () => {
  header.textContent += "+";
  equation.push(" + ");
  console.log(equation);
});

zeroBtn.addEventListener("click", () => {
  header.textContent += 0;
  equation.push(0);
  console.log(equation);
});

periodBtn.addEventListener("click", () => {
  header.textContent += ".";
  equation.push(".");
  console.log(equation);
});

equalBtn.addEventListener("click", () => {
  equation = equation.toString().split(",").join("").split(" ");
  let num1 = Number(equation[0]);
  let operand = equation[1];
  let num2 = Number(equation[2]);
  header.textContent = operate(num1, operand, num2);
  console.log(equation);
  console.log(num1);
  console.log(operand);
  console.log(num2);
  console.log(operate(num1, operand, num2));
});

deleteBtn.addEventListener("click", () => {
  header.textContent -= "";
  equation.pop();
  console.log(equation);
});
