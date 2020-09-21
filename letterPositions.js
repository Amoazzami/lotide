// return all the indices (zero based positions) in the string where each character is found
// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

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


letterPositions = function(sentence) {
  let results = {};
  let newString = sentence.toLowerCase();// .replace(/\s/g, ""); //split(' ').join("").toLowerCase(); 
  for(let i=0 ; i < newString.length ; i++){
    if (newString[i] !== " ") {
    if(results[newString[i]]){
      results[newString[i]].push(i);
    } else {
      results[newString[i]] = [i];
      }
    }
  }
  return results;
}
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
