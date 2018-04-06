var laptop = ['Dell', 'Lenovo', 'IBM', 'Asus'];
var jellemzo = ['Processzor', 'Memória', 'Merevlemez', 'Videókártya'];

let i = 0;
while (i < laptop.length) {
  console.log(laptop[i]);
  i++;
  let j = 0;
  do {
    console.log('- ', jellemzo[j]);
    j++;
  }
  while (j < jellemzo.length) {
  }
}
