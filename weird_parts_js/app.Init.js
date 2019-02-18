var people = [
  {
    // The 'John' object
    firstname: "John",
    lastname: "Doe",
    addresses: ["111 Main St.", "222 Third St."]
  },
  {
    // The 'Jane' object
    firstname: "Jane",
    lastname: "Doe",
    addresses: ["333 Main St.", "444 Fifth St."],
    greet: function() {
      return "Hello!";
    }
  }
];

console.log(people);
