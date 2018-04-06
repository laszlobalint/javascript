var zoliE = 0;
var belaE = 0;

function print (e) {
  console.log(e);
}

function novekedes (e, num) {
  return e + num;
}

function csokkenes (e, num) {
  return e - num;
}

zoliE = novekedes(zoliE, 123);
zoliE = csokkenes(zoliE, 10);
belaE = novekedes(belaE, 1000);
belaE = csokkenes(belaE, 200);

print(zoliE);
print(belaE);

function pay (e1, e2, num) {
  let res1 = novekedes(e1, num);
  let res2 = csokkenes(e2, num);
  return [res1, res2];
}

let result = pay(zoliE, belaE, 100);
zoliE = result[0];
belaE = result[1];

console.log('Zoli tartozásrendezés utáni egyenlege: ', zoliE);
console.log('Béla tartozásrendezés utáni egyenlege: ', belaE);
