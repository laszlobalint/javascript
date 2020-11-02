// 1. feladat:

function operations (a, b, opt) {
  switch (opt) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      break;
  }
}

console.log(operations(3, 4, '+'));
console.log(operations(10, 5, '-'));
console.log(operations(6, 3, '/'));
console.log(operations(4, 5, '*'));

// 2. feladat:

const eq = '==';
const notEq = '!=';
const bigger = '>';
const less = '<';

function cond (a, b, cond) {
  switch (cond) {
    case eq:
      return a === b;
    case notEq:
      return a !== b;
    case bigger:
      return a > b;
    case less:
      return a < b;
  }
}
console.log(cond(4, 2, '=='));
console.log(cond(5, 6, '!='));
console.log(cond(6, 6, '=='));
console.log(cond(8, 8, '!='));
console.log(cond(9, 5, '>'));
console.log(cond(9, 5, '<'));

// 3. feladat:

let aArray = [3, 5, 6, 7];
let bArray = [6, 2, 4, 9];

function results (aArray, bArray, opt) {
  var result = [];
  for (let i = 0; i < aArray.length; i++) {
    switch (opt) {
      case '+':
        result.push(aArray[i] + bArray[i]);
        break;
      case '-':
        result.push(aArray[i] - bArray[i]);
        break;
      case '/':
        result.push(aArray[i] / bArray[i]);
        break;
      case '*':
        result.push(aArray[i] * bArray[i]);
        break;
      default:
        break;
    }
  }
  return result;
}

console.log(results(aArray, bArray, '+'));
console.log(results(aArray, bArray, '-'));
console.log(results(aArray, bArray, '/'));
console.log(results(aArray, bArray, '*'));
