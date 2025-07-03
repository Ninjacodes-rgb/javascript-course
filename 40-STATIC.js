//static = keyword in JavaScript that allows you to define a method or property that belongs to the class itself, rather than to instances of the class.
/*
class MathUtil{
    static PI = 3.14159;
    static getDiameter(radius) {
        return radius * 2;
    }
    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }
    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI); // 3.14159
console.log(MathUtil.getDiameter(5)); // 10
console.log(MathUtil.getCircumference(5)); // 31.4159
console.log(MathUtil.getArea(5)); // 78.53975
*/

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++; // Increment the static userCount property
    }
    static getUserCount() {
        console.log(`Total users: ${User.userCount}`);
    }
}

const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");
console.log(User.userCount); // 3
console.log(user1.username); // Alice
console.log(user2.username); // Bob
console.log(user3.username); // Charlie
User.getUserCount(); // Total users: 3