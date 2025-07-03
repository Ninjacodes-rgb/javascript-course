//super= The super keyword is used to call the constructor of the parent class in JavaScript.


class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age); // Call the parent class constructor
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age); // Call the parent class constructor
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age); // Call the parent class constructor
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 2, 10);
const fish = new Fish("fish", 1, 5);
const hawk = new Hawk("hawk", 3, 20);
console.log(rabbit.name, rabbit.age, rabbit.runSpeed);
console.log(fish.name, fish.age, fish.swimSpeed);
console.log(hawk.name, hawk.age, hawk.flySpeed);