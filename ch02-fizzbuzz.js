/*
Eloquent javascript exercise. Chapter 2. FizzBuzz.
Write a program that prints the numbers from 1 to 100. But for multiples 
of three print “Fizz” instead of the number and for the multiples of 
five print “Buzz”. For numbers which are multiples of both three and five 
print “FizzBuzz”.
*/

(function anonymous() {
  "use strict";

  /* range function
     got from https://stackoverflow.com/a/21354858 */
  function range(lowEnd, highEndParam) {
    let highEnd = highEndParam;

    const arr = [];
    let c = highEnd - lowEnd + 1;
    for (; c !== 0; c -= 1) {
      highEnd -= 1;
      arr[c] = highEnd;
    }
    return arr;
  }

  function fizzBuzz(i) {
    let result = "";
    if (i % 3 === 0) {
      result += "fizz";
    }
    if (i % 5 === 0) {
      result += "buzz";
    }
    result = result || i;
    return result;
  }

  const nums = range(1, 100);
  const fizzesBuzzesNums = nums.map(fizzBuzz);
  console.log(fizzesBuzzesNums.join("\n"));
})();
