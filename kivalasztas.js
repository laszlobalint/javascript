// Kiválasztás:

let elemek = [64, 46, 2, 879, 5, 7, 99];
let ker = 5;
let i = 0;
while (i < elemek.length && elemek[i] !== ker) {
  i++;
}
if (i < elemek.length) {
  console.log('Van ilyen érték, ami a/az", i+1,". elem.');
} else { 
  console.log('Nincs ilyen érték.');
}
