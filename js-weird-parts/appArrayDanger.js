Array.prototype.addedShouting = "Whoooa!";

// Iterates through all the items, including the custom added one!
for (var prop in arr) {
  console.log(prop + ": " + arr[prop]);
}
