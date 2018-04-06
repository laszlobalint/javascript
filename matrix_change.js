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

function matrixChange (tomb, i, j, char) {
  tomb[i][j] = char;
  return tomb;
}

function print (tomb) {
  for (let i = 0; i < tomb.length; i++) {
    var row = '';
    for (let j = 0; j < tomb[i].length; j++) {
      row += tomb[i][j] + ' ';
    }
    console.log(row);
  }
}

var tomb = matrixGenerate(10, 10, ' ');
matrixChange(tomb, 9, 5, '_');
matrixChange(tomb, 9, 4, 'L');
matrixChange(tomb, 9, 6, '/');
matrixChange(tomb, 8, 3, 'L');
matrixChange(tomb, 8, 7, '/');
matrixChange(tomb, 7, 2, '|');
matrixChange(tomb, 7, 8, '|');
matrixChange(tomb, 6, 3, 'L');
matrixChange(tomb, 6, 7, '/');
matrixChange(tomb, 5, 6, 'L');
matrixChange(tomb, 5, 4, '/');
matrixChange(tomb, 4, 5, '_');
matrixChange(tomb, 4, 4, ' ');
matrixChange(tomb, 3, 5, '|');
matrixChange(tomb, 2, 4, '*');
matrixChange(tomb, 2, 3, '*');
matrixChange(tomb, 1, 4, '*');
matrixChange(tomb, 1, 3, '*');
print(tomb);
