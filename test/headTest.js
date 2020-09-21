// const assertEqual = require('../assertEqual');
// const head = require('../head');

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


const assert = require('chai').assert;
const head = require('../head');
describe("#passing", () => {
  it("returns 5 for [5, 2, 3]", () => {
    assert.strictEqual(head([5, 2, 3]), 5);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});
