// Kiválogatás kettővel oszthatóak:

function sorting (fromHereArray) {
  let i = 0;
  let j = 0;
  let toHereArray = [];
  for (i; i < fromHereArray.length; i++) {
    if ((fromHereArray[i] % 2) === 0) {
      toHereArray[j] = fromHereArray[i];
      j += 1;
    }
  }
  return toHereArray;
}
let fromHereArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sorting(fromHereArray));
