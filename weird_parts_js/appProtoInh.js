var person = {
  firstName: "Default",
  lastName: "Value",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var patrick = {
  firstName: "Patrick",
  lastName: "Blondie"
};

// Do not do this, just for demo purposes!
patrick.__proto__ = person;
console.log(patrick.getFullName());
console.log(patrick.firstName);

var jane = {
  firstName: "Jane"
};

jane.__proto__ = person;
console.log(jane.getFullName());

// Loop over an object properties:
for (var prop in jane) {
  if (jane.hasOwnProperty(prop)) console.log(prop + ": " + jane[prop]);
}

var john = {
  address: "111 Main Street",
  getFormalFullName: function() {
    return this.lastName + ", " + this.firstName;
  }
};

var jim = {
  getFirstName: function() {
    return firstName;
  }
};

_.extend(jaen, john, jim);
console.log(jane);
