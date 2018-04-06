let tomb = [4, 66, 23, 666, 1234, 2, 76];
let max = tomb[0];
let min = tomb[0];
let i = 0;

for (i = 0; i < tomb.length; i++) {
  if (tomb[i] > max) {
    max = tomb[i];
  }
}

for (i = 0; i < tomb.length; i++) {
  if (tomb[i] < min) {
    min = tomb[i];
  }
}

console.log('A tömb legnagyobb értéke: ', max);
console.log('A tömb legkisebb értéke: ', min);
