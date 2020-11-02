const readlineSync = require('readline-sync');
const tableBorder = require('table').table;

let table = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
let table2 = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']];

function movearound (table, x, y) {
  let i = 0;
  while (i < 2) {
    let steps = ['Up', 'Down', 'Right', 'Left'];
    var step = readlineSync.keyInSelect(steps, 'Choose a direction!');
    switch (step) {
      case 0:
        x = x - 1;
        i++;
        if (x < 0) {
          console.log('X');
        } else {
          console.log(table[x][y]);
          table[x][y] = '!X!';
        }
        break;
      case 1:
        x = x + 1;
        i++;
        if (x > table.length) {
          console.log('X');
        } else {
          console.log(table[x][y]);
          table[x][y] = '!X!';
        }
        break;
      case 2:
        y = y + 1;
        i++;
        if (y > (table.length - 1)) {
          console.log('X');
        } else {
          console.log(table[x][y]);
          table[x][y] = '!X!';
        }
        break;
      case 3:
        y = y - 1;
        i++;
        if (y < 0) {
          console.log('X');
        } else {
          console.log(table[x][y]);
          table[x][y] = '!X!';
        }
        break;
      default:
        break;
    }
    console.log(tableBorder(table));
  }
}

console.clear();

console.log(tableBorder(table));
movearound(table, 1, 1);

console.log(tableBorder(table2));
movearound(table2, 1, 1);
