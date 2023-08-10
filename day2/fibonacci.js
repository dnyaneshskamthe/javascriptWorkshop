// Assignment 9:
// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series
// up to that number. The Fibonacci series is a sequence of numbers in which each number is the
// sum of the two preceding ones.

function fibSeries(){
    let num = prompt('enter the number');
    let fNum = 0;
    let sNum = 1;
    let nextNumber;
    for(let i=1 ; fNum<= num; i++){
        console.log(fNum);
        nextNumber = fNum+sNum;
        fNum = sNum;
        sNum = nextNumber;
    }
}

fibSeries()