var variable = 'variable value';
// any
variable = 3;
// integer
variable = 4.5;
// float
variable = true;
// boolean
variable = [1, 2, 'dog', 'cat', true, false, 2.3];
// array
var arrayHossza = variable.length;

// object
variable = {
  key: 'value',
  one: 1,
  two: 2,
  three: 3
};

var typeOfVariable = typeof variable;

console.log(variable);
console.log(variable.ketto);
console.log(variable['ketto']);
console.log(variable[3]);
console.log(arrayHossza);
console.log(typeOfVariable);

if (3 > 2) {
  console.log('This is true.');
} else {
  console.log('This is false.');
}

var a = 2;
var b = 3;

if (a < b) {
  console.log('A kisebb, mint B');
} else if (a === b) {
  console.log('A egyenlő B-vel');
} else {
  console.log('A nagyobb, mint B');
}

// BETA 2
var a = 4;
switch (a) {
  case 2:
    console.log('Ez kettő.');
    break;
  case 4:
    console.log('Ez négy.');
    break;
  default:
    console.log('Ez egyik sem, mert ez', a);
}

// for

var array = ['a', 8, 13, 77, 80, 89];

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// function (alapvető egység egy fájlon belül)

function firstFunction (z, u) {
  var t = z + u;
  console.log('Lefut a Functionom, ez a z meg az u eredménye:', t);
}
console.log('Itt van a def és a meghívás között.');
firstFunction(2, 3);
firstFunction(4, 5);
firstFunction(7, 8);

function difference (mibol, mit) {
  return mibol - mit;
}
var asd = 15;
console.log(difference(asd, 5));
var megegy = 3 + difference(asd, 5);
console.log(megegy);

// feladatok 1.

// 1. Hozz létre minden datatype-ból egy-egy változót és írasd ki a console.log segítségével az öszeset egy sorba.

valtozoString = 'szavacska';
valtozoNumber = 67;
valtozoObject = { ez: 'fgh', az: 34, emez: 444 };
valtozoArray = ['x', 'w', 'z', 'y'];
valtozoBoolean = false;
console.log(valtozoString, valtozoNumber, valtozoObject, valtozoArray, valtozoBoolean);

// 2. Hozz létre egy tömböt, amiben kutya fajták vannak.

var kutyak = ['labrador', 'tacsko', 'nemetjuhasz', 'spaniel'];

// 3. Járd be a tömböt for ciklus segítségével és irasd ki a console.log-gal.

for (var i = 0; i < kutyak.length; i++) {
  console.log(kutyak[i]);
}

// 4. A kedvenc kutyafajtádnál a fajta után írjon egy ":)" -t, így pl. "boxer :)"!

var fav = 'nemetjuhasz';
for (var i = 0; i < kutyak.length; i++) {
  if (kutyak[i] == fav) {
    console.log(kutyak[i] + ' :)');
  } else {
    console.log(kutyak[i]);
  }
}

// 5. Hozz létre négy függvényt: osszeadas, difference, osztas, szorzas. Mind a négynek 2db bemeneti argumentuma kell hogy legyen és egy return értéke, a művelet, amit el kell végezzen pedig értelemszerű.

function osszeadas (o, p) {
  var sum = o + p;
  console.log('Az összeadás eredménye:', sum);
}
osszeadas(5, 6);

function difference (h, j) {
  var div = h - j;
  console.log('A kivonás eredménye:', div);
}
difference(8, 3);

function osztas (v, n) {
  var sub = v / n;
  console.log('Az osztás eredménye:', sub);
}
osztas(15, 5);

function szorzas (w, e) {
  var mul = w * e;
  console.log('A szorzás eredménye:', mul);
}
szorzas(6, 7);
