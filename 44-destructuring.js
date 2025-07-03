//destructuring= extracting values from arrays and objects then assigning them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring


//example 1 : Swap the value of two variables
/*let a = 1;
let b = 2;

[a,b] = [b,a];
console.log(a); // 2
console.log(b); // 1

//example 2 : Swap two elements in an array

const colors = ['red', 'green', 'blue', 'black', 'white'];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors); // ['white', 'green', 'blue', 'black', 'red']


//example3 : assign array elements to variables

const colors = ['red', 'green', 'blue', 'black', 'white'];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor); // 'red'
console.log(secondColor); // 'green'
console.log(thirdColor); // 'blue'
console.log(extraColors); // ['black', 'white']

*/

//example 4: extract values from an object
const person1 = {
    firstName: 'Spongebob',
    secondName: 'Squarepants',
    age: 30,
    job: "fry cook"
};
const person2 = {
    firstName: 'Patrick',
    secondName: 'Star',
    age: 34,
};

const {firstName, secondName, age, job = "unemployed"} = person2;
console.log(firstName);
console.log(secondName);
console.log(age); 
console.log(job);
