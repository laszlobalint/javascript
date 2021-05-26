function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
  console.log("This is executed!");
}

var john = new Person("John", "Doe");

var jane = new Person("Jane", "Berry");
