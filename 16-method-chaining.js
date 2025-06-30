//Method chaining - Calling one method after another in one contuinuous line of code.

//const { use } = require("react");\

let username = window.prompt("Enter your username: ");

//No method chaining

/*username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);*/

//Method chaining

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase();
console.log(username);