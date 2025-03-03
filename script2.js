// Exercise 2 - This

// Create a new object using the `Person` class you defined in Exercise 1.
// Name the object `person1` and set the `name` and `age` properties accordingly.

// Then, create a function called `describePerson` that takes a callback function as
// an argument. Inside the `describePerson` function, call the callback function with `
// person1` as the `this` context.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
const person3 = new Person("Kristina", 32);

function describePerson(callback) {
  return callback.call(person3);
}

describePerson(person3.introduce);
console.log(describePerson(person3.introduce));
