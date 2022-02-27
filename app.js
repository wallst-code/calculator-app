"use strict";

// let num1 = 0;
// let num2 = 0;
let operationSelected = "";

function operation(num1, num2, operationSelected) {
  //Wrap into a validator for '' or NaN - guard - return;
  if (isNaN(num1) || num1 === "" || isNaN(num2) || num2 == "") return undefined; //FIXME
  if (operationSelected === "+") {
    return num1 + num2;
  } else if (operationSelected === "-") {
    return num1 - num2;
  } else if (operationSelected === "*") {
    return num1 * num2;
  } else if (operationSelected === "/") {
    if (num2 === 0) {
      console.log("Error cannot divide by 0");
      return undefined;
    } else {
      return num1 / num2;
    }
  }
}

//listen for numbers and operator selected
// computation
// the display
// the memory
// the validator - if it returns false (not valid) then it will print.
// single responsibility
console.log(operation(7, 2, "+"));
console.log(operation(7, 2, "-"));
console.log(operation(7, 2, "*"));
console.log(operation(7, 2, "/"));
console.log(operation(7, 0, "/")); // deal with dividing by 0

console.log(operation("a", 2, "+")); //FIXME

let y = "a";

if (typeof y !== "number") {
  console.log(`"${y}" is not a number`);
}
