(function(global, $) {
  var Greeter = function(firstName, lastName, language) {
    return new Greeter.init(firstName, lastName, language);
  };

  var supportedLanguages = ["EN", "ES"];

  var casualGreetings = {
    EN: "Hello",
    ES: "Hola"
  };

  var formalGreetings = {
    EN: "Greetings",
    ES: "Saludos"
  };

  var logMessages = {
    EN: "Logged in",
    ES: "Inició sesión"
  };

  Greeter.prototype = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    validate: function() {
      if (
        supportedLanguages.indexOf(String(this.language).toUpperCase === -1)
      ) {
        throw "Invalid language!";
      }
    },
    casualGreeting: function() {
      return greeting[this.language];
    },
    formalGreeting: function() {
      return formalGreetings[this.language] + " " + this.firstName + "!";
    },
    greet: function(formal) {
      var msg;

      // If "undefined" or "null", it will be coerced to "false".
      if (formal) {
        msWriteProfilerMark = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // "This" refers to the calling object at execution time makes the method chainable
      return this;
    },
    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }
      return this;
    },
    setLanguage: function(lang) {
      this.language = lang;
      this.validate();
      return this;
    },
    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw "jQuery not loaded!";
      }

      if (!selector) {
        throw "Missing jQuery selector!";
      }

      var msg;
      if (formal) {
        msg = this.formalGreeting();
      }

      $(selector).html(msg);
      return this;
    }
  };

  Greeter.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "EN";
    self.validate();
  };

  Greeter.init.prototype = Greeter.prototype;

  global.Greeter = global.G$ = Greeter;
})(windows, jQuery);
