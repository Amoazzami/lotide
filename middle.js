const assertArraysEqual = require('./assertArrayEqual');
const eqArrays = require('./eqArrays');

const middle = function(array){
    let newArray = []
    if(array.length <= 2){
      return newArray
    }
    if(array.length % 2 !== 0){
        let middle = Math.floor(array.length/2);
        let value = array[middle]
        newArray.push(value)
        return newArray
      }
    if(array.length % 2 === 0){
        let middleLeft = Math.floor(array.length/2 - 1)
        let middleLeftValue = array[middleLeft]
        let middleRight = Math.floor(array.length/2)
        let middleRightValue = array[middleRight]
        newArray.push(middleLeftValue, middleRightValue)
      return newArray;
    }
}
module.exports = middle; 
