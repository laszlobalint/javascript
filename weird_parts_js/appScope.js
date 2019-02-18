function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;

console.log(myVar);
a();
console.log(myVar);

function c() {
  function d() {
    console.log(yourVar);
  }
  d();
}

var yourVar = 1;
c();
