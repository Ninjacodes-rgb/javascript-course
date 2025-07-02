//variable scope = where a variable is accessible in the code
// global scope = variable is accessible everywhere in the code
//local scope = variable is accessible only within a function or block
let x = 3; // global scope
function function1(){
    //let x = 1;// local scope
    console.log(x);
}
function function2(){
    //let y = 2;
    console.log(x);
}