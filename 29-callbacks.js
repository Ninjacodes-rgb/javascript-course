//callback = a function that is passed as an argument to another function
/*hello(wait);

function hello(callback){
    console.log("Hello");
    callback();
}package;
function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function bye(){
    console.log("Bye");
}*/
sum(displayConsole, 5, 10);

function sum(callback, a, b){
    let result = a + b;
    callback(result);
}
function displayConsole(results){
    console.log(result);
}
function displayPage(result){
    document.getElementById("myH1").textContent = result;
}