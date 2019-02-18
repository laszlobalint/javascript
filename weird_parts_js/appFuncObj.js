greet();

function greet() {
  console.log("Hello!");
}

var anonymGreet = function() {
  console.log("Hello!");
};

anonymGreet();

function log(a) {
  a();
}

log(function() {
  console.log("Hi!");
});
