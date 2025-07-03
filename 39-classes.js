//class= ES6 feature
//class is a blueprint for creating objects

class Product {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.07; // 7% sales tax
const product1 = new Product("Laptop", 999.99);
const product2 = new Product("Smartphone", 499.99);
const product3 = new Product("Tablet", 299.99);

product1.displayProduct();
const total = product1.calculateTotal(salesTax);
console.log(`Total with sales tax: $${total.toFixed(2)}`);