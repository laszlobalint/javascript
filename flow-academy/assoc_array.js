let database = {};
let value;
let i = 0;

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
console.log(database);
console.clear();
