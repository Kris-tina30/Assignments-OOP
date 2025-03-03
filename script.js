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
