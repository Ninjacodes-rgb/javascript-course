/*let age = 25;
if(age >= 18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18 to enter this site");
}
let time = 9;

if(time < 12){
    console.log("Good Evening");
}
else{
    console.log("Good Afternoon");
}
*/
/*
let isStudent = false;

if(isStudent){
    console.log("You are a student!");
}
else{
    console.log("You are Not a student!");
}
*/
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 0;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);


    if(age>=100){
        resultElement.textContent=`You are TOO OLD to enter this site.`;
    }else if(age==0){
        resultElement.textContent=`You cannont enter You were just born.`;
    }else if(age>=18){
        resultElement.textContent=`You are old enough to enter this site.`;
    }else if(age<0){
        resultElement.textContent= `You age cant be below 0`;
    }else{
        resultElement.textContent=`You must be 18+ to enter this site`;
    }
}