// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [ 6, 7 ]);
  });
});

// assertEqual(tail([5,6,7]), 5);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// module.exports = tail; 