//nested-objects=objects inside other objects
//Person{address{}, Contactinfo{}}
//ShoppingCart{items[], totalPrice, user{firstName, lastName, address{}}}
/*
const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "cooking", "jellyfishing"],
    address:{
        street: "123 Bikini Bottom",
        city: "Bikini Bottom",
        country: "Ocean"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address.street);
*/
class Person{
    constructor(name, age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address); //address is an array
    }
}
class Address{
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob Squarepants", 30, "123 Bikini Bottom", "Bikini Bottom", "Ocean");
const person2 = new Person("Patrick Star", 34, "456 Jellyfish Fields", "Bikini Bottom", "Ocean");
const person3 = new Person("Squidward Tentacles", 40, "789 Conch Street", "Bikini Bottom", "Ocean");

console.log(person1.address.street); // "123 Bikini Bottom"
console.log(person2.address.city); // "Bikini Bottom"
console.log(person3.address.country); // "Ocean"