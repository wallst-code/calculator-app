"use strict";
let result = 0;
let operation = []; // inputs and results - to make a tape and memory
let stringNumber = [];
let number;
let operand1;
let operand2;
let operator;
// let priorOperation = [];
// let output;

// I should be able to loop all buttons and pull out the values with conditions.
const buttons = document.getElementsByClassName("btn");
const numberButtons = document.getElementsByClassName("btn");

for (let i = 0; i < numberButtons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", function (e) {
    console.log(`${e.target.textContent} number pressed`);

    if (button.classList.contains("number-btn")) {
      operand1 = Number(e.target.textContent);
      console.log(operand1);
    }
  });
}

// console.log(result);
//       console.log(operand1);
//       console.log(operand2);
//       console.log(operator);

// for (let i = 0; i < operatorBtns.length; i++) {
//   const operatorBtn = operatorBtns[i];
//   operatorBtn.addEventListener("click", function (e) {
//     console.log(`${e.target.textContent} operator button pressed`);
//     operator = e.target.textContent;
//     operation.push(operator);
//   });
// }

// const decimalBtn = document.getElementById("btn-id-decimal");
// decimalBtn.addEventListener("click", function (e) {
//   console.log(`${e.target.textContent} decimal button pressed`);
// });

////////////////////////////////////////////////////////////

function calcFunction(num1, num2, operationSelected) {
  if (operationSelected === "+") {
    return num1 + num2;
  } else if (operationSelected === "-") {
    return num1 - num2;
  } else if (operationSelected === "*") {
    return num1 * num2;
  } else if (operationSelected === "/") {
    if (num2 === 0) {
      console.error("Error cannot divide by 0");
      return undefined;
    } else {
      return num1 / num2;
    }
  }
}
