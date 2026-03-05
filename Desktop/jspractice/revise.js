// variables
let age = 20;
age = 21; // allowed
console.log(age);

// console.log(age);
const PI = 3.14;
// PI=3.1 Not allowed
console.log(PI);

const user = {
  name: "Ali",
  age: 22
};

user.age = 23; // allowed

// functions

function greet(name) {
  console.log("Hello " + name);
}

greet("Ali");

// arrow function

const add = (a,b) => {
 return a + b;
}