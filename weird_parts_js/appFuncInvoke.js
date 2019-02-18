// Function statement
function greet(name) {
  console.log("Hello " + name);
}
greet("Johhny");

// Using a function expression
var greetFunc = function(name) {
  console.log("Hello " + name);
};
greetFunc("Johhny");

// Using an immediately invoked function expression (IIFE)
var greeting = (function(name) {
  return "Hello " + name;
})("Johhny");
console.log(greeting);

// Placing anonymous function to code --- IIFE
var firstName = "John";
var hello = "Hello";

(function(global, name) {
  var gr = "Hello ";
  global.hello = "Hola";
  return gr + name;
})(firstName);
