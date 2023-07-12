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
