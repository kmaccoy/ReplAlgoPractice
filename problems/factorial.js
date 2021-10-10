  // Return the Factorial
  // Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.
  
  //Declare a function (factorial) that accepts a number as an argument.
  function factorial(num){
    //Declare if statement that returns anything that is <= 1 as 1
    if (num <= 1){
      return 1;
    }
    //Declare a return that takes argument * the function factorial (num - 1)
    return num * factorial(num -1);
    }
    
    // Examples
    // factorial(3) //➞ 6
    
    // factorial(5) //➞ 120
    
    // factorial(13) //➞ 6227020800


    // function factorial(num){
    //   if (num <= 1) return 1;
    //   return num * factorial(num - 1);
    // }
    
    //factorial(8)