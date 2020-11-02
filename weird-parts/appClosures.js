function greet(whatToSay) {
  return function(name) {
    console.log(whatToSay + " " + name);
  };
}

var sayHi = greet("Hi");
sayHi("Tony");

function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }
  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {
  var arr2 = [];

  for (var i = 0; i < 3; i++) {
    arr2.push(
      (function(j) {
        return function() {
          console.log(j);
        };
      })(i)
    );
  }
  return arr2;
}

var fs2 = buildFunctions();

fs2[0]();
fs2[1]();
fs2[2]();
