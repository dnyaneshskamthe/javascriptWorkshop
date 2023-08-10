let num = prompt('Enter any number');

function findPrimes() {
    if (num < 2) {
        console.log('No prime numbers found');
    } else {
        for (let i = 2; i <= num - 1; i++) {
            let chkP = checkPrime(i);
            if (chkP) {
                console.log(i);
            }
        }
    }
}

function checkPrime(num) {
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            return false;
        }
    }
    return true;
}

findPrimes();
