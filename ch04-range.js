/*
Eloquent javascript exercise. Chapter 4. range function.
*/

(function anonymous() {
  "use strict";

  function range(start, end, step = 1) {
    if (step > 0 && start > end) return [];
    if (step < 0 && start < end) return [];
    return [start].concat(range(start + step, end, step));
  }

  function plusFn(a, b) {
    return a + b;
  }

  function sum(arr) {
    return arr.reduce(plusFn);
  }

  function main() {
    console.log(range(3, 10, 2));
    console.log(range(10, 3, -1));
    console.log(range(10, 3, -2));
    console.log(sum(range(10, 3, -2)));
  }

  main();
})();
