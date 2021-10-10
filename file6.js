function chunkItUp(array, size) {
  //size determines how many items go in the .length of each "array"
  //iterate through the first array and split them into appropriate sizes
  //combine them into one array
  let result = [];
  while (array.length > size){
    result.push(array.splice(0, size));
  }
  if (array.length)
    result.push(array);
  
  return result;

}

// console.log(chunkItUp(["a", "b", "c", "d"], 2))
// console.log(chunkItUp([0, 1, 2, 3, 4, 5], 3))

function arrDimensions(nestedArr, currentDepth = 1, maxDepth = 0) {
  //basecase, check if the array is even an array
  //if so iterate through the array, recursively reinvoke increasing current depth
  //return max depth when there is nowhere to go
  if(Array.isArray(nestedArr)){
    maxDepth = (currentDepth > maxDepth) ? currentDepth : maxDepth;

    for(let i = 0; i < nestedArr.length; i+= 1){
      if(Array.isArray(nestedArr[i])){
        maxDepth = arrDimensions(nestedArr[i], currentDepth + 1, maxDepth);
      }
    }
  }
  return maxDepth;
}

// console.log(arrDimensions( [2, 5, 1] ))
// console.log(arrDimensions( [2, [5], [3, [[16]]], 1] ))

function maxBy(arr, callback) {
  //is Math.abs what we're supposed to assume is the callback???
  //iterate through the array
  //check if the current "max number" is > than the eval. result of passing current iteration
  // through the callback
  //if yes change
  //if not continue on
  let max = -Infinity;
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
    console.log(callback(arr[i]))
    if(max < callback(arr[i])){
      max = callback(arr[i]);
    }
  }
  return max;
}

const nums = [-1, 1, 5, 2, -7]
const numsTwo = [-100, 1, 5, 75, 2, 126, -7]

//console.log(maxBy(numsTwo, Math.abs))
const sum = function(a, b, c) { return a + b + c }
// const secureFunc = lockDown(sum, 'lolol')
//secureFunc('lolol', 1, 2, 3)
//secureFunc('wrong', 1, 2, 3)

function lockDown(func, password) {
  console.log(func)
  console.log(password)
  //string is password
  //lockdown returns a function (secureFunc) WHAT.
  //secureFunc must be provided the password string as its first argument. 
  function secureFunc(){
    console.log(func)
    console.log(password)
    //If the string is incorrect, 401 is returned.
    if(password !== 'lolol'){
      console.log('failed')
      return 401;
    } else {
      console.log('in else statement')
      //If correct, secureFunc will call func and return its output.
      return func(1, 2, 3);
    }
  }
  //lockdown returns a function (secureFunc) WHAT.
  return secureFunc();
}

console.log(lockDown(sum, 'wrong'))
console.log(lockDown(sum, 'lolol'))