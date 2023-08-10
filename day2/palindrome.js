// Assignment 4:
// Write a JavaScript function that takes a string as a parameter and determines whether it's a
// palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters
// that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
let string = prompt("enter any string");
const isPalindrome = () =>{
    let temp = string;
    let revstring = '';
    for(let i = string.length-1;i>=0;i--){
        revstring += string[i];
    }
    if(temp === revstring){
        console.log('string is palindrome');
    }else{
        console.log('string is not plindrome');
    }
}
isPalindrome();