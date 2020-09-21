# Lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**
`npm install @Amoazzami/lotide`

**Require it:**
`const _ = require('@Amoazzami/lotide');`

**Call it:**
`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation
The following functions are currently implemented:

* `eqArrays(arr1, arr2)`: returns true for 2 arrays that are equal, and false for 2 arrays that are not equal.
* `assertArraysEqual(arr1, arr2)`: determines if two arrays are equal. 
* `assertEqual(val1, val2)`: assess whether two arrays are equal, and returns true or false. 
* `assertObjectsEqual(obj1, obj2`: assess whether two objects are equal, and returns true or false. 
* `countLetters(str)`: returns an object with the count of letters in argument string.
* `countOnly(arrSource, objToCount)`: determines number of times a value occurs in an array, and returns an object.
* `eqObjects(obj1, obj2)`: returns true for 2 equal objects, and false for 2 non equal
* `findKey(obj, cb)`: returns first key in obj which valuates true in cb
* `findKeyByValue(obj, val)`: returns first property in obj with value(val)
* `letterPositions(str)`:takes in a sentence, and returns an object with the indexes of every letter in the sentece.
* `head(arr)`: returns the first element of an array.
* `tail(arr)`: returns an array without first element.
* `map(arr, cb)`: returns array of elements from src array with true on cb
* `middle(arr)`: returns the middle element(s) of an array.
* `takeUntil(arr, cb)`: returns array elements from index 0 until value where cb evaluates true.
* `without(arr1, arr2)`: returns array of elements from arr1 with arr2 elements removed.

