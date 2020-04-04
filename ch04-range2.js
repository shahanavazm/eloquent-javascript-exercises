/*
Eloquent javascript exercise. Chapter 4. range function.
*/

(function anonymous() {
  "use strict";

  function range(startParam, end, step = 1) {
    let start = startParam;

    const result = [];
    let i = 0;
    for (;;) {
      if (step > 0 && start > end) break;
      if (step < 0 && start < end) break;

      result[i] = start;
      start += step;
      i += 1;
    }
    return result;
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
