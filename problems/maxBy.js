//is Math.abs what we're supposed to assume is the callback???
//iterate through the array
//check if the current "max number" is > than the eval. result of passing current iteration
// through the callback
//if yes change
//if not continue on

function maxBy(arr, callback) {
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