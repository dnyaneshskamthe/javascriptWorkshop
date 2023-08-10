// Assignment 10:
// Write a JavaScript function that takes a positive integer as a parameter and prints its
// multiplication table up to 10.

function mulTable (){
    let num = prompt('enter any number');
    for(let i = 1; i<=10;i++){
        console.log(num*i);
    }
}

mulTable();