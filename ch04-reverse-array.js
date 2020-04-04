/*
Eloquent javascript exercise. Chapter 4. reverse array.
Write reverseArray and reverseArrayInPlace
*/

(function anonymous() {
  "use strict";

  function reverseArray(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
      result.unshift(arr[i]);
    }
    return result;
  }

  function reverseArrayInPlace(arrParam) {
    const arr = arrParam;

    const lastIndex = arr.length - 1;
    const middle = Math.floor(lastIndex / 2);
    for (let i = 0; i <= middle; i += 1) {
      // swap
      [arr[i], arr[lastIndex - i]] = [arr[lastIndex - i], arr[i]];
    }
    return arr;
  }

  function main() {
    console.log(reverseArray([3, 10, 2]));
    console.log(reverseArray([1, 2, 3, 4]));
    console.log(reverseArrayInPlace([3, 10, 2]));
    console.log(reverseArrayInPlace([1, 2, 3, 4]));
  }

  main();
})();
