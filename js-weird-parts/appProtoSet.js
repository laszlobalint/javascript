function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
  console.log("This is executed!");
}

Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};

var john = new Person("John", "Doe");
console.log(john);

var jane = new Person("Jane", "Berry");
console.log(jane);

String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
};
console.log("Henry".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
  return this > 0;
};
