// Assignment 8:
// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a
// perfect number. A perfect number is a positive integer that is equal to the sum of its proper
// divisors, excluding itself.

function isPerfectNum() {
    let num = prompt('Enter any positive number');
    
    if (num < 0) {
        console.log('Please enter a positive number');
        return;
    }

    let sumOfDivisors = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sumOfDivisors += i;
        }
    }

    if (num == sumOfDivisors) {
        console.log('Number is perfect');
    } else {
        console.log('Not a perfect number');
    }
}

isPerfectNum();
