  // Title: Fibonacci Recursion
  // Link: https://edabit.com/challenge/Cfe88oSTXyxihiPhu
  
  // The Fibonacci sequence is a classic use case for recursive functions since the value of the sequence at a given index is dependent on the last two values. More precisely, it's dependent on the sum of the previous two values.
  
  // Write a function named fib that takes an integer n as its input. It should return the Fibonacci sequence's value at index n.
  
  //Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...
  
  //Create a function, fib, that accepts an integer n and has a default parameter, sum assigned to 0
  // Base case: if n is strictly equal to 1 or 2, we will return 1. 
  //Return fib, w/ it assigned to be equal to n-1 + n-2
  
  function fib(n){
    if( n === 1 || n === 2) return 1;
     
    //Recursive case,
      return fib(n-1)+ fib(n-2)
    
  }
    // Examples
    
    // console.log(fib(6))//➞ 8
    // // 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
    
    // fib(1) //➞ 1
    
    // fib(2) //➞ 1