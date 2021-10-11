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