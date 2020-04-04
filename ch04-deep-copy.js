/*
Eloquent javascript exercise. Chapter 4. Make a deep copy function
for objects only.
*/

(function anonymous() {
  "use strict";

  function deepCopy(obj) {
    // const result = {};
    const result = Array.isArray(obj) ? [] : {};
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const value = obj[key];

      // handle nested object
      if (typeof value === "object" && value !== null) {
        result[key] = deepCopy(value);
      } else {
        result[key] = value;
      }
    }

    return result;
  }

  function main() {
    // simple object
    console.log(
      deepCopy({
        a: 1,
        b: 2,
        c: 3
      })
    );

    // nested object
    console.log(
      deepCopy({
        a: 1,
        b: { d: 1 },
        c: 3
      })
    );

    // nested two levels
    console.log(
      deepCopy({
        a: 1,
        b: { d: 1, e: 2, f: { i: 1, k: 2 }, g: 4 },
        c: 3
      })
    );

    // null inside
    console.log(
      deepCopy({
        a: 1,
        b: null,
        c: 3
      })
    );

    // array inside
    console.log(
      deepCopy({
        a: 1,
        b: [1, 2, 3],
        c: 3
      })
    );

    // array outside
    console.log(deepCopy([1, [4, { a: 1, b: 2, c: 3 }, 6], 3]));
  }

  main();
})();
