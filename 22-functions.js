//function = section of reusable code , Declare code once and use it many times
// Call the dunction and execute the code
/*
function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old`);
}

happyBirthday("Subham",20);
happyBirthday("Spongebob",22);
happyBirthday("Patrick",27);*/

function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
function isEven(number){
    /*if(number%2 === 0 ){
        return true;
    }else{
        return false;
    }*/
   return number % 2 === 0 ? true:false;
}
function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }

}
console.log(isValidEmail("subham@gmail.com")); // true
console.log(isValidEmail("elonmush@gmail.com"));
console.log(isValidEmail("elonmush.com"));//false