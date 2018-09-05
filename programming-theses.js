// Összegzés
var array1 = [1, 3, 5, 7, 9, 11];
var sum = 0;
for (let i = 0; i < array1.length; i++) {
  sum += array1[i];
}
console.log(sum);

// Megszámolás
var array2 = [1, 3, 5, 7, 9, 11];
var counter = 0;
for (let i = 0; i < array2.length; i++) {
  if (array2[i] > 6) {
    counter++;
  }
}
console.log(counter);

// Eldöntés
var array3 = [1, 3, 5, 7, 9, 11];
var seeking = 8;
var i = 0;
while (i < array3.length && array3[i] !== seeking) {
  i++;
}
if (i < array3.length) {
  console.log('Found ' + seeking);
} else {
  console.log('Did not found ' + seeking);
}

// Kiválasztás
var array4 = [1, 3, 5, 42, 9, 11];
var searched = 43;
var y = 0;
while (y < array4.length && array4[y] !== searched) {
  y++;
}
var result = y + 1;
console.log(result);

// Keresés
var array5 = [1, 3, 5, 42, 9, 11];
var searchFor = 43;
var u = 0;
while (u < array5.length && array5[y] !== searchFor) {
  u++;
}
if (u < array5.length) {
  console.log('Found the item at position ' + y + 1);
} else {
  console.log('No matching item found!');
}

// Kiválogatás
var array6 = [1, 3, 5, 42, 9, 11];
var size = array6.length;
var newArray = [];
var j = 0;
for (let i = 0; i < size; i++) {
  if (array6[i] > 6) {
    newArray[j++] = array6[i];
  }
}
for (let y = 0; y < newArray.length; y++) {
  console.log(newArray[y]);
}

// Szétválogatás
var array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultArray1 = [];
var resultArray2 = [];
var k = 0;
var n = 0;
for (let i = 0; i < array7.length; i++) {
  if (array7[i] > 5) {
    resultArray1[k++] = array7[i];
  } else {
    resultArray2[n++] = array7[i];
  }
}
for (let j = 0; j < resultArray1.length; j++) {
  console.log('Bigger numbers: ' + resultArray1[j]);
}
for (let l = 0; l < resultArray1.length; l++) {
  console.log('Smaller numbers: ' + resultArray2[l]);
}

// Minimum kiválasztás és maximum kiválasztás
var array8 = [2, 3, 4, 5, 1, 6, 7, 8, 9, 10];
var sizeArray = array8.length;
var min = array8[0];
var max = array8[0];
for (let i = 0; i < sizeArray; i++) {
  if (array8[i] < min) {
    min = array8[i];
  }
  if (array8[i] > max) {
    max = array8[i];
  }
}
console.log('Minimum number: ' + min);
console.log('Maximum number: ' + max);

// Metszet
var firstArray = [2, 3, 4, 5, 1, 10, 7, 8, 9, 6];
var secondArray = [44, 5, 13, 10, 7, 12, 14, 61];
var segment = [];
var c;
var v = 0;
for (let i = 0; i < firstArray.length; i++) {
  c = 0;
  while (c < secondArray.length && secondArray[c] !== firstArray[i]) {
    c++;
  }
  if (c < secondArray.length) {
    segment[v++] = firstArray[i];
  }
}
for (let i = 0; i < segment.length; i++) {
  console.log(segment[i]);
}
console.log('\n');

// Unió
var firstArr = [2, 3, 4, 5, 1, 10, 7, 8, 9, 6];
var secondArr = [44, 5, 13, 10, 7, 12, 14, 61];
var union = [];
for (let i = 0; i < firstArr.length; i++) {
  union[i] = firstArr[i];
}
var startSize = union.length;
for (let j = 0; j < secondArr.length; j++) {
  var m = 0;
  while (m < startSize && firstArr[m] !== secondArr[j]) {
    m++;
  }
  if (m >= startSize) {
    union[startSize++] = secondArr[j];
  }
}
for (let k = 0; k < union.length; k++) {
  console.log(union[k]);
}
