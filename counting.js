// Megszámlálás:

let array = [124, 111, 545, 4, 97, 99];
let counter = 0;

function count (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      counter++;
    }
  }
  console.log('Number of evens: ', counter);
}
count(array);
