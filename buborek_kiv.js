// Buborékos rendezés:

let array = [34, 11, 55, 1, 200, 10];
let n = array.length;

for (let i = n - 1; i >= 0; i--) {
  for (let j = 0; j < i; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array);
