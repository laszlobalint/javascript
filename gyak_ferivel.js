function muvelet (a, b, c, d) {
  return (a + b - c) / d;
}
console.log(muvelet(4, 5, 6, 7));
console.log(muvelet(6, 3, 8, 9));
console.log(muvelet(1, 10, 4, 9));
console.log(muvelet(11, 7, 3, 2));
console.log(muvelet(30, 24, 15, 6));

function eletkor (firstName, lastName, age) {
  return firstName + ' ' + lastName + ' most ' + age + ' éves.';
}
console.log(eletkor('Barna', 'Rojik', 24));
console.log(eletkor('Bálint', 'László', 31));
console.log(eletkor('Ferenc', 'Fábián', 11));
console.log(eletkor('Nintendo', 'Lakatos', 15));
console.log(eletkor('Jolika', 'Krilda', 54));

function szamlalo (n, num) {
  for (i = n; i < n + num; i++) {
    console.log(i);
  }
}
szamlalo(10, 5);
szamlalo(30, 7);

function szamlalas (n, num) {
  i=n;
  while (i<n+num) {
    console.log(i);
    i++;
  }
}
szamlalas(10, 5);

function szamlalunk (n, num) {
  i=n;
  do {
    console.log(i);
    i++;
  }
  while (i < n + num);
}

szamlalunk(7, 5);

let matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix2 = [[2, 3], [4, 5]];

function matrixozas (matrix) {
  for (i=0; i < matrix.length; i++) {
    var row = '';
    for (j=0; j < matrix[i].length; j++) {
      row += matrix[i][j] + ' ';
    }
    console.log(row);
  }
}
matrixozas(matrix1);
matrixozas(matrix2);

var tomb = ['krumpli', 'kecske', 'elvezet', 'kanal'];

function sorbairas (tomb) {
  var row = '';
  for (i=0; i < tomb.length; i++) {
    row += tomb[i] + ' ';
  }
  console.log(row);
}
sorbairas(tomb);
