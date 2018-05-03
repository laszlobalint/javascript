var zoliE = 0;
var belaE = 0;

function print (e) {
  console.log(e);
}

function increment (e, num) {
  return e + num;
}

function decline (e, num) {
  return e - num;
}

zoliE = increment(zoliE, 123);
zoliE = decline(zoliE, 10);
belaE = increment(belaE, 1000);
belaE = decline(belaE, 200);

print(zoliE);
print(belaE);

function pay (e1, e2, num) {
  let res1 = increment(e1, num);
  let res2 = decline(e2, num);
  return [res1, res2];
}

let result = pay(zoliE, belaE, 100);
zoliE = result[0];
belaE = result[1];

console.log('Zoli"s balance after clearing the dues: ', zoliE);
console.log('Bela"s balance after clearing the dues ', belaE);
