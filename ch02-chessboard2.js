/*
Eloquent javascript exercise. Chapter 2. Chess board.
Write a program that creates a string that represents an 8×8 grid, using 
newline characters to separate lines. At each position of the grid there is 
either a space or a "#" character.
*/

const { tableMap } = require("./util");

const SIZE = 8;

function cellValue(i, j) {
  let result = "#";
  if ((i + j) % 2 === 0) {
    result = " ";
  }
  return result;
}

function chessboard() {
  const arr = Array(SIZE).fill(Array(SIZE).fill(null));
  const result = tableMap(arr, (currentValue, rowIndex, colIndex) =>
    cellValue(rowIndex, colIndex)
  );
  return result;
}

if (require.main === module) {
  chessboard().forEach(r => console.log(r.join("")));
}

module.exports = chessboard;
