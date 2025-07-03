//.reduce() = reduce an array to a single value
/*
const prices = [5,10,30,25,15,20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`); // $105.00

function sum(accumulator, element) {
    return accumulator + element;
}
    */

const grades = [80, 90, 70, 85, 95];

const maximum = grades.reduce(getMax);
console.log(maximum); // 95

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}