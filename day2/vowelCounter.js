// Assignment 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels
// (a, e, i, o, u) in the string.

function counter(){
    let str = prompt('enter any string');
    let count = 0
    for(let i = 0;i<str.length;i++){
        if(str[i]==='a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ){
            count+=1;
        }
    }
    console.log(count);
}

counter()