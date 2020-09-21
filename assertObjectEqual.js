

function isObject(val) {
  return typeof val === 'object' && val !== null;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
  return true;
}

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  const keys = Object.keys(object1);
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val1 = object1[key];
    const val2 = object2[key];
    
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!arraysEqual(val1, val2)) {
        return false;
      }
    }
    
    else if (isObject(val1) && isObject(val2)) {
      if (!eqObjects(val1, val2)) {
        return false;
      }
    }
    
    else if (val1 !== val2) {
       return false;
    }
  }
  
  return true;
}


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});
assertObjectsEqual({a: 2, b: ["1", 2]}, {a: 1, b: 2});