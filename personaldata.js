var kenderesi = ['Kenderesi Milós', 'Szeged', '1956.01.13.', '162-534-624'];
var pataki = ['Pataki Zsófia', 'Palics', '1932.03.23.', '122-534-624'];
var kerpenizsan = ['Kerpenizsán Attila', 'Belgrade', '1977.02.03.', '172-534-624'];

function getName (array) {
  return array[0];
}

function getDateOfBirth (array) {
  return array[1] + ', ' + array[2];
}

function getSSN (array) {
  return array[3];
}

function write (array) {
  console.log(getName(array));
  console.log(getDateOfBirth(array));
  console.log(getSSN(array));
}

write(kenderesi);
write(pataki);
write(kerpenizsan);
