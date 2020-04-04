const assert = require("assert");

/* range function
   got from https://stackoverflow.com/a/21354858 
   usage: 
   assert.deepEqual(range(1, 3), [1, 2, 3]); */
function range(lowEnd, highEndParam) {
  let highEnd = highEndParam;

  const arr = [];
  let c = highEnd - lowEnd + 1;
  for (;;) {
    if (c <= 0) break;
    c -= 1;
    arr[c] = highEnd;
    highEnd -= 1;
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

/*
  deepMap is like map but for whole object/array tree.
  */
function deepMap(deepMapObj, deepMapCb) {
  const deepMapOrigObj = deepMapObj;

  function dm(obj, cb) {
    const result = Array.isArray(obj) ? [] : {};
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const value = obj[key];

      // handle nested object
      if (typeof value === "object" && value !== null) {
        // result[key] = cb(dm(value, cb, origObj), key, origObj);
        result[key] = dm(value, cb, deepMapOrigObj);
      } else {
        result[key] = cb(value, key, deepMapOrigObj);
      }
    }

    return result;
  }

  return dm(deepMapObj, deepMapCb, deepMapObj);
}

/*
  tableMap, traverses a 2d array applying the callback function

  // usage
  const tA = Array(4).fill(Array(4).fill(1));
  console.log(tA);

  const t = tableMap(tA, (currentValue, rowIndex, colIndex, origArray) => {
    return { currentValue, rowIndex, colIndex };
  });
  console.log(t);

  */
function tableMap(table, cb) {
  const arrI = [];
  for (let i = 0; i < table.length; i += 1) {
    const arrJ = [];
    for (let j = 0; j < table[i].length; j += 1) {
      arrJ[j] = cb(table[i][j], i, j, table);
    }
    arrI[i] = arrJ;
  }

  return arrI;
}

// testing
if (require.main === module) {
  // range
  assert.deepEqual(range(1, 3), [1, 2, 3]);

  // curry
  const fnabc = (a, b, c) => {
    return a + b + c;
  };
  const fnbc = curry(fnabc)(1);
  assert(fnbc(2, 3) === 6);

  // deepMap
  const result = deepMap(
    { a: 1, b: [4, 5, 6], c: 3 },
    currentValue => currentValue
  );
  console.log(result);
  assert.deepEqual(result, { a: 1, b: [4, 5, 6], c: 3 });

  // tableMap
  const tA = Array(4).fill(Array(4).fill(1));
  console.log(tA);

  const t = tableMap(tA, (currentValue, rowIndex, colIndex) => {
    return { currentValue, rowIndex, colIndex };
  });
  console.log(t);
}

exports.range = range;
exports.curry = curry;
exports.deepMap = deepMap;
exports.tableMap = tableMap;
