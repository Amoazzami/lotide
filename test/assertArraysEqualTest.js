const assertArraysEqual = require('../assertArrayEqual');
const eqArrays = require('../eqArrays');

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 