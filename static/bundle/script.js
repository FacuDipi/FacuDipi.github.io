"use strict"
(() => {
  
  var e = document.querySelector("#increment"),
    t = document.querySelector("#decrement"),
    n = document.querySelector("#count-value");
  e.addEventListener("click", function () {
    var e,
      t = ((e = parseFloat(n.innerText)), ++e);
    n.innerText = t.toString();
  }),
    null == t ||
      t.addEventListener("click", function () {
        var e,
          t = ((e = parseFloat(n.innerText)), --e);
        n.innerText = t.toString();
      });
})();
