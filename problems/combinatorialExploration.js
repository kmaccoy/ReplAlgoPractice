  //Combinatorial Exploration
  //Url: https://edabit.com/challenge/YE9n7my9REKyReMjP
  
  // Given a known number of unique items, how many ways could we arrange them in a row?
  // Create a function that takes an integer n and returns the number of digits of the number of possible permutations for n unique items. 
  //For instance, 5 unique items could be arranged in 120 unique ways. 120 has 3 digits, hence the integer 3 is returned.
  //Declare a function that takes an integer "n"
  // Basecase. Return if 1 or 0.
  //Return the number of digits of the number of pissible permutations for n unique items.
  
  function noPermsDigits(num){
    
    let lengthOfDigits = 0;
  
    function factorialFind(num){
      if (num <= 1) return 1;
      return num * noPermsDigits(num - 1);
    }
    return lengthOfDigits; 
  };
  
  // Examples
  //noPermsDigits(0) //➞ 1
  
  // noPermsDigits(1) ➞ 1
  
  // noPermsDigits(5) ➞ 3
  
  // noPermsDigits(8) ➞ 5
  // Notes
  // This challenge requires some understanding of combinatorics.
  
  // Factorial Code
  
  
  // function factorial(num){
  //   if (num <= 1) return 1;
  //   return num * factorial(num - 1);
  // }
  // factorial(5) //➞ 3