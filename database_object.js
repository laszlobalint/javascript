/* /* /* // 1. feladat:

function operations (a, b, opt) {
  switch (opt) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      break;
  }
}

console.log(operations(3, 4, '+'));
console.log(operations(10, 5, '-'));
console.log(operations(6, 3, '/'));
console.log(operations(4, 5, '*'));

// 2. feladat:

const eq = '==';
const notEq = '!=';
const bigger = '>';
const less = '<';

function cond (a, b, cond) {
  switch (cond) {
    case eq:
      return a === b;
    case notEq:
      return a !== b;
    case bigger:
      return a > b;
    case less:
      return a < b;
  }
}
console.log(cond(4, 2, '=='));
console.log(cond(5, 6, '!='));
console.log(cond(6, 6, '=='));
console.log(cond(8, 8, '!='));
console.log(cond(9, 5, '>'));
console.log(cond(9, 5, '<')); */

// 3. feladat:
/* 
let aArray = [3, 5, 6, 7];
let bArray = [6, 2, 4, 9];

function results (aArray, bArray, opt) {
  var result = [];
  for (let i = 0; i < aArray.length; i++) {
    switch (opt) {
      case '+':
        result.push(aArray[i] + bArray[i]);
        break;
      case '-':
        result.push(aArray[i] - bArray[i]);
        break;
      case '/':
        result.push(aArray[i] / bArray[i]);
        break;
      case '*':
        result.push(aArray[i] * bArray[i]);
        break;
      default:
        break;
    }
  }
  return result;
}

console.log(results(aArray, bArray, '+'));
console.log(results(aArray, bArray, '-'));
console.log(results(aArray, bArray, '/'));
console.log(results(aArray, bArray, '*')); */

// 4. feladat:

const readlineSync = require('readline-sync');
const fs = require('fs');
var existsFile = require('exists-file');
let database = {};
let value;
let i = 0;

function data (tableName, key, value) {
  let menupoints = ['Create a new table', 'Find a data by key', 'Type new data into your table', 'Delete a table by key', 'Delete a table by value'];
  var menupoint = readlineSync.keyInSelect(menupoints, 'Please, choose what you want to do:');

  switch (menupoint) {
    case 0:
      var giveTable = readlineSync.question('Type a name for your new table!');
      createTable(giveTable);
      data();
      break;
    case 1:
      var findTable = readlineSync.keyInSelect(tableName, 'Choose from an existing table!');
      let findKey = readlineSync.question('Type a key to find the right data! ');
      console.log(get(findTable, findKey));
      data();
      break;
    case 2:
      let newTable = readlineSync.question('Give a table name!');
      let newKey = readlineSync.question('Give a key to your table!');
      let newValue = readlineSync.question('Give a value to your key!');
      put(newTable, newKey, newValue);
      data();
      break;
    default:
      console.log(database);
      break;
  }
}

/* function menu () {
  let menupoint = ['Save new datas', 'Delete an existing data'];
  let menupoints = readlineSync.keyInSelect(menupoint, 'What do you want to do?');

  switch (menupoints) {
    case 0:
      let newName = readlineSync.question('The name of the new table: ');
      let newKey = readlineSync.question('The key of the new table: ');
      let newValue = readlineSync.question('The value of the new table: ');
      put(newName, newKey, newValue);
      break;
    case 1:
      let deleteName = readlineSync.question('From which table you want to delete? ');
      let deleteKey = readlineSync.question('Which key do you want to delete? ');
      deleteByKey(deleteName, deleteKey);
      break;
    default:
      break;
  }
} */

function createTable (tableName) {
  database[tableName] = {};
}

function get (tableName, key) {
  database[tableName][key] = value;
  return value;
}

function put (tableName, key, value) {
  database[tableName][key] = value;
}

function saveTables () {
  fs.writeFileSync('database.json', JSON.stringify(database), 'utf-8');
}

function loadTables () {
  if (!existsFile.sync('database.json')) {
    fs.writeFileSync('database.json', '{}');
  }
  database = JSON.parse(fs.readFileSync('database.json', 'utf-8'));
}

function deleteByKey (tableName, key) {
  delete database[tableName];
}

function deleteByValue (tableName, value) {
  for (i in database[tableName]) {
    if (database[tableName][i] === value) {
      delete database[tableName];
    }
  }
}

createTable('Bálint');
createTable('Róbert');
createTable('Hedvig');
createTable('Paulina');
put('Bálint', 'szemszín', 'barna');
put('Róbert', 'kezek', 2);
put('Hedvig', 'szemszín', 'kék');
put('Hedvig', 'kezek', 3);
put('Paulina', 'intelligencia', 120);
put('Paulina', 'hajszín', 'vörös');
menu();
console.log(database);
