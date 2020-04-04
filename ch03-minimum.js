/*
Eloquent javascript exercise. Chapter 3. Minimum.
Write a function min that takes two arguments and returns their minimum.
*/

(function anonymous() {
  "use strict";

  function min(m, n) {
    return m <= n ? m : n;
  }

  console.log(min(5, 3));
  console.log(min(1, 3));
})();
