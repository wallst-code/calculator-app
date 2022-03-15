"use strict";

let operationSelected = "";

let result = 0;
let operation = [];

function inputValidator(num) {
  if (isNaN(num) || num === "" || typeof num !== "number") {
    console.error(`Error ${num} is the wrong input type`);
    return undefined;
  } else return true;
}

function continousCalculations() {
  //needing to switch from 2 numbers to result operation and new number, until clear is selected.
}

function calcFunction(num1, num2, operationSelected) {
  if (inputValidator(num1) && inputValidator(num2)) {
    operation = [num1, num2, operationSelected];

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
        return undefined;
      } else {
        result = num1 / num2;
        return result;
      }
    }
  }
}
console.log(calcFunction(12, 1, "/"));
console.log(operation);
