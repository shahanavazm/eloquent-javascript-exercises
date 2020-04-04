/*
Eloquent javascript exercise. Chapter 3. isEven.
Here’s another way to define whether a positive whole number is even or odd:

    Zero is even.

    One is odd.

    For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
*/

(function anonymous() {
  "use strict";

  function isEven(n) {
    const m = Math.abs(n);
    if (m === 0) {
      return true;
    }
    if (m === 1) {
      return false;
    }
    return isEven(m - 2);
  }

  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-5));
})();
