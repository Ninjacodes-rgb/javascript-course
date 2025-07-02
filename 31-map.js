//map()= accepts a callback function and applies it to each element in the array, returning a new array with the results.
/*let numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);
console.log(cubes); // [1, 4, 9, 16, 25]


function square(element) {
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}*/

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsLower = students.map(lowerCase);
console.log(studentsLower); // ["SPONGEBOB", "PATRICK", "SQUIDWARD", "SANDY"]

function upperCase(element) {
    return element.toUpperCase();
}

function lowerCase(element) {
    return element.toLowerCase();
}