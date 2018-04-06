var valtozonev = 'valtozo ertek';
// Felülírhatóak a változók, az utolsót logolja ki.
valtozonev = 3;
// integer
valtozonev = 4.5;
// float
valtozonev = true;
// boolean
valtozonev = [1, 2, 'kutya', 'macska', true, false, 2.3];
// array
var tombHossza = valtozonev.length;

//object
valtozonev = {
    key: 'value',
    kulcs: 'ertek',
    egy: 1,
    ketto: 2,
    harom: 3
};

valtozoTipusa = typeof valtozonev;

console.log(valtozonev);
console.log(valtozonev.ketto);
console.log(valtozonev["ketto"])
console.log(valtozonev[3]);
console.log(tombHossza);
console.log(valtozoTipusa);

if (2 < 3) {
    console.log('Ez igaz.');
} else {
    console.log('Ez hamis');
}

var a = 2;
var b = 3;

if (a < b) {
    console.log('A kisebb, mint B');
} else if (a == b) {
    console.log('A egyenlő B-vel');
}  else {
    console.log('A nagyobb, mint B');
}

// BETA 2
var a = 4;
switch(a) {
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

var tomb = ['a', 8, 13, 77, 80, 89];

for (var i=0; i < tomb.length; i++) {
    console.log(tomb[i]);
}

// function (alapvető egység egy fájlon belül)

function elsoFunction(z, u) {
    var t = z+u;
    console.log('Lefut a Functionom, ez a z meg az u eredménye:', t);
}
console.log('Itt van a def és a meghívás között.');
elsoFunction(2, 3);
elsoFunction(4, 5);
elsoFunction(7, 8);

function kivonas(mibol, mit) {
    return mibol - mit;
}
var asd = 15;
console.log(kivonas(asd, 5));
var megegy = 3 + kivonas(asd, 5);
console.log(megegy);

// feladatok 1.

// 1. Hozz létre minden datatype-ból egy-egy változót és írasd ki a console.log segítségével az öszeset egy sorba.

valtozoString = "szavacska";
valtozoNumber = 67;
valtozoObject = {ez:"fgh", az:34, emez:444};
valtozoArray = ['x', 'w', 'z', 'y'];
valtozoBoolean = false;
console.log(valtozoString, valtozoNumber, valtozoObject, valtozoArray, valtozoBoolean);

// 2. Hozz létre egy tömböt, amiben kutya fajták vannak.

var kutyak = ['labrador', 'tacsko', 'nemetjuhasz', 'spaniel'];

// 3. Járd be a tömböt for ciklus segítségével és irasd ki a console.log-gal.

for (var i=0; i < kutyak.length; i++) {
    console.log(kutyak[i]);
}

// 4. A kedvenc kutyafajtádnál a fajta után írjon egy ":)" -t, így pl. "boxer :)"!

var fav = 'nemetjuhasz'
for (var i=0; i < kutyak.length; i++) {
    if (kutyak[i] == fav ) {
    console.log(kutyak[i]+" :)")
} else {
    console.log(kutyak[i])
    }
}

// 5. Hozz létre négy függvényt: osszeadas, kivonas, osztas, szorzas. Mind a négynek 2db bemeneti argumentuma kell hogy legyen és egy return értéke, a művelet, amit el kell végezzen pedig értelemszerű.

function osszeadas(o, p) {
    var sum = o + p;
    console.log('Az összeadás eredménye:', sum)
}
osszeadas(5, 6)

function kivonas(h, j) {
    var div = h - j;
    console.log('A kivonás eredménye:', div);
}
kivonas(8, 3)

function osztas(v, n) {
    var sub = v / n;
    console.log('Az osztás eredménye:', sub);
}
osztas(15, 5)

function szorzas(w, e) {
    var mul = w * e;
    console.log('A szorzás eredménye:', mul);
}
szorzas(6, 7)