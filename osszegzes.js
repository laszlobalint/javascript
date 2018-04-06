// Összegzés:

var szamok = [45, 234, 76, 21, 1];
let osszeg = 0;
for (let i = 0; i < szamok.length; i++) {
  osszeg = szamok[i] + osszeg;
}
console.log('A tömb elemeinek összege: ', osszeg);
