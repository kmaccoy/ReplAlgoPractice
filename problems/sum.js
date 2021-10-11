// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
function sum(array){
  console.log(array)
  //basecase
  if (array.length === 1){
    return array[0]
  }
  
  //var to carry out
  let arraySum = 0 + array.shift()
  //console.log(arraySum)//
  //recursive call
  return arraySum + sum(array);
};

// console.log(sum([1,2,3,4,5,6])); //21
// console.log(sum([2,4,6,8,10])); //30