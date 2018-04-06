// Eldöntés:

let elemek = [64, 46, 2, 879, 5, 7, 99];
let ker = 5;
let i = 0;
while (i < elemek.length && elemek[i] !== ker) {
  i++;
}
if (i < elemek.length) {
  console.log('Van ilyen érték.');
} else {
  console.log('Nincs ilyen érték.');
}

/* Beépített metódussal

if (elemek.includes(ker)) {
    console.log("Van ilyen érték.")
} else console.log("Nincs ilyen érték.")

*/
