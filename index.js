console.log("Hello world"); // this is a statement, they are terminated by semicolons

// ---variables
let varName = "Ryan";
console.log(varName);

// reserved keywords:
// let
// if
// else
// true
// false

// ---decalring multiple variables:
let firstName = "first",
  lastName = "last";
// best practice is to declare everything on a new line:
let newFirstName = "newFirst";
let newLastName = "newLast";

let interestRate = 0.3;
// we can change the value after declaration:
interestRate = 1;
// constant, value cannot change:
const interestRate2 = 0.3;
// interestRate2 = 1; this cannot be done

// ---Primitives: String, numebrs, booleans, undeffined and null
let myName = "Ryan"; // String literal
let age = 20; // Number literal
let isApproved = true; // Boolean literal
let unkownName; // undefined or let unkownName = undefined
myName = null; // to clear the value of a variable

// ---java script is dynamically typed (type of a variable (string, integer,...) can be changed at run time)
// you can use typeof in the console to see teh variable type
// javascript doesnt have floats and doubles, all numbers (integers or flaots) are of type number
let number = 1;
number = 1.0; // both of are type number

// ---objects
let person = {
  // keys and their corresponding value
  name: "Ryan",
  age: 20,
}; //curly braces are object literals

// to change the name of a person:

// dot notaion
person.name = "Ryan2";

// bracket notation (is used for dynamic programming when we dont know the exact property name the user is going to pick)
person["name"] = "Mary";

// to read the name:
console.log(person.name);

// ---arrays
let selectedColors = []; // empty array literal
selectedColors = ["red", "blue"]; // we can have different types stored in an array like python
selectedColors[2] = "green";
selectedColors[3] = 1;
console.log(selectedColors);
// an array (data structure) is an object
console.log(selectedColors.length);

// ---functions
function greet(name, lastName) {
  // takes a parameter (at time of declaration)
  // body of the function
  console.log("call to greet function " + name + " " + lastName);
} // functions dont have semicolons at the end

greet("New Name in greet", "last name here"); // pass in argument
greet("second name in greet", "new last name here");

// --types of functions
function square(number) {
  return number * number;
}

let sqauredNumber = square(5);
console.log(sqauredNumber);
