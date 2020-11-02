window.onload = function() {

// CONSTANTS
  const pi = 3.142;

  function calcArea(r) {
    const pi = 10;
    console.log("The area is: " + pi * r * r);
  }

  console.log(pi);
  calcArea(5);

// LET KEYWORD
  var x = 10;
  if (x > 5) {
    let x = 5;
    console.log("Inside: " + x);
  }
  console.log("Outside: " + x);

  var items = document.getElementsByTagName("li");
  for (let x = 0; x < items.length; x++) {
    items[x].onclick = function() {
      console.log(x);
    }
  }

// DEFAULT PARAMETERS
  function log(num = 10) {
    console.log(num);
  }
  log();
  log(5);  

  function logNinja(name="Ryu", belt="red", age=25) {
    console.log("My name is: " + name +
              " and my bel colour is " + belt +
              " and my age is " + age + ". ");
  }
  logNinja();
  logNinja("Peter", "yellow", 42);

// SPREAD OPERATOR
  let meats = ["ham", "salami", "bacon"];
  console.log(...meats);

  let nums1 = [1, 2, 3];
  let num2 = [...nums1, 4, 5, 6];
  console.log(num2); 

  let nums = [3, 5, 7];
  function addNums(a, b, c) {
    console.log(a + b + c);
  }
  addNums(...nums);

// TEMPLATE STRINGS
  let temp1 = `Hello, 
        my name Balint`;
  console.log(temp1);

  function logWarrior(name, age) {
    console.log("My name is " + name + " and my age is " + age + ". ");
    console.log(`My name is ${name} and my age is ${10 + 21}.`);
  }
  logWarrior("Trabahar", 31);

// OBJECT LITERAL ENHANCEMENTS
  let name = "Crystal";
  let belt = "Black";
  let ninja = {
    name, belt,
    chop(x) {
      console.log(`You chopped the enemy ${x} times.`);
    }
  };
  console.log(ninja.belt);
  console.log(ninja.chop(5));

// NEW STRING METHODS
  let str = "graaaaaavy ";
  
  console.log(str.repeat(5));
  console.log(str.startsWith("gra"));
  console.log(str.startsWith("ra", 1));
  console.log(str.endsWith("y "));
  console.log(str.endsWith("y ", str.length - 3));
  
  var youSay = "goodbye";
  if (youSay.startsWith("goodbye")) {
    var iSay = "hello";
  }
  console.log(`You say ${youSay}, I say ${iSay}. `);

  var test = "My name is Balint.";
  console.log(test.includes("name"));

// ARROW FUNCTIONS
  var greeting = (name) => console.log(`${name} says heyya!`);
  greeting("Balint");

  var hero = {
    heroName: "Thomas",
    chop(x) {
      window.setInterval(() => {
        if (x > 0) {
          console.log(this.heroName + " chopped the enemy");
          x--;
        }
      }, 1000);
    }
  };

  hero.chop(5);

// SETS
  var nameSet = new Set();
  nameSet.add("Peter").add("Crystal").add("Barna").add("Peter");
  console.log(nameSet.delete("Barna"));
  console.log(nameSet);
  console.log(nameSet.size);
  console.log(nameSet.has("Crystal"));
  nameSet.clear();

  var ninjasArray = ["Shaun", "Crystal", "Yoshi", "Shaun", "Yoshi"];
  var refinedNinjas = new Set(ninjasArray);
  console.log(refinedNinjas);

  ninjasArray = [...refinedNinjas];
  console.log(ninjasArray);

// GENERATORS
  function* gen1() {
    yield console.log("Pear");
    yield console.log("Apple");
    yield console.log("Peach");
    console.log("All done!");
  }
  var myGen1 = gen1();
  myGen1.next();
  myGen1.next();
  myGen1.next();  
  myGen1.next();


  function* gen2() {
    yield "Pear";
    yield "Apple";
    yield "Peach";
    return "All done!";
  }
  var myGen2 = gen2();
  console.log(myGen2.next());
  console.log(myGen2.next());
  console.log(myGen2.next());  
  console.log(myGen2.next());  


  function* gen3() {
    var x = yield "Pear";
    var y = yield "Apple";
    var z = yield "Peach";
    return x + y + z;
  }
  var myGen3 = gen3();
  console.log(myGen3.next());
  console.log(myGen3.next(10));
  console.log(myGen3.next(5));  
  console.log(myGen3.next(3));

}
