var person = {
  firstName: "Ben",
  lastName: "Kenneth",
  getFullName: function() {
    var fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
};

var logName = function(language1, language2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + language1 + ", " + language2);
  console.log("---------------------------------");
}.bind(person);

var logPersonName = logName.bind(person);

logName();
logPersonName();

logName.call(person, "en", "es");
logName.apply(person, ["en", "es"]);

// Function borrowing
var personOther = {
  firstName: "Jane",
  lastName: "Doe"
};

console.log(person.getFullName.apply(personOther));

// Function currying
function multiply(a, b) {
  return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(4));
