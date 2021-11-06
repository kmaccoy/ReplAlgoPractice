//size determines how many items go in the .length of each "array"
//iterate through the first array and split them into appropriate sizes
//combine them into one array

function chunkItUp(array, size) {
  let result = [];
  while (array.length > size){
    result.push(array.splice(0, size));
  }
  if (array.length)
    result.push(array);
  
  return result;
};

// console.log(chunkItUp(["a", "b", "c", "d"], 2))
// console.log(chunkItUp([0, 1, 2, 3, 4, 5], 3))

//convert to es6

const chunkUp = (arr, size) => {
  let res = [];
  while(arr.length > size){
    res.push(arr.splice(0, size));
  }
  if(arr.length){
    res.push(arr);
  }
  return res;
}