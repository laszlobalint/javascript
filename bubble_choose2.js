// Buborékos rendezés (fordított összehasonlító módon):

let array = [34, 11, 55, 1, 200, 10];
let n = array.length;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}
console.log(array);
