const numbers = [1, 2, 3, 4, 5];

function multiplyArray(multiplier) {
  numbers.forEach(function (elementNumber) {
    console.log(`the output is ${elementNumber * multiplier}`);
  });
}

multiplyArray(5);

// numbers.forEach(function (elementNumber) {
//   console.log(`the output is ${elementNumber}`);
// });

// all three ways to itterate over an array so far

// normal for loop
console.log("Normal for loop");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for of loop
console.log("For of loop");
for (number of numbers) {
  console.log(number);
}

// using array forEach loop
console.log("array forEach loop");
numbers.forEach(function (num) {
  console.log(num);
});

// for each with index
// you can check what values the callback can take in
numbers.forEach(function (num, index) {
  console.log(`The number is ${num} @ index ${index}`);
});

// map
console.log("Map");
const addOneToArray = numbers.map(function (numberInArray) {
  return numberInArray + 1;
});

console.log(addOneToArray);

// map that returns an object

const checkIfEven = numbers.map(function (num) {
  // we are going to return an object (dictionary)
  return {
    value: num,
    isEven: num % 2 === 0,
  };
});

console.log(checkIfEven);

// implicit functions

const implicitFunc = (n) => n * n;
console.log(implicitFunc(5));

const implicitCheckIfEven = numbers.map((num) => num % 2 === 0);
console.log(implicitCheckIfEven);

// find array function

const names = ["ryan", "gabe", "josh"];

const findRyan = names.find((element) => {
  return element.includes("ry");
});
console.log(findRyan);

const valueGreaterThanThree = numbers.find((num) => {
  return num > 3;
});
console.log(valueGreaterThanThree);

// using implicit return:
const valueGreaterThanFour = numbers.find((num) => num > 4);
console.log(valueGreaterThanFour);

// filter
// lets filter out the even numbers

const filteredOutEvens = numbers.filter((n) => {
  return n % 2 === 1;
});

console.log(filteredOutEvens);

// every
const namesWithR = ["ryan", "ray", "rebecca"];

const startsWithR = namesWithR.every((name) => {
  return name[0] === "r";
});

console.log(startsWithR);

// some

const startsWithJ = names.some((name) => {
  const lowerCaseName = name.toLowerCase();

  return lowerCaseName[0] === "j";
});

console.log(startsWithJ);

// sorting array of numbers

const unsortedNums = [25, 2, 6, 50, 25];

// sorting in ascending order

const ascendingSort = unsortedNums.slice().sort(function (val1, val2) {
  return val1 - val2;
});
console.log(ascendingSort);

// sorting in descending order
const descendingSort = unsortedNums.slice().sort(function (value1, value2) {
  return value2 - value1;
});
console.log(descendingSort);
