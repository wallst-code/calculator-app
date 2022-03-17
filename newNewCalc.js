'use strict';
let result;
let memory = []; // inputs and results - to make a tape and memory
let stringNumber = [];
let operand1;
let operand2;
let operator;
let operationsCounter = 0;

const buttons = document.getElementsByClassName('btn');
const numberButtons = document.getElementsByClassName('btn');
const btn1 = document.getElementById('btn-id-1');
const btn2 = document.getElementById('btn-id-2');
const btn3 = document.getElementById('btn-id-3');
const btn4 = document.getElementById('btn-id-4');
const btn5 = document.getElementById('btn-id-5');
const btn6 = document.getElementById('btn-id-6');
const btn7 = document.getElementById('btn-id-7');
const btn8 = document.getElementById('btn-id-8');
const btn9 = document.getElementById('btn-id-9');
const btnZero = document.getElementById('btn-id-0');
const btnClear = document.getElementById('btn-id-clear');
const btnAdd = document.getElementById('btn-id-addition');
const btnSubtract = document.getElementById('btn-id-subtract');
const btnMultiply = document.getElementById('btn-id-multiply');
const btnDivide = document.getElementById('btn-id-divide');
const btnDecimal = document.getElementById('btn-id-decimal');
const btnEqual = document.getElementById('btn-id-equal');
const display = document.getElementsByClassName('display');

////
btn1.addEventListener('click', function (e) {
  operandBuilder(e);
});
btn2.addEventListener('click', function (e) {
  operandBuilder(e);
});
btn3.addEventListener('click', function (e) {
  operandBuilder(e);
});
btn4.addEventListener('click', function (e) {
  operandBuilder(e);
});
btn5.addEventListener('click', function (e) {
  operandBuilder(e);
});
btn6.addEventListener('click', function (e) {
  operandBuilder(e);
});
btn7.addEventListener('click', function (e) {
  operandBuilder(e);
});
btn8.addEventListener('click', function (e) {
  operandBuilder(e);
});
btn9.addEventListener('click', function (e) {
  operandBuilder(e);
});

btnZero.addEventListener('click', function (e) {
  operandBuilder(e);
});

btnAdd.addEventListener('click', function (e) {
  calcController(e);
});

btnSubtract.addEventListener('click', function (e) {
  calcController(e);
});

btnMultiply.addEventListener('click', function (e) {
  calcController(e);
});

btnDivide.addEventListener('click', function (e) {
  calcController(e);
});

btnClear.addEventListener('click', function (e) {
  clearCalculator(e);
});

btnDecimal.addEventListener('click', function (e) {
  decimalController(e);
});

btnEqual.addEventListener('click', function (e) {
  calcController(e);
});

function operandBuilder(e) {
  let str = e.target.textContent;
  stringNumber += str;
  str = '';
  console.log('string number =', stringNumber);
}

function calcController(e) {
  console.log(' calc controller', e.target.textContent);
  operator = e.target.textContent;
  operationsCounter++;
  console.log('counter is at', operationsCounter);

  // if new calc - it may be easier to check the number of operators
  if (operationsCounter === 1 && operand1 === undefined) {
    console.log('new calc operation');
    firstCalculation();
  } else if (operationsCounter >= 2) {
    console.log('cont calc - greater than 2');
    continuedCalculations();
  } else {
    console.log('continuous calc');
  }

  // lots of if then logic here.
}

function decimalController(e) {
  console.log('decimal controller', e.target.textContent);
  // can only use once per operand
}

function clearCalculator(e) {
  console.log('clear');
  // clear display and operands, operators
}

function calcMemory(something) {
  console.log('memory');
}

function firstCalculation() {
  console.log('first calc function');
  operand1 = Number(stringNumber);
  stringNumber = [];
  console.log('operand1 =', operand1);
  console.log('stringNumber should be cleared from 1st Calc', stringNumber);
}

function continuedCalculations() {
  console.log('cont calc function');
  operand2 = Number(stringNumber);
  stringNumber = [];
  console.log('stringNumber Cleared in contCalc', stringNumber);
  console.log('operand2 = ', operand2);
  result = calcFunction(operand1, operator, operand2);
  displayResult(result);
}

function displayResult(result) {
  console.log('result display function');
  console.log(result);
}

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
