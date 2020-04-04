/*
Eloquent javascript exercise. Chapter 3. Bean counter.
Write a function countBs that takes a string as its only argument and returns 
a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it 
takes a second argument that indicates the character that is to be counted 
(rather than counting only uppercase “B” characters). Rewrite countBs to make 
use of this new function.

*/

(function anonymous() {
  "use strict";

  /* plus function */
  function plusFn(a, b) {
    return a + b;
  }

  function charCounter(str, char) {
    const { map } = Array.prototype;
    const onesAndZeroes = map.call(str, c => (c === char ? 1 : 0));
    const result = onesAndZeroes.reduce(plusFn);
    return result;
  }

  console.log(charCounter("abcd", "b"));
  console.log(charCounter("abccdc", "c"));
})();
