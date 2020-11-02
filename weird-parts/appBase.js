console.log(a);

var a = "Hello World!";

if (a === undefined) {
  console.log(`'a' is undefined!`);
} else {
  console.log(`'a' is defined!`);
}

function b() {
  console.log(`Called 'b'!`);
}

b();
console.log(a);
