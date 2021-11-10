// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

function arraySum(array){
  //basecase
  if(array.length === 1){
    return array[0];
  }
  
  //remove the nests
  let flatArray = array.flat()
  //console.log(flatArray);
  //create sum variable to pass through
  let sumArray = 0 + flatArray.shift();
  //console.log(sumArray);
  //recursive call
  return sumArray + arraySum(flatArray);
};

//es6 conversion

const arrSum = arr => {
  if(arr.length === 1) return arr[0];

  let flatArr = arr.flat();
  let summedArr = 0 + flatArr.shift();

  return summedArr + arrSum(flatArr);
};

//console.log(arraySum([1,[2,3],[[4]],5])); // 15
//console.log(arraySum([1,[[2,3]],[4],5])) //15
//console.log(arraySum([2,[4,6],8,[[[10]]]])) //30