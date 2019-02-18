if (document.title.indexOf("Nemzeti") != -1) {
    
    function fill(num) {
      window.alert('The number is: ' + num);
    }
    
    var btn = document.createElement("BUTTON")
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);
    
    var num = document.createElement("INPUT");
    num.setAttribute("type", "number");
    num.setAttribute("value", "0");
    num.setAttribute("id", "field")
    document.body.appendChild(num);
    
    btn.addEventListener("click", function() {
      fill(document.getElementById("field").value);
    }, false);
}