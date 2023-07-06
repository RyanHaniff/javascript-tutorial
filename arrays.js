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
    isEven: num % 2 === 0
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

// lets make an object (dictionary) of books with their ratings and compare them

const books = [
  {
    title: "Good Omens",
    author: ["Terry P"],
    rating: 4.25,
    genres: ["fiction", "fantasy"]
  },
  {
    title: "Changing the mind",
    authors: ["Zaddie s"],
    rating: 4.42,
    genres: ["fiction"]
  },
  {
    title: "Mind",
    authors: ["Zaddie s"],
    rating: 4.03,
    genres: ["fiction"]
  },
  {
    title: "Body",
    authors: ["Ryan s"],
    rating: 4.3,
    genres: ["fantasy"]
  }
];

const sortBooksByRatingAsc = books.slice().sort((book1, book2) => {
  const rating1 = book1.rating;
  const rating2 = book2.rating;
  return rating1 - rating2;
});

console.log(sortBooksByRatingAsc);

// reduce
// using implicit return (no squigly)
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(`The sum is ${sum}`);

// lets try and find the max value in the array:

const maxValue = numbers.reduce(function (previousValue, currentValue) {
  return currentValue > previousValue ? currentValue : previousValue;
});

console.log(`Max value is ${maxValue}`);

// another way to do the same thing:

const maxValue2 = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > previousValue) {
    return currentValue;
  } else {
    return previousValue;
  }
});

console.log(`Max value is ${maxValue2}`);

const minVlaue = numbers.reduce((previousValue, currentValue) => {
  return Math.min(previousValue, currentValue);
});

console.log(`Min value is ${minVlaue}`);

// tallying the number of items of each type

const votes = [
  "y",
  "y",
  "y",
  "y",
  "y",
  "y",
  "y",
  "y",
  "y",
  "n",
  "n",
  "n",
  "n",
  "n",
  "n",
  "n",
  "absent"
];

// empty object as the initial value
const countVotes = votes.reduce((tally, currentValue) => {
  // we want to add to the empty object by adding the number of y's and n's

  // check to see if we have that key in the object
  if (tally[currentValue]) {
    tally[currentValue]++;
  } else {
    tally[currentValue] = 1;
  }
  return tally;
}, {});

console.log(countVotes);
