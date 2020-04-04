/*
Eloquent javascript exercise. Chapter 4. flatten an array.

Use the reduce method in combination with the concat method to “flatten” an 
array of arrays into a single array that has all the elements of the 
original arrays.

*/

(function anonymous() {
  "use strict";

  function flatten(arr) {
    const [head, ...tail] = arr;
    if (tail.length === 0) return head;
    return head.concat(flatten(tail));
  }

  function main() {
    console.log(flatten([[1, 2, 3], [4, 5], [6]]));
    console.log(flatten([[1, 2, 3]]));
    console.log(flatten([[]]));
    console.log(flatten([]));
  }

  main();
})();
