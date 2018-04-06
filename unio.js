// Unió:

let object1 = [1, 2, 3, 4, 5];
let object2 = [4, 5, 6, 7, 8];
let union = [];
let k = 0;

for (let i = 0; i < object1.length; i++) {
  union[k] = object1[i];
  k++;
}

k = object1.length;

for (let j = 0; j < object2.length; j++) {
  let i = 0;
  while (i < union.length && object2[j] !== object1[i]) {
    i++;
  }
  if (i >= object1.length) {
    union[k] = object2[j];
    k++;
  }
}

console.log(union);
