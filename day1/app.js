// Assignment 1: Array Operations
let fruits = []; //creating empty array fruits
fruits.push('apple','banana','orange'); // adding items to array
fruits.splice(0,1);  //removing first  item from array
fruits.push('grape'); // adding grape in the end of array -fruits.splice(2,0,'grape') 
fruits.splice(1,0,'pear'); // Update the second fruit in the array to "pear"
console.log(fruits);    // printing array

//Assignment 2: Object Operations
let person = {} //Create an empty object called "person"
// Adding properties to the "person" object
person.name = 'John';
person.age = 30;
person.city = 'New York';
delete person.age;  // remove age property
person.job = 'Engineer'; // and new property
person.city = 'San Francisco' ;  // update existing property
console.log(person);    // printing object

//Assignment 3: Array of Objects Operations
let cars = [];  // creating empty array
let car = {make: "Toyota",model: "Camry",year: 2018};

// adding three car objects to array
cars.push(
    {make: "Toyota",model: "Camry",year: 2018},
    {make: "Toyota",model: "Camry",year: 2018},
    {make: "Toyota",model: "Camry",year: 2018}
);
// cars.push({...car},{...car},{...car}) // alternate method
cars.splice(0,1);   // removing first object from array
cars.push({make: "Honda",model: "Civic",year: 2020});   // adding new object to array
cars[1].model='Accord'; // updating model property of second object in the array
console.log(cars); // printing the final array


