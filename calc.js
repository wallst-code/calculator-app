'use strict';

class Calculator {}

function calcFunction(num1, operator, num2) {
  console.log('calc funciton running');
  if (operator === '+') {
    result = num1 + num2;
    return result;
  } else if (operator === '-') {
    result = num1 - num2;
    return result;
  } else if (operator === 'x') {
    result = num1 * num2;
    return result;
  } else if (operator === '/') {
    if (num2 === 0) {
      console.error('Error cannot divide by 0');
      return undefined;
    } else {
      result = num1 / num2;
      return result;
    }
  }
}
