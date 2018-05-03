// Kiválasztás:

let elements = [64, 46, 2, 879, 5, 7, 99];
let searched = 5;
let i = 0;
while (i < elements.length && elements[i] !== searched) {
  i++;
}
if (i < elements.length) {
  console.log(`Value exists and it is ${i + 1}. in the array.`);
} else {
  console.log('No such value.');
}
