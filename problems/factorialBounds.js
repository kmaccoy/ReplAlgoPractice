  // Exact Factorial Bounds
  // Create a function that tests if a number is the exact upper bound of the factorial of n. If so, return an array of the exact factorial bound and n, or otherwise, the string "Not exact!".
  // Link: https://edabit.com/challenge/jFqttm7eFe8j4WMPu
  
  // create a funcion, isExact that accepts a potential upperbound of a factorial. 
  function isExact(testFactorial){
  
    let upperBound = 1;
    let factorialNum = 1;
  //Set up a while loop that starts at 1, and continualy multiplies under the condition that the result is less than or equal to the potential upperbound. 
  while(upperBound < testFactorial){
    console.log(upperBound, factorialNum)
       factorialNum++;
      upperBound *= factorialNum;
  }
  //If we've gone throgh all iterations and the pot. upperbound is not strictly equal to the returned value of the funcion, return the string, Not exact
  if(upperBound !== testFactorial) return 'Not exact!'
  
  //Else, return an array, with the upp. val and the factorial of upp. val. 
  return [upperBound, factorialNum]
  }
  // console.log(isExact(125))// 'Not Exact'
  // console.log(isExact(6))//[6,3]
  // console.log(isExact(1024)) //'Not exact'
  // console.log(isExact(40320))//[40320,8]
  
  
  // Examples
  // isExact(6) //➞ [6, 3]
  
  // isExact(24) //➞ [24, 4]
  
  // isExact(125) //➞ "Not exact!"
  
  // isExact(720) //➞ [720, 6]
  
  // isExact(1024) //➞ "Not exact!"
  
  // isExact(40320) //➞ [40320, 8]