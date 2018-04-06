// Szétválogatás:

function szetvalogatas (tomb) {
  let i = 0;
  let j = 0;
  let k = 0;
  let pozitivTomb = [];
  let negativTomb = [];
  for (i; i < tomb.length; i++) {
    if (tomb[i] >= 0) {
      pozitivTomb[j] = tomb[i];
      j++;
    } else {
      negativTomb[k] = tomb[i];
      k++;
    }
  }
  return {pozitivak: pozitivTomb, negativak: negativTomb};
}
let tomb = [-5, 6, -24, 66, 456, -2568];
console.log(szetvalogatas(tomb));
