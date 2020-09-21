const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } else if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed:${actual} === ${expected}`);
};


const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
    return undefined; 
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); 

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Ora"); 

assertEqual(findKey({
  "josh":       { Age: 7},
  "mark":       { Age: 56 },
  "Barry":      { Age: 46 },
  "Elijah":     { Age: 354 },
  "OH":         { Age: 34 },
  "Andrew":     { Age: 34}
}, x => x.Age === 34), "OH");

assertEqual(findKey({
  "josh":       { Age: 7},
  "mark":       { Age: 56 },
  "Barry":      { Age: 46 },
  "Elijah":     { Age: 354 },
  "OH":         { Age: 34 },
  "Andrew":     { Age: 34}
}, x => x.Age === 40), "OH");