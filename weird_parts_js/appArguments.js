function greeting(firstName, lastName, language) {
  language = language || "en";

  if (arguments.length === 0) {
    console.log("Missing parameters...");
    return;
  }

  console.log(firstName);
  console.log(lastName);
  console.log(language);
  console.log(arguments);
  console.log("------------------");
}

greet();
greet("John");
greet("John", "Dawn", "english");
