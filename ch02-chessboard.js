/*
Eloquent javascript exercise. Chapter 2. Chess board.
Write a program that creates a string that represents an 8×8 grid, using 
newline characters to separate lines. At each position of the grid there is 
either a space or a "#" character.

*/

(function anonymous() {
  ("use strict");

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

  /* curry function
     got from: https://javascript.info/currying-partials */
  function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      }
      return function anonymousLocal(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    };
  }

  const SIZE = 8;

  function cellValue(i, j) {
    let result = "#";
    if ((i + j) % 2 === 0) {
      result = " ";
    }
    return result;
  }

  /* Generates each row of the chessboard */
  function row(i) {
    const cellValueI = curry(cellValue)(i);
    const colNums = range(1, SIZE);
    const result = colNums.map(cellValueI);
    return result;
  }

  const rowNums = range(1, SIZE);
  const chessboard = rowNums.map(row);
  chessboard.forEach(r => console.log(r.join("")));
})();
