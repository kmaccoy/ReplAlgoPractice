// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false

//check the typeof the value
//default return false

function isNumber(value) {
  if(typeof value === 'number'){
    return true;
  }
  return false;
}

//console.log(isNumber(5))

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true

//convert to es6

const isNumber = val => {
  if(typeof val === 'number') return true;
  return false;
};



//return the output of the isArray method
function isArray(value) {
  return Array.isArray(value);
}

//convert to es6
const isArray = val => {
  return Array.isArray(val);
};

// console.log(isArray([1,2,3]))
// console.log(isArray(3))

// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → true


function isObject(value) {
  if(typeof value === 'object'){
    return true;
  }
  return false;
}

//conver to es6

const isObject = val => {
  if(typeof val === 'object') return true;
  return false;
};

//console.log(isObject([1,2,3]))

// return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false


function isNull(value) {
  if(!value){
    return true;
  }
  return false;
};

//convert to es6

const isNull = val => {
  if(!val) return true;
  return false;
};

// console.log(isNull(null));
// console.log(isNull(5));