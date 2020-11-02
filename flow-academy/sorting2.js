// Szétválogatás:

function sorting (array) {
  let i = 0;
  let j = 0;
  let k = 0;
  let positiveArray = [];
  let negativeArray = [];
  for (i; i < array.length; i++) {
    if (array[i] >= 0) {
      positiveArray[j] = array[i];
      j++;
    } else {
      negativeArray[k] = array[i];
      k++;
    }
  }
  return {positives: positiveArray, negatives: negativeArray};
}
let array = [-5, 6, -24, 66, 456, -2568];
console.log(sorting(array));
