// Összegzés:

var numbers = [45, 234, 76, 21, 1];
let summary = 0;
for (let i = 0; i < numbers.length; i++) {
  summary = numbers[i] + summary;
}
console.log('Summary of the arrays elements: ', summary);
