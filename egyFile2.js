const egyFile = require('./egyFile');

function egyenlet (a, b, c) {
  return egyFile.osszeadas(a, b) / egyFile.kivonas(b, c);
}

console.log(egyenlet(4, 5, 8));

let a = 1;
let b = 2;
let simpleObject = {a, b};
console.log(simpleObject);
