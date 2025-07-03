//constructors = function that creates an object

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function() {
    console.log(`Driving a ${this.year} ${this.make} ${this.model} ${this.color}`);
  };
}
const car1 = new Car("Toyota", "Corolla", 2020, "red");
const car2 = new Car("Honda", "Civic", 2021, "blue");
car1.drive(); // Driving a 2020 Toyota Corolla red
car2.drive(); // Driving a 2021 Honda Civic blue