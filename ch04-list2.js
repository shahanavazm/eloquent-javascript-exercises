/*
Eloquent javascript exercise. Chapter 4. linked list (list).
Convert array to a linked list.
*/

(function anonymous() {
  "use strict";

  function arrayToList(arr) {
    let root = null;
    let lastItem = null;
    for (let i = 0; i < arr.length; i += 1) {
      const currItem = {
        value: arr[i],
        rest: null
      };
      if (lastItem === null) root = currItem;
      if (lastItem !== null) lastItem.rest = currItem;
      lastItem = currItem;
    }
    return root;
  }

  function listToArray(listParam) {
    let list = listParam;

    if (list === null) return [];

    const result = [];
    for (;;) {
      result.push(list.value);
      if (list.rest === null) break;
      list = list.rest;
    }
    return result;
  }

  function prepend(list, itemParam) {
    const item = itemParam;

    item.rest = list;
    return item;
  }

  function nthItem(list, n) {
    let currItem = list;
    try {
      for (let i = 0; i < n; i += 1) {
        currItem = currItem.rest;
      }
    } catch (e) {
      return undefined;
    }
    return currItem;
  }

  function main() {
    // test arrayToList
    console.log(arrayToList([3, 10, 2]));
    // console.log(arrayToList([]));
    // console.log(arrayToList([3]));

    // test listToArray
    console.log(
      listToArray({
        value: 3,
        rest: { value: 10, rest: { value: 2, rest: null } }
      })
    );
    console.log(listToArray({ value: 3, rest: null }));
    // console.log(listToArray(null));

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
        4
      )
    );
  }

  main();
})();
