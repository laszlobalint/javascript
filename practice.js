function equation (a, b, c, d) {
  return (a + b - c) / d;
}
console.log(equation(4, 5, 6, 7));
console.log(equation(6, 3, 8, 9));
console.log(equation(1, 10, 4, 9));
console.log(equation(11, 7, 3, 2));
console.log(equation(30, 24, 15, 6));

function ageOfPerson (firstName, lastName, age) {
  return firstName + ' ' + lastName + ' most ' + age + ' éves.';
}
console.log(ageOfPerson('Barna', 'Rojik', 24));
console.log(ageOfPerson('Bálint', 'László', 31));
console.log(ageOfPerson('Ferenc', 'Fábián', 11));
console.log(ageOfPerson('Nintendo', 'Lakatos', 15));
console.log(ageOfPerson('Jolika', 'Krilda', 54));

function counter (n, num) {
  for (let i = n; i < n + num; i++) {
    console.log(i);
  }
}
counter(10, 5);
counter(30, 7);

function counting (n, num) {
  let i = n;
  while (i < n + num) {
    console.log(i);
    i++;
  }
}
counting(10, 5);

function count (n, num) {
  let i = n;
  do {
    console.log(i);
    i++;
  }
  while (i < n + num);
}

count(7, 5);

let matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix2 = [[2, 3], [4, 5]];

function matrixDo (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    var row = '';
    for (let j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j] + ' ';
    }
    console.log(row);
  }
}
matrixDo(matrix1);
matrixDo(matrix2);

var tomb = ['potato', 'sheep', 'pleasure', 'elections'];

function writeInOrder (tomb) {
  var row = '';
  for (let i = 0; i < tomb.length; i++) {
    row += tomb[i] + ' ';
  }
  console.log(row);
}
writeInOrder(tomb);
