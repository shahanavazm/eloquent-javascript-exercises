/*
Eloquent javascript exercise. Chapter 4. every function.

Implement every as a function that takes an array and a predicate function 
as parameters. Write two versions, one using a loop and one using the some 
method.

*/

(function anonymous() {
  "use strict";

  function every(arr, condFn) {
    for (let i = 0; i < arr.length; i += 1) {
      const item = arr[i];
      if (condFn(item) === false) return false;
    }
    return true;
  }

  function everyUsingSome(arr, condFn) {
    return !arr.some(x => !condFn(x));
  }

  function main() {
    console.log(every([1, 2, 3], x => x < 10));
    console.log(every([1, 2, 30], x => x < 10));
    console.log(every([], x => x < 10));

    console.log(everyUsingSome([1, 2, 3], x => x < 10));
    console.log(everyUsingSome([1, 2, 30], x => x < 10));
    console.log(everyUsingSome([], x => x < 10));
  }

  main();
})();
