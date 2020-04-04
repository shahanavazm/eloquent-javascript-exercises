/*
Eloquent javascript exercise. Chapter 2. Looping a triangle.
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

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

  function line(i) {
    return "#".repeat(i);
  }

  const rowNums = range(1, 7);
  const triangle = rowNums.map(line);
  console.log(triangle.join("\n"));
})();
