//this - reference to the object where THIS is used, can be used to access properties and methods of the object

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    sayHello: function() { 
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`); 
    },
    eat: function() { 
        console.log(`${this.firstName} is eating crabby paddy`); 
    },
};

const person2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    isEmployed: false,
    sayHello: function() { 
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`); 
    },
    eat: function() { 
        console.log(`${this.firstName} is eating crabby paddy`); 
    },
};
person1.sayHello(); // Hello, my name is John Doe
person1.eat(); // John is eating crabby paddy
person2.sayHello(); // Hello, my name is Jane Doe
person2.eat(); // Jane is eating crabby paddy