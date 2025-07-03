//arrow functions
// Arrow functions are a more concise syntax for writing function expressions.

/*normal expression
function hello(){
    console.log("Hello, World!");
}

hello();
*/
// Arrow function
//const hello = () => console.log("hello");

//hello(); // Output: 
/*
const hello = (name,age) => console.log(`hello ${name}`)
                            console.log(`You are ${age} years old ');

hello("Subham", 20); */
/*
setTimeout(function(){
    console.log("Hello, World!");
} , 3000);
*/

setTimeout(() => console.log("Hello, World!"), 3000);

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((element)=> Math.pow(element, 2));
const cubes = numbers.map((element)=> Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce(accumulator, element) => accumulator + element;

console.log(squares); // Output: [1, 4, 9, 16
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total); // Output: 15