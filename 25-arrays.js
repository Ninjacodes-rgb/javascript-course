//array = a variable like structure that can hold more than one value

let fruits = ['apple', 'banana', 'orange', 'grape'];
//fruits [0] = "coconut";
//console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
/*
console.log(fruits[0]); // coconut
console.log(fruits[1]); // banana  */

fruits.push('kiwi'); // adds 'kiwi' to the end of the array
console.log(fruits); // ['apple', 'banana', 'orange', 'grape', 'kiwi']
fruits.pop(); // removes the last element from the array
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
fruits.unshift('mango'); // adds 'mango' to the beginning of the array
console.log(fruits); // ['mango', 'apple', 'banana', 'orange', 'grape']
fruits.shift(); // removes the first element from the array
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
fruits.splice(1, 2); // removes 2 elements starting from index 1
console.log(fruits); // ['apple', 'grape']  
fruits.splice(1, 0, 'kiwi', 'melon'); // adds 'kiwi' and 'melon' at index 1
console.log(fruits); // ['apple', 'kiwi', 'melon', 'grape']
console.log(fruits.length); // 4, returns the length of the array
console.log(fruits.indexOf('kiwi')); // 1, returns the index of 'kiwi'
console.log(fruits.includes('melon')); // true, checks if 'melon' is in the array
console.log(fruits.join(', ')); // 'apple, kiwi, melon, grape', joins the array into a string
console.log(fruits.slice(1, 3)); // ['kiwi', 'melon'],