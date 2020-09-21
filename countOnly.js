const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } else if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// itmes in our case will be limited to strings
// countOnly will be given an array and an object - it will return an object containing counts of everything that the input object listed
// only truthy value

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }

  return results;
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);