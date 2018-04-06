class Dog {
  constructor (bemenet1, bemenet2, bemenet3) {
    this.fajtaProperty = bemenet1;
    this.kor = bemenet2;
    this.nem = bemenet3;
  }

  getBreed () {
    return this.fajtaProperty;
  }

  varhatoEletkor () {
    if (this.nem === 1) {
      return 50 - this.kor;
    } else {
      return 100 - this.kor;
    }
  }

  harmadikMetodus (bemenetAMethodusnak) {
    console.log(bemenetAMethodusnak);
  }
}

var peldany = new Dog('boxer', 20, 2);
console.log(peldany.getBreed());
console.log(peldany.varhatoEletkor());
console.log(peldany.harmadikMetodus('ilyet is tudok csinálni'));

var peldany2 = new Dog('puli', 15, 1);
console.log(peldany2.getBreed());
console.log(peldany2.varhatoEletkor());
console.log(peldany2.harmadikMetodus('ez nem semmi'));
