var objectLiteral = {
  firstName: "Mary",
  isProgrammer: true
};

console.log(ЈSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstName": "Mary", "isProgrammer": true }');

console.log(jsonValue);
