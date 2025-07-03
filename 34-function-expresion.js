//function declaration= define a reusable block of code that performs a specific task

//function expression = a way to define functions as a values or variables

//callbacks in synchronous operations
//higher order functions
//closures
//eventlisteners
/*
setTimeout(function(){
    console.log("Hello, World!");
}, 3000);
*/

const numbers = [1, 2, 3, 4, 5];
const square = numbers.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers.map(numbers.map(function(element){
    return Math.pow(element, 3);
}));

console.log(square); // [1, 4, 9, 16, 25]
console.log(cubes); // [1, 8, 27, 64, 125]