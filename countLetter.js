const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } else if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed:${actual} === ${expected}`);
};
const countLetters = function(string) {
  // create an object 
  let object = {};
  // create a new string that has no spaces and joins the string together
  let newString = string.split(" ").join("").toLowerCase(); 
  // create a forloop to go into the each element of the string
  for(let i = 0; i < newString.length; i++){
  // the new string has already seen that letter add one to the count
    if (object[newString[i]]) {
      object[newString[i]] += 1
  // if the element has not yet been seen then give it the value of 1
    } else {
      object[newString[i]] = 1
    }
  }
  return object; 
}

console.log(countLetters("lighthouse in the house"));



