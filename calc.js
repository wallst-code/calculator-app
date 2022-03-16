"use strict";
let result = 0;
let operation = []; // inputs and results - to make a tape and memory
let stringNumber = [];
let number;
let operator;
let priorOperation = [];
let output;

// I should be able to loop all buttons and pull out the values with conditions.
const buttons = document.getElementsByClassName("btn");
const numberButtons = document.getElementsByClassName("btn");
for (let i = 0; i < numberButtons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", function (e) {
    console.log(`${e.target.textContent} number pressed`);

    // Number Listener
    if (button.classList.contains("number-btn")) {
      // Leave as a string and convert later
      stringNumber += e.target.textContent;
      //
    }
    // Operators Listener
    if (button.classList.contains("operation-btn")) {
      number = Number.parseInt(stringNumber);
      stringNumber = "";

      operation.push(number);
      operator = e.target.textContent;
      operation.push(operator);
    }

    if (
      button.classList.contains("equal-btn") ||
      typeof operation[2] === "number"
    ) {
      //only allow 3 entries into operation[]
      priorOperation.push(operation);
      console.log(operation[0], operation[1], operation[2]);
      output = calcFunction(operation[0], operation[1], operation[2]);
      operation = [];
      //then update operation[0] with result...
      console.log(result);
      console.log(output);
      console.log(priorOperation);
    }
  });
}

// const operatorBtns = document.getElementsByClassName("operation-btn");
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
