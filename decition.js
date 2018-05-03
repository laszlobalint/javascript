// Eldöntés:

let elements = [64, 46, 2, 879, 5, 7, 99];
let search = 5;
let i = 0;
while (i < elements.length && elements[i] !== search) {
  i++;
}
if (i < elements.length) {
  console.log('Value exists.');
} else {
  console.log('Value does not exist.');
}

/* Beépített metódussal

if (elements.includes(ker)) {
    console.log("Value exists.")
} else console.log("Value does not exist.")

*/
