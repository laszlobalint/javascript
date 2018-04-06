// Metszet:

let i = 0;
let j;
let k = 0;
let block1 = [235, 123, 67, 1, 2, 88];
let block2 = [75, 16, 75, 7, 88, 2, 111];
let sameElements = [];

for (i = 0; i < block1.length; i++) {
  j = 0;
  while (j < block2.length && block2[j] !== block1[i]) {
    j++;
  }
  if (j < block2.length) {
    sameElements[k] = block1[i];
    k++;
  }
}
console.log(sameElements);
