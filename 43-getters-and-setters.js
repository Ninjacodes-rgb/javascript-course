//getters = special method that makes a property readable
//setters = special method that makes a property writable
/*
class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }    
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; 
        } else {
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight; 
        } else {
            console.error("Height must be a positive number");
        }
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    get area(){
        return this._width * this._height;
    }
}
const rectangle = new Rectangle(3,4);

console.log(rectangle.width); 
console.log(rectangle.height);
console.log(rectangle.area);
*/

class Person{
    constructor(firstName, lastName ,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName === 'string' && newFirstName.lenght > 0){
            this._firstName = newFirstName;
        } else {
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === 'string' && newLastName.lenght > 0){
            this._lastName = newLastName;
        } else {
            console.error("Last name must be a non-empty string");
        }
    }
    set age(newAge){
        if(typeof newAge === 'number' && newAge >= 0){
            this._age = newAge;
        } else {
            console.error("Age must be a positive number");
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
    get age(){
        return this._age;
    }
}
    
const person = new Person("John", "Doe", 30);

console.log(person.firstName); // John
console.log(person.lastName); // Doe   
console.log(person.age); // 30