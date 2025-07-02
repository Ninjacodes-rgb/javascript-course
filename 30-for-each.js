//forEach() = method that executes sa provided function once for each array element
/*
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(cube);
// The function to be executed for each element
numbers.forEach(diplay);
// The function to be executed for each element
function double(element, index, array) {
    array[index] = element * 2;
}
function triple(element, index, array) {
    array[index] = element * 3;
} 
function square(element, index, array) {
        array[index] = Math.pow(element, 2);
}
function cube(element, index, array) {
        array[index] = Math.pow(element, 3);
}

function diplay(element){
    console.log(element);
}
    */

let fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.forEach(upperCase);
fruits.forEach(display);
function upperCase(element, index, array) {
    array[index]= element.toUpperCase();
}

function display(element){
    console.log(element);
}