"use strict";

let result = 0;
let operation = []; // inputs and results - to make a tape and memory
let calcShouldProceed;
let numberOfArgs;
let num1;
let num2;
let operator;

const numberButtons = document.getElementsByClassName("number-btn");
for (let i = 0; i < numberButtons.length; i++) {
  const numberButton = numberButtons[i];
  numberButton.addEventListener("click", function (e) {
    console.log(`${e.target.textContent} number pressed`);
    if (result === 0 || result === undefined) {
      num1 = Number.parseInt(e.target.textContent);
      operation.push(num1);
    } else {
      num1 = result;
    }
    console.log(operation);
  });
}

const operatorBtns = document.getElementsByClassName("operation-btn");
for (let i = 0; i < operatorBtns.length; i++) {
  const operatorBtn = operatorBtns[i];
  operatorBtn.addEventListener("click", function (e) {
    console.log(`${e.target.textContent} operator button pressed`);
  });
}

const decimalBtn = document.getElementById("btn-id-decimal");
decimalBtn.addEventListener("click", function (e) {
  console.log(`${e.target.textContent} decimal button pressed`);
});

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////

function inputValidator2(num1, num2, operator) {
  let isNum1Valid =
    isNaN(num1) ||
    num1 === "" ||
    typeof num1 !== "number" ||
    typeof num1 === "string"
      ? false
      : true;

  let isNum2Valid =
    isNaN(num2) || num2 === "" || typeof num2 !== "number" ? false : true;

  let is2ndArgValid =
    (isNaN(num2) && num2 === "+") ||
    num2 === "-" ||
    num2 === "*" ||
    num2 === "/"
      ? true
      : false;

  let isOperatorValid =
    (isNaN(operator) && operator === "+") ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
      ? true
      : false;

  if ((!isNum2Valid && is2ndArgValid) || operator === undefined) {
    numberOfArgs = 2;
  } else numberOfArgs = 3;

  // Should Calculation Proceed?
  if (isNum1Valid && (isNum2Valid || is2ndArgValid)) {
    calcShouldProceed = true;
  } else {
    console.error("Input Type Error");
    calcShouldProceed = false;
  }
}

function calcController(num1, num2, operationSelected) {
  inputValidator2(num1, num2, operationSelected);
  if (calcShouldProceed) {
    if (numberOfArgs === 2) {
      let inputData = [num1, num2, operationSelected];
      let newNum, operator, _dump;
      [newNum, operator, ..._dump] = inputData;

      return calcFunction(result, newNum, operator);
    } else {
      return calcFunction(num1, num2, operationSelected);
    }
  } else {
    return undefined;
  }
}

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
console.log(calcController(2, "*"));
console.log(calcController(2, "-"));
console.log(calcController(12, 12, "-"));
console.log(calcController(2, "*"));
console.log(calcController(2, "+"));
console.log(calcController(2, "+"));
console.log(calcController(12, 12, "+"));
console.log(calcController("a", 2, "+"));
//FIXME;
console.log(calcController("a", "+"));
//FIXME;
// console.log(calcController(12, 0, "/"));
console.log(inputValidator2("a", 2, "+"));
console.log(calcShouldProceed);
