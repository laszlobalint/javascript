function sayHiLater() {
  var greeting = "Hi!";

  setTimeout(function() {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

$("button").click(function() {
  // First class function comes up here.
});

function tellMeDoneStatus(callFunc) {
  var a = 1000; 
  var b = 2000;
  callFunc();
}

tellMeDoneStatus(function() {
  alert("Done executing.");
});

tellMeDoneStatus(function() {
  alert("Finished everything to run.");
});
