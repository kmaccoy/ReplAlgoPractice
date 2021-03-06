//basecase, check if the array is even an array
//if so iterate through the array, recursively reinvoke increasing current depth
//return max depth when there is nowhere to go

function arrDimensions(nestedArr, currentDepth = 1, maxDepth = 0) {
  if(Array.isArray(nestedArr)){
    maxDepth = (currentDepth > maxDepth) ? currentDepth : maxDepth;

    for(let i = 0; i < nestedArr.length; i+= 1){
      if(Array.isArray(nestedArr[i])){
        maxDepth = arrDimensions(nestedArr[i], currentDepth + 1, maxDepth);
      }
    }
  }
  return maxDepth;
};

// console.log(arrDimensions( [2, 5, 1] ))
// console.log(arrDimensions( [2, [5], [3, [[16]]], 1] ))

//solution improvement

const arrDims = (arrNest, currDepth = 1, maxDepth = 0) => {
  if(Array.isArray(arrNest)){
    maxDepth = (currDepth > maxDepth) ? currDepth : maxDepth;

    for(let i = 0; i < arrNest.length; i++){
      if(Array.isArray(arrNest[i])){
        maxDepth = arrDims(arrNest[i], currDepth + 1, maxDepth);
      }
    }
  }
  return maxDepth;
};

console.log(arrDims( [2, [5], [3, [[16]]], 1]))


