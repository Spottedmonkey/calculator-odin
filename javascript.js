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

let subtract = (number1, number2) => number1 - number2;

let multiply = (number1, number2) => number1 * number2;

let divide = (number1, number2) => number1 / number2;

let equation = "";

function storeEquation(character) {
  equation += character;
  header.textContent = equation;
}

function filtersArrOperands(arr) {
  let splitArr = arr.split("");
  let plusOperands = splitArr.filter((item) => item === "+").join("");
  let minusOperand = splitArr.filter((item) => item === "-").join("");
  let multiplyOperand = splitArr.filter((item) => item === "*").join("");
  let divideOperand = splitArr.filter((item) => item === "/").join("");
  let totalOperands =
    plusOperands + minusOperand + multiplyOperand + divideOperand;

  return totalOperands.split("").length;
}

function calculateArray(arr) {
  let newArr = arr.split(" ");

  for (let i = 0; i < filtersArrOperands(arr); i++) {
    let num1 = Number(newArr[0]);
    let operand = newArr[1];
    let num2 = Number(newArr[2]);
    let calculatedSplit = operate(num1, operand, num2).join("");
    console.log(newArr);
    console.log(calculatedSplit);
    newArr.splice(0, 3, calculatedSplit);
    console.log(newArr);
  }

  return newArr;
}

function operate(num1, operand, num2) {
  return operand === "+"
    ? (equation = [add(num1, num2)])
    : operand === "-"
    ? (equation = [subtract(num1, num2)])
    : operand === "*"
    ? (equation = [multiply(num1, num2)])
    : operand === "/"
    ? (equation = [divide(num1, num2)])
    : "ERROR";
}

clearBtn.addEventListener("click", () => {
  equation = "";
  header.textContent = equation;
  console.log(equation);
});

divideBtn.addEventListener("click", () => {
  storeEquation(" / ");
});

sevenBtn.addEventListener("click", () => {
  storeEquation(7);
  console.log(equation);
});

eightBtn.addEventListener("click", () => {
  storeEquation(8);
  console.log(equation);
});

nineBtn.addEventListener("click", () => {
  storeEquation(9);
  console.log(equation);
});

multiplyBtn.addEventListener("click", () => {
  storeEquation(" * ");
  console.log(equation);
});

fourBtn.addEventListener("click", () => {
  storeEquation(4);
  console.log(equation);
});

fiveBtn.addEventListener("click", () => {
  storeEquation(5);
  console.log(equation);
});

sixBtn.addEventListener("click", () => {
  storeEquation(6);
  console.log(equation);
});

minusBtn.addEventListener("click", () => {
  storeEquation(" - ");
  console.log(equation);
});

oneBtn.addEventListener("click", () => {
  storeEquation(1);
  console.log(equation);
});

twoBtn.addEventListener("click", () => {
  storeEquation(2);
  console.log(equation);
});

threeBtn.addEventListener("click", () => {
  storeEquation(3);
  console.log(equation);
});

plusBtn.addEventListener("click", () => {
  storeEquation(" + ");
  console.log(equation);
});

zeroBtn.addEventListener("click", () => {
  storeEquation(0);
  console.log(equation);
});

periodBtn.addEventListener("click", () => {
  storeEquation(" . ");
  console.log(equation);
});

equalBtn.addEventListener("click", () => {
  calculateArray(equation);
  header.textContent = equation;
});

deleteBtn.addEventListener("click", () => {
  equation = equation.replace(equation.at(-1), "");
  header.textContent = equation;
  console.log(equation);
});
