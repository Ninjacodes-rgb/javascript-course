//Example 1 h1

//1. Create the element
//const newH1 = document.createElement("h1");
const newListItem = document.createElement("li");

//2. Add attributes
/*newH1.textContent = "Hello World";
newH1.id = "newH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
*/
newListItem.textContent = "Mango";
newListItem.id = "mango";
newListItem.style.fontSize = "2rem";
newListItem.style.fontWeight = "bold";

//3. Append element to dom
//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("box1").append(newH1);
//document.getElementById("box1").prepend(newH1);

//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box2);

//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[2]);
document.body.prepend(newListItem);

//4.Remove element

document.body.removeChild(newH1);