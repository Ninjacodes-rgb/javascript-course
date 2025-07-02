//spread operator - allows an iterable to expand in places where zero or more arguments are expected
/*
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); // spread operator expands the array into individual elements
let minimum = Math.min(...numbers); // spread operator expands the array into individual elements
console.log(maximum); // 5*/
/*
let userName = "Subham Das";
let letters = [...userName]; // spread operator expands the string into individual characters
console.log(letters); // ['S', 'u', 'b', 'h', '
'm', ' ', 'D', 'a', 's']*/

/*let fruits = ['apple', 'banana', 'orange', 'grape'];
let moreFruits = [...fruits];

console.log(moreFruits); // ['apple', 'banana', 'orange', 'grape']*/

let fruits = ['apple', 'banana', 'orange', 'grape'];
let vegetables = ['carrot', 'broccoli', 'spinach'];

let foods = [...fruits, ...vegetables]; // spread operator combines both arrays into one
console.log(foods); // ['apple', 'banana', 'orange', 'grape', 'carrot', 'broccoli', 'spinach']