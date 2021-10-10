  // Find the Second Largest Number
  // Create a function that takes an array of numbers and returns the second largest number.
  function secondLargest(arrOfNum){
    //Using the array argument, sort the array, and then return the value of the second element. 
    return arrOfNum.sort(function compare(a,b){
      return b-a ;
    })[1]
    }
  
  // Examples
  //console.log(secondLargest([10, 40, 30, 20, 50])) //➞ 40
  
  // console.log(secondLargest([25, 143, 89, 13, 105])) //➞ 105
  
  // console.log(secondLargest([54, 23, 11, 17, 10])) //➞ 23