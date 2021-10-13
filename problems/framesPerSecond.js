  // Frames Per Second
  // Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
  
  //Declare a function that accepts two arguements, numFrames and minutes.
  //Return total by multiplying numFrames by 60, multiplied by number of minutes.

  function frames(numFrames, numMins){
      return (numFrames*60) * numMins;
  }
    
    // // Examples
    // frames(1, 1) //➞ 60
    
    // frames(10, 1) //➞ 600
    
    // frames(10, 25) //➞ 15000
    
    // Add up the Numbers from a Single Number
    // Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
    //Declare a function that accepts a number as an argument.
    //Declare a count variable
    //Declare a currentSum variable.
    //While loop that runs while count is <= number argument.
    //Within while loop, have currentSum + count.
    //Increment count
    //Return currentSum when while loop is done.


    function addUp(num){
      let count = 0;
      let currentSum = 0;
      while (count <= num){
        currentSum = currentSum + count
        count++
      }
    return currentSum;
    }
    
    // // Examples
    // addUp(4) //➞ 10
    
    // addUp(13) //➞ 91
    
    // addUp(600) //➞ 180300