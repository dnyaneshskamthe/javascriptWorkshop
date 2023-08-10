// Assignment 6:
// Write a JavaScript function that simulates a simple calculator. The function should take two
// numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.
function calc(){
    let num1 = prompt('Enter first number');
    let num2 = prompt('Enter second number');
    let ope = prompt('Enter any opertor');
    let expresson = num1 + ope + num2;
    console.log(eval(expresson));
}
calc();