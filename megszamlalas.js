// Megszámlálás:

let tomb = [124, 111, 545, 4, 97, 99];
let szamlalo = 0;

function megszamlal (tomb) {
  for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] % 2 === 0) {
      szamlalo++;
    }
  }
  console.log('A párosak száma: ', szamlalo);
}
megszamlal(tomb);
