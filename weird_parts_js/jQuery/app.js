// Gets a new object
var g = G$("Balint", "Laszlo");

// User the chainable methods
g.greet()
  .setLang("ES")
  .greet(true)
  .log();

// Let's use the object on the click of the login button
$("#login").click(function() {
  // Create a new 'Greetr' object
  var loginGrtr = G$("Balint", "Laszlo");

  // Hide the login on the screen
  $("#logindiv").hide();

  // Fire off an HTML greeting, passing the selector and the chosen language, and log the welcome
  loginGrtr
    .setLang($("#lang").val())
    .HTMLGreeting("#greeting", true)
    .log();
});
