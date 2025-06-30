let userName = " SubhamDas    ";

//console.log(userName.indexOf("a"));

/*userName = userName.trim(); // Removes whitespace from both ends of the string
console.log(userName); // "SubhamDas"*/

// console.log(userName.toUpperCase()); // "SUBHAMDAS"

//console.log(userName.toLowerCase()); // "subhamdas"
/*
let result = userName.startsWith("");
if(result){
    console.log("Your username cant begin with''");
}else{
    console.log(userName);
}*/

let phoneNumber = "1234-567-890";
phoneNumber = phoneNumber.replaceAll("-", ""); 
console.log(phoneNumber);// Replaces the first occurrence of "-"
