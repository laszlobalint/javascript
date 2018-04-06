var kenderesi = ['Kenderesi Milós', 'Szeged', '1956.január 13.', '162-534-624'];
var pataki = ['Pataki Zsófia', 'Palics', '1932.március 23.', '122-534-624'];
var kerpenizsan = ['Kerpenizsán Attila', 'Belgrád', '1977.február 3.', '172-534-624'];

function getNeve (tomb) {
  return tomb[0];
}

function getSzulAdatok (tomb) {
  return tomb[1] + ', ' + tomb[2];
}

function getTaj (tomb) {
  return tomb[3];
}

function write (tomb) {
  console.log(getNeve(tomb));
  console.log(getSzulAdatok(tomb));
  console.log(getTaj(tomb));
}

write(kenderesi);
write(pataki);
write(kerpenizsan);
