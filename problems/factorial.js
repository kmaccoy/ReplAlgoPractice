  // Return the Factorial
  // Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.
  
  //Declare a function (factorial) that accepts a number as an argument.
  //Declare if statement that returns anything that is <= 1 as 1
  //Declare a return that takes argument * the function factorial (num - 1)
  function factorial(num){
    if (num <= 1){
      return 1;
    }
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

    // Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120


function factorial(n) {
  //basecase
  if (n <= 1){
    return n;
  }
  //recursive call
  return n * factorial(n - 1);
};

// console.log(factorial(5)); // 120
// console.log(factorial(1)); // 1