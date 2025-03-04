// Exercise 1 - Classes

// Create a class called `Person` with the following properties and methods:

// 1 - Properties:

//  `name` (string)
//  `age` (number)
// 2 - Methods:

//  `introduce()`: This method should return a string introducing the person,
//  for example: "Hi, my name is John and I am 25 years old."

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("John", 25);
console.log(person1.introduce());

const person2 = new Person("Alice", 30);
console.log(person2.introduce());

// Exercise 2 - This

// Create a new object using the `Person` class you defined in Exercise 1.
// Name the object `person1` and set the `name` and `age` properties accordingly.

// Then, create a function called `describePerson` that takes a callback function as
// an argument. Inside the `describePerson` function, call the callback function with `
// person1` as the `this` context.

const person3 = new Person("Kristina", 32);

function describePerson(callback) {
  return callback.call(person3);
}

describePerson(person3.introduce);
console.log(describePerson(person3.introduce));

//Exercise 3 - Promises

// Write a function called `wait` that takes a number as an argument

// (representing milliseconds) and returns a Promise. The Promise should

// resolve after the given number of milliseconds, using `setTimeout`.

// The resolved value can be anything you choose.

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${milliseconds} milliseconds`);
    }, milliseconds);
  });
}
wait(2000).then((message) => console.log(message));
