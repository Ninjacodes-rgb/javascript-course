//inheritance
// Inheritance allows us to create a new class that is based on an existing class.(parent->child)

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} eating...`);
    }
    sleep(){
        console.log(`This ${this.name} sleeping...`);
    }
}
class Rabbit extends Animal{
    name = "Rabbit";
    hop(){
        console.log(`This ${this.name} hopping...`);
    }

}
class Fish extends Animal{
    name = "Fish";

    swim(){
        console.log(`This ${this.name} swimming...`);
    }
}

class Hawk extends Animal{
    name = "Hawk";

    fly(){
        console.log(`This ${this.name} flying...`);
    }
}
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
rabbit.alive = false; // Changing the alive property of rabbit instance

console.log(rabbit.alive); // true
console.log(rabbit.sleep());