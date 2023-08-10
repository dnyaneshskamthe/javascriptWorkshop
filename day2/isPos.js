// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive,
// negative, or zero

let num = prompt('enter any number');
const numState = () => {
    if(num > 0){
        console.log("number is positive");
    }else if(num < 0){
        console.log("number is negative");
    }else{
        console.log("number is zero");
    }
}

numState();



