"use strict";
let result;
let memory = []; // inputs and results - to make a tape and memory
let stringNumber = [];
let operand1;
let operand2;
let operator;

const buttons = document.getElementsByClassName("btn");
const numberButtons = document.getElementsByClassName("btn");
const btn1 = document.getElementById("btn-id-1");
const btn2 = document.getElementById("btn-id-2");
const btn3 = document.getElementById("btn-id-3");
const btn4 = document.getElementById("btn-id-4");
const btn5 = document.getElementById("btn-id-5");
const btn6 = document.getElementById("btn-id-6");
const btn7 = document.getElementById("btn-id-7");
const btn8 = document.getElementById("btn-id-8");
const btn9 = document.getElementById("btn-id-9");
const btnZero = document.getElementById("btn-id-0");
const btnClear = document.getElementById("btn-id-clear");
// const btnDelete = document.getElementById("btn-id-delete");
const btnAdd = document.getElementById("btn-id-addition");
const btnSubtract = document.getElementById("btn-id-subtract");
const btnMultiply = document.getElementById("btn-id-multiply");
const btnDivide = document.getElementById("btn-id-divide");
const btnDecimal = document.getElementById("btn-id-decimal");
const btnEqual = document.getElementById("btn-id-equal");
const display = document.getElementsByClassName("display");

////
btn1.addEventListener("click", function (e) {
  operandBuilder(e);
});
btn2.addEventListener("click", function (e) {
  operandBuilder(e);
});
btn3.addEventListener("click", function (e) {
  operandBuilder(e);
});
btn4.addEventListener("click", function (e) {
  operandBuilder(e);
});
btn5.addEventListener("click", function (e) {
  operandBuilder(e);
});
btn6.addEventListener("click", function (e) {
  operandBuilder(e);
});
btn7.addEventListener("click", function (e) {
  operandBuilder(e);
});
btn8.addEventListener("click", function (e) {
  operandBuilder(e);
});
btn9.addEventListener("click", function (e) {
  operandBuilder(e);
});

btnZero.addEventListener("click", function (e) {
  operandBuilder(e);
});

btnAdd.addEventListener("click", function (e) {
    operationController(e);

  btnSubtract.addEventListener("click", function (e) {
    operationController(e);
  });

  btnMultiply.addEventListener("click", function (e) {
    operationController(e);
  });

  btnDivide.addEventListener("click", function (e) {
    operationController(e);
  });

  btnClear.addEventListener("click", function (e) {
    clearCalculator(e);
  }); 

  btnDecimal.addEventListener("click", function (e) {
    decimalController(e);
  });

  btnEqual.addEventListener("click", function (e) {
    operationController(e);
  });

  function operandBuilder(e) {
    let str = e.target.textContent;
    stringNumber += str;
    console.log("str =", str);
    console.log("string number =", stringNumber);
  }

  function operationController(e){
    console.log(operation, 'operation controller');
}

function decimalController(e){
    console.log('decimal controller');
}

function clearCalculator(e) {
    console.log('clear');
};