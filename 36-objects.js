//objects= a collection of related properties and or methods , can be used for real world objects
//objects are mutable, can be changed after creation
// object = {key:value, function()}


const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed:true,
    sayHello: function(){ console.log("Hello, my name is John Doe"); },
    eat: () => { console.log("Eating crabby paddy"); },
}
const person2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    isEmployed: false,
    sayHello: ()=> { console.log("Hello, my name is Jane Smith"); },
    eat: () => { console.log("Hey I am eating roast chicken."); },

}

person1.sayHello(); // Hello, my name is John Doe
person2.sayHello(); // Hello, my name is Jane Smith
person1.eat(); // Eating crabby paddy
person2.eat(); // Hey I am eating roast chicken.