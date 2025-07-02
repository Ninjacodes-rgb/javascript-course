//rest parameters= (...rest) parameters are used to pass a variable number of arguments to a function
// they are used to collect all remaining arguments into an array

function openFridge(...foods){
    console.log(foods);
}
function getFood(...foods){
    return foods; // returns the first 4 items from the array
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "pasta";
const food4 = "salad";
const food5 = "soda";

openFridge(food1, food2, food3, food4, food5); // ['pizza', 'burger', 'pasta', 'salad']
 const foods = getFood(food1, food2, food3, food4, food5); // ['pizza', 'burger', 'pasta', 'salad']
console.log(foods); // ['pizza', 'burger', 'pasta', 'salad