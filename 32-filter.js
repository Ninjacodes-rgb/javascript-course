//filter() = create a new array by filtering out elements that do not pass a test
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums); // [2, 4, 6, 8, 10]
console.log(oddNums); // [1, 3, 5, 7, 9]

function isEven(elements){
    return elements % 2 === 0;
}

function isOdd(elements){
    return elements % 2 !== 0;
}
    */
/*
const ages=[16, 17, 18, 18, 19, 20];
const adults = ages.filter(isAdult);
const Child = ages.filter(isChild);
console.log(adults); // [18, 18, 19, 20]
console.log(Child); // [16, 17]

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}
    */

const words = ["hello", "world", "JavaScript", "filter", "function"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);
console.log(shortWords); // ["hello", "world", "filter"]
console.log(longWords); // ["JavaScript", "function"]

function getShortWords(element) {
    return element.length <= 5;
}
function getLongWords(element) {
    return element.length > 5;
}
