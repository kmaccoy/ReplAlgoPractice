//////////
//PART 3//
//////////

// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// const callback = function(element, index, array) {
//   console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
  // CODE HERE
  //iterate through array
  for(let i = 0; i < array.length; i++){
    //invoke callback function on each element of array
    callback(array[i], i, array);
  }
}

const callback = function(element, index, array) {
  console.log(element +"," +index +"," +array);
}
//forEach(['a','b','c'], callback); //→ prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
function map(array, callback) {
  // CODE HERE
  //declare a result array, used to store results
  let output = [];
  //iterate through array;
  //push results of iterations passed into callback function
  array.forEach(ele => output.push(callback(ele)));
  //return result array
  return output;
}

// console.log(map([1,2,3], function(element, index, array) {
//  return element * 3;
// })); //-> [3,6,9]

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
  // CODE HERE
  //declare an output array
  let filtered = [];
  //iterate through array
  for(let i = 0; i < collection.length; i++){
    //pass each element through the callback function
    //if returned value is truthy, push to new array
    if(callback(collection[i])){
      //console.log(callback(collection[i]))
      filtered.push(collection[i]);
    }
  }
  //return the output array
  return filtered;
}

// console.log(filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// })); //→ [2,4]
// console.log(filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// })); //→ [1,3]

// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return value % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {
  // CODE HERE
  //check if collection is an array or not
  if(Array.isArray(collection)){
    //declare an empty array
    let rejects = [];
    //iterate through array
    for(let i = 0; i < collection.length; i++){
      //check if the i'th element of collection is not a false return
      if(!callback(collection[i])){
        //push the i'th element into the array
        rejects.push(collection[i]);
        //console.log(rejects);
      }
    }
    //return out the array
    return rejected;
  } else {
  //if the collection is not an array... 
  //for...in loop for the object
    for(let key in collection){
      //pass each key through callback func
      if(callback(collection[key])){
        //delete the key, leave the value
        delete collection[key];
        //console.log(collection);
      }
    }
  //return the collection
  return collection;
  }
}

// console.log(reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// })); //→ [1,3]
// console.log(reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return value % 2 !== 0;
// })); //→ {b:2, d:4}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
function uniq(array) {
  // CODE HERE
  //declare an empty array to return out
  let uniques = [];
  //iterare through array
  for(let i = 0; i < array.length; i++){
    //push 0th element into the output array
    if(i === 0){
      uniques.push(array[i]);
    }
  //declare bool var set to false
  //used for later checks
  let isNotUnique = false;
  //iterare through output array
  for(let k = 0; k < uniques.length; k++){
    //check if the i'th and k'th elements are alike
    if(array[i] === uniques[k]){
      //reassign bool to true
      isNotUnique =  true;
    }
  }
  //if the element does not exist push to output array
  if(!isNotUnique){
    uniques.push(array[i]);
    }
  }
  //return the output array
  return uniques;
}

//console.log(uniq([1,2,1])); //→ [1,2]

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
  // CODE HERE
  //iterate through array
  for(let i = 0; i < array.length; i++){
    //check if current iteration matches the value arg
    if(array[i] === value){
      return i;
    }
  }
  //default case: return -1
  return -1
}

// console.log(indexOf([11,22,33], 11)); //→ 0
// console.log(indexOf([11,22,33], 5)); //→ -1


// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(func) {
  // CODE HERE
  //declare a bool that tracks if function has been run already
  let hasRun = false;
  //declare a result variable that will store the one time result
  let cachedResult;
  //declare interior function that will only run one time
  runOnlyOnce = () => {
    //check if the bool has been run or not
    if(!hasRun){
      //if not, declare a variable assigned to the invocation of the callback function
      cachedResult =  func();
      //reassign the boolean to reflect running once
      hasRun = true;
    }
    //elsewise return the cachedResult
    return cachedResult;
  }
  //return the inner function
  return runOnlyOnce;
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
  // CODE HERE
  //declare an accumulator value
  let acccumulator;
  //check to catch if starter value is undefined
  if(start === undefined){
    //assign the accumulator to the 0'th element of array
    accumulator = array[0];
    //console.log(accumulator);
    //iterate through array starting at 1'st index(accum is 0th)
    for(let i = 1; i < array.length; i++){
      //reassign accumulator with evaluated result of the callback and ith element
      accumulator = callback(accumulator, array[i]);
    }
    //return the accumulator
    return accumulator;
  }
  //otherwise if there is a starter value...
  //set accumulator to starter
  accumulator = start;
  //iterare through array at 0th index
  for(let i = 0; i < array.length; i++){
    //reassign accumulator with evaluated result of the callback and ith element
    accumulator = callback(accumulator, array[i]);
  }
  //return out accumulator
  return accumulator;
}


// console.log(reduce([1,2], function(stored,current) {
//  return stored + current;
// })); //→ 3
// console.log(reduce([1,2], function(stored,current) {
//  return stored + current;
// },1)); //→ 4

// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
function every(array, func) {
  // CODE HERE
  //iterate through array
  for(let i = 0; i < array.length; i++){
    //check if there is a false return from callback
    if(!func(array[i])){
      //return out false, end the function
      return false;
    }
  }
  //default true return
  //only returns true if there are no false returns
  return true;
}

//BONUS: Will work on later?

// console.log(every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// }));  //-> true
// console.log(every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// }));  //-> false

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {
  // CODE HERE
  //return the array, flatten on way out
  return array.flat();
}
//console.log(flatten([1, [2, 3, [4]]])); //→ [1, 2, 3, [4]]

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {
  // CODE HERE
  return array.reduce((flat, curr) => {
    // console.log(array);
    // console.log(curr);
    return flat.concat(Array.isArray(curr) ? flattenDeep(curr) : curr)
  }, []);
}
//console.log(flattenDeep([1, [2, 3, [4]]])); //→ [1, 2, 3, 4]