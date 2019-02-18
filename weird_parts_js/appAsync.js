// Long running function
function waitThreeSeconds() {
  var ms = new Date().getTime() + 3000;
  while (new Date() < ms) {}
  console.log("Finished function!");
}

// Click event function
function clickHandler() {
  console.log("Click event!");
}

// Listen for the click event
document.addEventListener("click", clickHandler);

waitThreeSeconds();
console.log("Finished execution!");
