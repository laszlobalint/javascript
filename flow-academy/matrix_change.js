// Mátrix elemeinek változtatása:

function matrixGenerate (a, b, char) {
  var matrix = [[]];
  for (var i = 0; i < 10; i++) {
    matrix[i] = [];
    for (var j = 0; j < 10; j++) {
      matrix[i][j] = char;
    }
  }
  return matrix;
}

function matrixChange (array, i, j, char) {
  array[i][j] = char;
  return array;
}

function print (array) {
  for (let i = 0; i < array.length; i++) {
    var row = '';
    for (let j = 0; j < array[i].length; j++) {
      row += array[i][j] + ' ';
    }
    console.log(row);
  }
}

var array = matrixGenerate(10, 10, ' ');
matrixChange(array, 9, 5, '_');
matrixChange(array, 9, 4, 'L');
matrixChange(array, 9, 6, '/');
matrixChange(array, 8, 3, 'L');
matrixChange(array, 8, 7, '/');
matrixChange(array, 7, 2, '|');
matrixChange(array, 7, 8, '|');
matrixChange(array, 6, 3, 'L');
matrixChange(array, 6, 7, '/');
matrixChange(array, 5, 6, 'L');
matrixChange(array, 5, 4, '/');
matrixChange(array, 4, 5, '_');
matrixChange(array, 4, 4, ' ');
matrixChange(array, 3, 5, '|');
matrixChange(array, 2, 4, '*');
matrixChange(array, 2, 3, '*');
matrixChange(array, 1, 4, '*');
matrixChange(array, 1, 3, '*');
print(array);
