const exportImport1 = require('./exportImport1');

function formula (a, b, c) {
  return exportImport1.sum(a, b) / exportImport1.dif(b, c);
}

console.log(formula(4, 5, 8));

let a = 1;
let b = 2;
let simpleObject = {a, b};
console.log(simpleObject);
