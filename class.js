class Dog {
  constructor (input1, input2, input3) {
    this.breedProperty = input1;
    this.age = input2;
    this.sex = input3;
  }

  getBreed () {
    return this.breedProperty;
  }

  estimatedLifeAge () {
    if (this.sex === 1) {
      return 50 - this.age;
    } else {
      return 100 - this.age;
    }
  }

  thirdMethod (inputToMethod) {
    console.log(inputToMethod);
  }
}

var specimen = new Dog('Boxer', 20, 2);
console.log(specimen.getBreed());
console.log(specimen.estimatedLifeAge());
console.log(specimen.thirdMethod('I can do something like this'));

var specimen2 = new Dog('Puli', 15, 1);
console.log(specimen2.getBreed());
console.log(specimen2.estimatedLifeAge());
console.log(specimen2.thirdMethod('This is quite good'));
