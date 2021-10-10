// Create a function which returns the number of true values there are in an array.

//create a function, countTrue, which accepts an array of 
//boolean values
function countTrue(array){
  //declare a variable, counter, and assign it the value of 0
  let counter = 0;
  
  //iterate through the array, using a for loop, and at 
  for(let i = 0; i < array.length; i++){
      //each element, check to see if it's equal to true
      if(array[i]) counter++;
            //if so, increment counter by 1. 
  }
  
  //return our counter variable
  return counter;
  }
  
  // Examples
   //countTrue([true, false, false, true, false])// ➞ 2
  
  //countTrue([false, false, false, false]) //➞ 0
  
   //countTrue([]) //➞ 0
  // Notes
  // Return 0 if given an empty array.
  // All array items are of the type bool (true or false).