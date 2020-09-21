const eqArrays = require('./eqArrays');

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


module.exports = assertArraysEqual; 