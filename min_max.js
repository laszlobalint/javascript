let array = [4, 66, 23, 666, 1234, 2, 76];
let max = array[0];
let min = array[0];
let i = 0;

for (i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

for (i = 0; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}

console.log('Highest value in the array: ', max);
console.log('Lowest value in the array: ', min);
