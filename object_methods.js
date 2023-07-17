// computer properties

const role = "junior";
const person = "ryan";
const role2 = "director";
const person2 = "mallar";

// to create an object where role doesnt conflict

// object
const team = {
  // the problem is role gets tunred into a string, its not calling the role variable above
  role: person,
  role2: person2
};
// to fix this the normal way we would have to do this
team[role] = person;
team[role2] = person2;

// to fix this we can do this:

const team2 = {
  [role]: person,
  [role2]: person2
};

// adding a property without using computer properties
function addPropertyToObject(objectCopy, key, value) {
  const copy = { ...objectCopy };
  copy[key] = value;
  return copy;
}

const team3 = addPropertyToObject(team, "role3", "senior");

// doing is the computer property way:
function addPropertyToObjectComputed(objectCopy, key, value) {
  return { ...objectCopy, [key]: value };
}

const team4 = addPropertyToObjectComputed(team2, "role3", "mid");

// methods to objects

function add(a, b) {
  return a + b;
}
// here we explictly call the add function but we can define the function inside the object
const math = {
  add
};

const math2 = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  }
};

// using this keyword

// create an object
const newPerson = {
  first: "Ryan",
  last: "Haniff",
  nickName: "Ry",
  fullName() {
    // destructure newPerson object using this
    const { first, last, nickName } = this;

    // getting first and last from destructred this
    console.log(`${first} ${last}`);

    // use this to access object variables
    return `${this.first} ${this.last}`;
  },
  printBio() {
    console.log(`${this.first} ${this.last} is a person`);
  },

  // not common to use arrow functinos in objects
  laugh: () => {
    // refers the the window, not the object newPerson, because its an arrow function
    console.log(this);
    console.log(`${this.nickName} says lol`);
  }
};

// this is referencing the global window, not the newPerson object
const printBio = newPerson.printBio();

// annoyer
const greet = {
  greeting: ["hello", "hi", "how are you"],
  pickPhrase() {
    // destructuring
    // const { greeting } = this;
    // or we can use this.greeting
    const idx = Math.floor(Math.random() * this.greeting.length);
    return this.greeting[idx];
  },
  start() {
    console.log(this); //references the object
    // this gives use an error becauser its set to the window
    // this is because setInterval is calling the pickPhrase function which is a window function (global)
    // setInterval(this.pickPhrase(), 2000);

    // we have to use arrow function to make it call the greet object
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 500);
  },
  stop() {
    // to get access to setInterval we have to use this.value to have a reference to it
    clearInterval(this.timerId);
  }
};
