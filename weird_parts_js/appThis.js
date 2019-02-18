console.log(this);

function a() {
  console.log(this);
  this.newVariable = "Greetings!";
}

var b = function() {
  console.log(this);
};

a();

console.log(newVariable);

b();

var c = {
  name: "The C object",
  log: function() {
    var self = this;
    self.name = "Updated C object";
    console.log(this);

    var setName = function(newName) {
      this.self = newName;
    };
    setName("Updated again!");
    console.log(this);
  }
};

c.log();
