// Minimum kiválasztásos rendezés:

let array = [34, 11, 55, 1, 200, 10];

for (let i = 0; i < array.length; i++) {
  let min = i;
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] < array[min]) {
      min = j;
    }
  }
  if (min !== i) {
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
}
console.log(array);
