var person = new Object();

person["firstName"] = "Tony";
person["lastName"] = "White";

var firstNameProperty = "firstName";

console.log(person);

console.log(person[firstNameProperty]);

console.log(person.firstName);

person.address = new Object();
person.address.street = "Bartók Béla Street";
person.address.city = "Szabadka";
person.address.state = "Délvidék";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);

var woman = {
  firstName: "Barry",
  lastName: "Cherry",
  address: {
    street: "Liszt Ferenc Street",
    city: "Csantavér",
    state: "Délvidék"
  }
};

console.log(woman);

function greet(person) {
  console.log("Hi " + person.firstName);
}

greet(woman);

greet({ firstName: "Mary", lastName: "Doe" });

woman.secondAddress = { street: "Széchenyi Square" };

var english = {
  greetings: {
    basic: "Hello"
  }
};

var spanish = {};
spanish.greet = "Hola!";

console.log(english);
console.log(spanish);
