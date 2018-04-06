function prime (number) {
  var isPrime = 'prime';
  for (var i = 2; i < number / 2; i++) {
    if (number % i === 0) {
      isPrime = 'notPrime';
        }
    }
    if (isPrime == 'prime') {
        return 'prime';
    }
    return 'notPrime'
}

for (var j=1; j<=100; j++) {
    if(prime(j) == 'prime') {
        console.log(j);
    }
}