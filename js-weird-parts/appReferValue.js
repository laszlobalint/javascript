// Primitive types -> By value
var a;
var b = 3;
b = a;
a = 2;

console.log(a);
console.log(b);

// Object types -> By reference
var c = { greeting: "Hi" };
var d;

d = c;
c.greeting = "Hello";

// Object-function type -> even as parameters
function changeGreeting(obj) {
  obj.greeting = "Hola";
}

changeGreeting();
console.log(c);
console.log(d);

// Equals operator sets up new memory address
c = { greeting: "Szia" };
console.log(c);
console.log(d);
