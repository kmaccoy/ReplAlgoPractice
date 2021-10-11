// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
  // CODE HERE
  //check the typeof the value
  if(typeof value === 'number'){
    return true;
  }
  //default return false
  return false;
}

//console.log(isNumber(5))

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray(value) {
  // CODE HERE
  //return the output of the isArray method
  return Array.isArray(value);
}

// console.log(isArray([1,2,3]))
// console.log(isArray(3))

// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → true
function isObject(value) {
  // CODE HERE
  if(typeof value === 'object'){
    return true;
  }
  return false;
}

//console.log(isObject([1,2,3]))

// return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false
function isNull(value) {
  // CODE HERE
  if(!value){
    return true;
  }
  return false;
}

// console.log(isNull(null));
// console.log(isNull(5));