// Másolás:

function copy (fromHereArray) {
  let toHereArray = [];
  for (let i = 0; i < fromHereArray.length; i++) {
    toHereArray[i] = fromHereArray[i] * 2;
  }
  return toHereArray;
}
let fromHereArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = copy(fromHereArray);
console.log(result);
