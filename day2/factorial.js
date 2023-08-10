// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its
// factorial using a for loop. The factorial of a number N is the product of all positive integers less
// than or equal to N.

// let fnum = prompt('enter any positive number');
const findFact = () => {
    let fact=1;
    for(i=1;i<= fnum;i++){
        fact = fact * i
    }
    console.log(fact);
}
// findFact();
