// default params

function multiply(a, b = 6) {
  return a * b;
}

console.log(multiply(2)); // return 12
console.log(multiply(2, 4)); // returns 8

function greeting(name, greet = "Hello") {
  console.log(`${greet}, ${name}`);
}

greeting("Ryan"); // Hello, Ryan
greeting("Ryan", "Hi"); // Hi, Ryan

// spread

const numbers = [1, 2, 3, 4, 5];

console.log(Math.max(numbers)); // cant do this
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
// it is the same as doing:
console.log(Math.max(1, 2, 3, 4, 5));

function giveMeThreeParams(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const colors = ["red", "yellow", "blue"];

giveMeThreeParams(...colors);
giveMeThreeParams(..."Hey");

const combinedArrray = [...colors, ..."Hey"];
console.log(combinedArrray);
// similar to using concat
console.log(colors.concat("Hey"));

// duplicating an array
const duplicateNumbers = [...numbers];
console.log(`duplicate array: ${duplicateNumbers}`);

// spread with objects (dictionaries)
// copies over the key-value pairs to the new object

const ryanObj = {
  name: "Ryan",
  lastname: "Haniff"
};

const testObj = {
  ...ryanObj,
  test: true
};

console.log(testObj);

// spreads an array into an object
const arrayOfNumbs = [...[1, 2, 3], { ...ryanObj }];
console.log(arrayOfNumbs);

// using rest to pass in any number of inputs into a function

function passInAnyArguments(...args) {
  console.log(args);
}

passInAnyArguments("this", "is", "my", "array");

function sum(...args) {
  return args.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
}

console.log(`the sum of these nums is: ${sum(1, 2, 3, 4, 5)}`);

// breaking down the array using spread to be passed into the sum function
const myArray = [1, 2, 3, 4, 5];
console.log(sum(...myArray));

function remainingArgs(first, last, ...otherArgs) {
  console.log(first);
  console.log(last);
  console.log(otherArgs);
}

remainingArgs("Ryan", "H", "rest", "of", "my", "titles");

// destructuring

const raceResults = ["winner1", "winner2", "winner3", "winner4", "winner5"];

const gold = raceResults[0];
const silver = raceResults[1];
const bronze = raceResults[2];
console.log(gold);
console.log(silver);
console.log(bronze);

// vs

const [gold2, silver2, bronze2] = raceResults;
console.log(gold2);
console.log(silver2);
console.log(bronze2);

const [gold3, , , fourth] = raceResults;
const [gold4, , ...others] = raceResults;

console.log(gold3);
console.log(fourth);
console.log(gold4);
console.log(others);

// destructring an object

const myObject = {
  firstName: "Ryan",
  lastName: "Haniff",
  title: "Canada"
};

const { firstName, lastName } = myObject;

console.log(
  `this is the first value: ${firstName} and this is the second value ${lastName}`
);

// if we want to give new names for the variables:

const { firstName: argument1, lastName: argument2 } = myObject;
console.log(`${argument1} and ${argument2}`);

const { firstName: sameName, ...everythingElse } = myObject;
console.log(
  `everything else inside the object: ${everythingElse.lastName} and ${everythingElse.title}`
);
