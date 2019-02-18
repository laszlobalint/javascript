var array = [
  1,
  false,
  {
    name: "Thomas",
    address: "123 Baker Street"
  },
  function(name) {
    var greeting = "Hello ";
    console.log(greeting + name);
  },
  "Hi"
];

console.log(array);
array[3](arr[2].name);
