// Write a function that takes an array and two integers as arguments. These two numbers will be indices. All array elements between (and including) these positions should be reversed.

function reverseChunk (arr, start, end) {
  //declare a variable for the edited array, will be pushed out
  let reversedArr = arr;
  console.log(reversedArr);
  //declare a storage array for targets
  let targets = [];
  //specifically target the start and end params, break them off from the main array
  for(let i = start; i < reversedArr.length; i++){
    console.log(i)
    if(i <= end){
      //push the targets into storage array
      targets.push(reversedArr[i])
      console.log(targets)
    }
  }
  //reverse that section, apply the separate array back into the edited array
  targets.reverse();
  console.log(targets)

  reversedArr.splice(start, end, targets)
  console.log(reversedArr)
  //return the new array out
}

const zeroToTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverseChunk(zeroToTen, 2, 6));
//console.log(reverseChunk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))