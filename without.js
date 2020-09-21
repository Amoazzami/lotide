const assertArraysEqual = function(array1, array2) {
  for (let i=0; i<array1.length; i++){
    for (let j=0; j<array2.length; j++){
      if(array1[i] === array2[j]){
       return console.log(`✅✅✅ Assertion Passed`);
      }
      return console.log(`🛑🛑🛑 Assertion Failed`);
    }
  }
}


const eqArrays = function(array1, array2) {
  for (let i=0; i<array1.length; i++){
    for (let j=0; j<array2.length; j++){
      if(array1[i] === array2[j]){
        return true
      }
      return false
    }
  }
}

const without = function (source, itemsToRemove) {
  return source.filter(element => !itemsToRemove.includes(element));
  for (let i =0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  }
  return source;
};
// assertArraysEqual(without([1,2,3], [1]), [2,3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
