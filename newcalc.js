"use strict";
let result;
let memory = []; // inputs and results - to make a tape and memory
let stringNumber = [];
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

    // Operand Builder as a string then converts later
    if (button.classList.contains("number-btn")) {
      stringNumber += e.target.textContent;
      console.log("stringNumber = ", stringNumber);
    }

    // stringNumber converts to number as operand1 and clears stringNumber - creates oeprator
    if (button.classList.contains("operation-btn")) {
      if (operator === undefined && result === undefined) {
        operator = e.target.textContent;
        operand1 = Number(stringNumber);
        stringNumber = [];
        console.log(operand1);
      } else if (operator !== undefined) {
        // takes the next stringNumber and converts to number for operand2 and clears it.
        operand2 = Number(stringNumber);
        stringNumber = [];
        // How do I trigger a calcFunction() on entry of operand2?
        // I need to get operand1 to become results and have continuous calcs. FIXME

        console.log(
          "Operand1 = ",
          operand1,
          "operator = ",
          operator,
          " Operand2 = ",
          operand2
        );
        updateMemory(operand1, operator, operand2); //FIXME
        calcFunction(operand1, operator, operand2);
        displayResult(result);
        console.log(memory);
      }
      // I need to make operand1 = result
    }
  });
}

function displayResult(result) {
  console.log("output = ", result);
}

function updateMemory(operand1, operator, operand2) {
  memory.push({ operand1, operator, operand2 }); //FIXME
  console.log(memory);
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

function calcFunction(num1, operationSelected, num2) {
  if (operationSelected === "+") {
    result = num1 + num2;
    return result;
  } else if (operationSelected === "-") {
    result = num1 - num2;
    return result;
  } else if (operationSelected === "x") {
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
