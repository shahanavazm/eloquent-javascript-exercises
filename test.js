const { range } = require("./util");
const fizzBuzz = require("./ch02-fizzbuzz2");

const nums = range(1, 100);
const fizzesBuzzesNums = nums.map(fizzBuzz);
console.log(fizzesBuzzesNums.join("\n"));
