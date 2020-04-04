/*
Eloquent javascript exercise. Chapter 4. dominant direction in a script.

Write a function that computes the dominant writing direction in a string of 
text. Remember that each script object has a direction property that can be 
"ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

*/

require("./ch05-scripts.js");
/* global SCRIPTS  */

(function anonymous() {
  "use strict";

  function characterScript(code) {
    /*
    Given a character, returns its script from SCRIPTS object.
    console.log(characterScript(121));
    → {name: "Latin", …}
    */
    for (let i = 0; i < SCRIPTS.length; i += 1) {
      const script = SCRIPTS[i];
      if (
        script.ranges.some(([from, to]) => {
          return code >= from && code < to;
        })
      ) {
        return script;
      }
    }
    return null;
  }

  function countBy(items, groupName) {
    /*
    The countBy function expects a collection 
    and a function that computes a group name for a given element. 
    It returns an array of objects, each of which names a group and tells you 
    the number of elements that were found in that group  
    console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
    // → 61% Han, 22% Latin, 17% Cyrillic
    */
    const counts = [];
    // for (let item of items) {
    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];
      const name = groupName(item);
      const known = counts.findIndex(c => c.name === name);
      if (known === -1) {
        counts.push({ name, count: 1 });
      } else {
        counts[known].count += 1;
      }
    }
    return counts;
  }

  function textScripts(text) {
    const scripts = countBy(text, char => {
      const script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    });

    // find script with max count
    const maxCount = scripts.reduce(
      (a, b) => {
        return b.count >= a.count ? b : a;
      },
      { name: "", count: 0 }
    );
    console.log(maxCount);
    const maxScript = SCRIPTS.filter(script => script.name === maxCount.name);
    return maxScript[0].direction;
  }

  function main() {
    console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
  }

  main();
})();
