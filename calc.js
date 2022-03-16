"use strict";
let result = 0;
let operation = []; // inputs and results - to make a tape and memory
let calcShouldProceed;
let numberOfArgs;
let num1;
let num2;
let operator;

// I should be able to loop all buttons and pull out the values with conditions.
const buttons = document.getElementsByClassName("btn");
const numberButtons = document.getElementsByClassName("btn");
for (let i = 0; i < numberButtons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", function (e) {
    console.log(`${e.target.textContent} number pressed`);
    console.log(
      "contains number button",
      button.classList.contains("number-btn")
    );
    // Number Listener
    if (button.classList.contains("number-btn")) {
      console.log("class", e.target.classList);
      num1 = Number.parseInt(e.target.textContent);
      console.log(typeof num1, num1);
      operation.push(num1);
      console.log(operation);
    }
    // Operators
    if (button.classList.contains("operation-btn")) {
    }
  });
}

const operatorBtns = document.getElementsByClassName("operation-btn");
for (let i = 0; i < operatorBtns.length; i++) {
  const operatorBtn = operatorBtns[i];
  operatorBtn.addEventListener("click", function (e) {
    console.log(`${e.target.textContent} operator button pressed`);
    operator = e.target.textContent;
    operation.push(operator);
  });
}

const decimalBtn = document.getElementById("btn-id-decimal");
decimalBtn.addEventListener("click", function (e) {
  console.log(`${e.target.textContent} decimal button pressed`);
});

////////////////////////////////////////////////////////////

function calcFunction(num1, num2, operationSelected) {
  if (operationSelected === "+") {
    result = num1 + num2;
    return result;
  } else if (operationSelected === "-") {
    result = num1 - num2;
    return result;
  } else if (operationSelected === "*") {
    result = num1 * num2;
    return result;
  } else if (operationSelected === "/") {
    if (num2 === 0) {
      console.error("Error cannot divide by 0");
      result = undefined;
      return result;
    } else {
      result = num1 / num2;
      return result;
    }
  }
}
