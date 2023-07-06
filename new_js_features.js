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
