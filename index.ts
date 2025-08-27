// Type annotation for a variable
let message: string = "Hello, TypeScript!";
console.log(message);

// Type annotation for a function parameter and return type
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));

// ---
// Interface: A contract for an object's structure
interface User {
  name: string;
  age: number;
  email?: string; // The '?' makes this property optional
}

// Function using the User interface
function greetUser(user: User): void {
  console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

let user1: User = {
  name: "Alice",
  age: 30,
};

greetUser(user1);

// ---
// Class: A blueprint for creating objects
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails(): string {
    return `This is a ${this.year} ${this.make} ${this.model}.`;
  }
}

let myCar = new Car("Toyota", "Camry", 2022);
console.log(myCar.getDetails());
