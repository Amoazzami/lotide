const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return assertArraysEqual(words, results);
}

const mapCallback = function(wordItem) {
  return wordItem + 'buttholes'
}

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

map(words, mapCallback)