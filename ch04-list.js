/*
Eloquent javascript exercise. Chapter 4. linked list (list).
Convert array to a linked list.
*/

(function anonymous() {
  "use strict";

  function arrayToList(arr) {
    if (arr.length === 0) return null;
    const [head, ...tail] = arr;
    return {
      value: head,
      rest: arrayToList(tail)
    };
  }

  function listToArray(list) {
    if (!list) return [];
    return [list.value].concat(listToArray(list.rest));
  }

  function prepend(list, itemParam) {
    const item = itemParam;

    item.rest = list;
    return item;
  }

  function nthItem(list, n) {
    if (list === null) return undefined;
    if (n === 0) return list.value;
    return nthItem(list.rest, n - 1);
  }

  function main() {
    // test arrayToList
    console.log(arrayToList([3, 10, 2]));
    console.log(arrayToList([]));
    console.log(arrayToList([3]));

    // test listToArray
    console.log(
      listToArray({
        value: 3,
        rest: { value: 10, rest: { value: 2, rest: null } }
      })
    );
    console.log(listToArray({ value: 3, rest: null }));
    console.log(listToArray(null));

    // test prepend
    console.log(
      prepend(
        {
          value: 3,
          rest: { value: 10, rest: { value: 2, rest: null } }
        },
        { value: 4, rest: null }
      )
    );

    // test nthItem
    console.log(
      nthItem(
        {
          value: 3,
          rest: { value: 10, rest: { value: 2, rest: null } }
        },
        1
      )
    );
  }

  main();
})();
