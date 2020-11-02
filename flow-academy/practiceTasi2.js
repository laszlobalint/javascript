// 5. Hozz létre négy függvényt: osszeadas, kivonas, osztas, szorzas. Mind a négynek 2db bemeneti argumentuma kell hogy legyen és egy return értéke, a művelet, amit el kell végezzen pedig értelemszerű.

var a = 4;
var b = 5;

function sum (a, b) {
  return a + b;
}
console.log('Összegük: ', sum(a, b));

function div (a, b) {
  return a - b;
}
console.log('Különbségük: ', div(a, b));

function mul (a, b) {
  return a * b;
}
console.log('Szorzatuk: ', mul(a, b));

function sub (a, b) {
  return a / b;
}
console.log('Osztatuk: ', sub(a, b));

// 6. Használd a megírt függvényeket, a visszatérési értéküket töltsd object-be, különböző kulcsok alá.

functionMy = {
  sum: sum(a, b),
  div: div(a, b),
  mul: mul(a, b),
  sub: sub(a, b)
};

// 7. Irasd ki a console.log -gal ezt az object-et.

console.log(functionMy);

// Function, return gyakorlás

function vonas (mibol, mit) {
  console.log('OK');
  let eredmeny = mibol - mit;
  if (mibol > mit) return eredmeny;
  console.log('OK2');
  return eredmeny;
}
let eredmeny = vonas(-2, 1);
console.log(eredmeny);

// Új fajta function

const kivonas = (mibol, mit) => {
  console.log('OK');
  let eredmenyUj = mibol - mit;
  if (mibol > mit) return eredmenyUj;
  console.log('OK2');
  return eredmenyUj;
};
let eredmenyUj = kivonas(-2, 2);
console.log(eredmenyUj);

// While ciklus (előtesztelős)

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// Do while (hátultesztelős)

i = 0;
do {
  i++;
  console.log(i);
} while (i <= 10);

// foreach

[0, 1, 2, 3, 4, 5].forEach((j) => {
  console.log(j);
});

// Mátrix

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[2][0]);
