const fullName = "Subham Das";

/*let firstName = fullName.slice(0, 6);
let lastName = fullName.slice(7, 10);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);
console.log(firstName); // "Subham"
console.log(lastName); // "Das"
*/
/*let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName); // "Subham"
console.log(lastName); // "Das"*/

const email = "das@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(userName);
console.log(extension); // "gmail.com"