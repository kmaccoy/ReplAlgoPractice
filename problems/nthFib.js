  // Nth Fibonacci Number
  
  // Create a function to return the Nth number in the Fibonacci sequence as a string.
  // Examples
  
  // Declare a function that takes a single number as an argument.
  // Declare a test case that returns 1 for any parameter that is less than or equal to 1.
  // Declare recusive statement that mirrors fibonacci sequence.

  function fibonacci(num){
    if(num <= 1){
      return 1
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2)
    }
  }
    
    //fibonacci(10) //➞ "55"
    
    // fibonacci(20) //➞ "6765"
    
    // fibonacci(30) //➞ "832040"
    
    // fibonacci(40) //➞ "102334155"
    
    // fibonacci(50) //➞ "12586269025"
    
    // fibonacci(60) //➞ "1548008755920"

  //convert to es6

  const nthfib = num => {
    if(num <= 1) return 1;
    return nthfib(num - 1) + nthfib(num - 2);
  };