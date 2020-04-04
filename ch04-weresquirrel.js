/*
Eloquent javascript exercise. Chapter 4. The Weresquirril.
Jacque, the weresquirrel tries to figure out which daily event causes hime
to become a weresquirrel. 
More details here: https://eloquentjavascript.net/04_data.html


events (event name is unique)
------
carrot
exercise
weekend
.
.
.
brushed teeth


log (meaning journal log)
---
id      squirreled    event      eventActive
1       true          carrot     true
1       true          exercise   true
1       true          weekend    true
1       true          pizza      false
.
.
.
n       false         weekend    true


Phi correlation table:
----------------------
              event_off    event_on
squirrel_off     00          01
squirrel_on      10          11

phi:
----
event    n00    n01    n10    n11    coefficient
carrot   7      20     12     45     -0.5
exercise 45     87     2      0      0.1
pirzz    4      7      12     10     0.2
.
.
.




*/

require("./ch04-weresquirrel-journal.js");
/* global JOURNAL  */

(function anonymous() {
  "use strict";

  function buildLogTable(JOURNAL, events) {
    const log = [];

    for (let i = 0; i < JOURNAL.length; i += 1) {
      const entry = JOURNAL[i];
      for (let j = 0; j < events.length; j += 1) {
        const event = events[j];
        let eventActive = false;
        if (entry.events.includes(event)) {
          eventActive = true;
        }

        // handle peanut teeth
        if (event === "peanut teeth") {
          if (
            entry.events.includes("peanuts") &&
            !entry.events.includes("brushed teeth")
          ) {
            eventActive = true;
          }
        }

        log.push({
          id: i,
          squirreled: entry.squirrel,
          event,
          eventActive
        });
      }
    }
    return log;
  }

  function createPhiTable(log, events) {
    const phi = [];

    for (let i = 0; i < events.length; i += 1) {
      const event = events[i];

      let entries;
      // n00
      entries = log.filter(
        entry =>
          entry.event === event &&
          entry.squirreled === false &&
          entry.eventActive === false
      );
      const n00 = entries.length;

      // n01
      entries = log.filter(
        entry =>
          entry.event === event &&
          entry.squirreled === false &&
          entry.eventActive === true
      );
      const n01 = entries.length;

      // n10
      entries = log.filter(
        entry =>
          entry.event === event &&
          entry.squirreled === true &&
          entry.eventActive === false
      );
      const n10 = entries.length;

      // n11
      entries = log.filter(
        entry =>
          entry.event === event &&
          entry.squirreled === true &&
          entry.eventActive === true
      );
      const n11 = entries.length;

      phi.push({
        event,
        n00,
        n01,
        n10,
        n11,
        coefficient: ""
      });
    }

    return phi;
  }

  function coefficient(n00, n01, n10, n11) {
    return (
      (n11 * n00 - n10 * n01) /
      Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
    );
  }

  function main() {
    // -----------------
    // build event table
    let events = JOURNAL.map(entry => entry.events);
    events = events.flat();

    // handle peanut teeth
    events.push("peanut teeth");

    // get distinct items from event array.
    events = [...new Set(events)];
    // console.log(events);

    // ---------------
    // build log table

    const log = buildLogTable(JOURNAL, events);
    // console.log(log);

    // ---------------
    // build phi table
    const phi = createPhiTable(log, events);
    // console.log(phi);

    // --------------------
    // Calculate coefficient
    for (let i = 0; i < phi.length; i += 1) {
      const e = phi[i];
      e.coefficient = coefficient(e.n00, e.n01, e.n10, e.n11);
    }
    // console.log(phi);

    // ------------------
    // print coefficients
    const phiSorted = phi.sort((a, b) =>
      a.coefficient < b.coefficient ? 1 : -1
    );
    for (let i = 0; i < phiSorted.length; i += 1) {
      const e = phiSorted[i];
      console.log(`${e.event} ${e.coefficient}`);
    }
  }

  main();
})();
