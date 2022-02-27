"use strict";

// let num1 = 0;
// let num2 = 0;
let operationSelected = "";

function operation(num1, num2, operationSelected) {
  //Wrap into a validator for '' or NaN - guard - return;
  if (isNaN(num1) || num1 === "" || isNaN(num2) || num2 == "") return; //FIXME
  if (operationSelected === "+") {
    return num1 + num2;
  } else if (operationSelected === "-") {
    return num1 - num2;
  } else if (operationSelected === "*") {
    return num1 * num2;
  } else if (operationSelected === "/") {
    if (num2 === 0) {
      console.log("Error cannot divide by 0");
      return;
    } else {
      return num1 / num2;
    }
  }
}

//listen for numbers and operator selected
// computation
// the display
// the memory
console.log(operation(7, 2, "+"));
console.log(operation(7, 2, "-"));
console.log(operation(7, 2, "*"));
console.log(operation(7, 2, "/"));
console.log(operation(7, 0, "/")); // deal with dividing by 0

console.log(operation("a", 2, "+")); //FIXME
