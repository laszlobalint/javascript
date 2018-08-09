window.onload = function() {

  // VanilaJS method - AJAX
  var http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      console.log(JSON.parse(http.response));
    }
  };

  http.open("GET", "data/tweets.json", true); // True - async ; False - sync
  http.send();

  // JQuery method
  $.get("data/tweets.json", function(data) {
    console.log(data);
  });

  // Callback function

  function callBack(val) {
    console.log(val);
  }
  var fruits = ["banana", "apple", "pear"];
  fruits.forEach(callBack);
    console.log("Done");


  function cb(data) {
    console.log(data);
  }

  $.get("data/tweets.json", cb);
  console.log("Test view");


// Callback hell!
  $.ajax({
    type: "GET",
    url: "data/tweets.json",
    success: function(data) {
      console.log(data);
    
      $.ajax({
        type: "GET",
        url: "data/friends.json",
        success: function(data) {
          console.log(data);
        
          $.ajax({
            type: "GET",
            url: "data/videos.json",
            success: function(data) {
              console.log(data);
            },

            error: function(jqXHR, textStatus, error) {
              console.log(error);
            }
        });
      },
        error: function(jqXHR, textStatus, error) {
          console.log(error);
        }
    });
  },
    error: function(jqXHR, textStatus, error) {
      console.log(error);
    }
  });

// Solving callback hell

function handleError(jqXHR, textStatus, error) {
  console.log(error);
}

$.ajax({
  type: "GET",
  url: "data/tweets.json",
  success: cbTweets,
  error: handleError
});

function cbTweets(data) {
  console.log(data);
  
    $.ajax({
      type: "GET",
      url: "data/friends.json",
      success: cbFriends,
      error: handleError
  });
}

function cbFriends(data) {
    console.log(data);
  
    $.ajax({
      type: "GET",
      url: "data/videos.json",
      success: function(data) {
        console.log(data);
      },
      error: handleError
  });
}

// Promises - Pure version
  function get(url) {
    return new Promise(function(resolve, reject) {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", url, true);
      xhttp.onload = function() {
        if (xhttp.status == 200) {
          resolve(JSON.parse(xhttp.response));
        } else {
          reject(xhttp.statusText);
        }
      };
      xhttp.onerror = function() {
        reject(xhttp.statusText);
      };
      xhttp.end();
    });
  }

  var promise = get("data/tweets.json");
  promise.then(function(tweets) {
    console.log(tweets);
    return get("data/friends.json");
  }).then(function(friends) {
    console.log(friends);
    return get("data/videos.json");
  }).then(function(videos) {
    console.log(videos);
  }).catch(function(error) {
    console.log(error);
  })


// Promises - JQuery version
  $.get("data/tweets.json").then(function(tweets) {
    console.log(tweets);
    return $.get("data/friends.json");
  }).then(function(friends) {
    console.log(friends);
    return $.get("data/videos.json");
  }).then(function(videos) {
    console.log(videos);
  });


// Generators
  genWrap(function*() {
    
    var tweets = yield $.get("data/tweets.json");
    console.log(tweets);
    var friends = yield $.get("data/friends.json");
    console.log(friends);
    var videos = yield $.get("data/videos.json");
    console.log(videos);
  });

  function genWrap(generator) {
    
    var gen = generator();

    function handle(yielded) {
      if (!yielded.done) {
        yielded.value.then(function(data) {
          return handle(gen.next(data));
        })
      }
    }
    return handle(gen.next());
  }

};
