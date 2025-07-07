//element selector= used to target and manipulate HTML elements. They allow you to select one or multiple html elements from the DOM(Document Object Model) 
// 1. getElementById - Selects a single element by its unique ID
/*const elementById = document.getElementById('myId');

// 2. getElementsByClassName - Selects all elements with a specific class name (returns HTMLCollection)
const elementsByClassName = document.getElementsByClassName('myClass');

// 3. getElementsByTagName - Selects all elements with a specific tag name (returns HTMLCollection)
const elementsByTagName = document.getElementsByTagName('div');

// 4. querySelector - Selects the first element that matches a CSS selector
const firstElement = document.querySelector('.myClass');

// 5. querySelectorAll - Selects all elements that match a CSS selector (returns NodeList)
const allElements = document.querySelectorAll('div.myClass');

// 6. getElementsByName - Selects all elements with a specific name attribute (commonly used for form elements)
const elementsByName = document.getElementsByName('myInputName');*/

/*const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor="yellow";
myHeading.style.textAlign="center";

console.log(myHeading);*/
//const fruits = document.getElementsByClassName("fruits");

//fruits[0].style.backgroundColor="yellow";
/*for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}*/

/*Array.from(fruits).forEach(fruit => {
    fruit.computedStyleMap.backgroundColor = "yellow";
});*/


//const h4Elements = document.getElementsByTagName("h4");
//const liElements = document.getElementsByTagName("li");

//h4Elements[0].style.backgroundColor = "yellow";
/*for(let h4Element of h4Elements){
    h4Element.style.backgroundColor= "yellow";
}
for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}*/
/*
Array.from(h4Elements).forEach( h4Elements=> {
    h4Elements.style.backgroundColor="yellow";
});
Array.from(liElements).forEach( liElements=> {
    liElements.style.backgroundColor="lightgreen";
});
*/
/*
const element = document.querySelector("ul");

element.style.backgroundColor = "yellow";
*/

const fruits = document.querySelectorAll("li");

//fruits[0].style.backgroundColor = "yellow";
//console.log(foods);

foods.forEach(food =>{
    food.style.backgroundColor = "yellow";
});