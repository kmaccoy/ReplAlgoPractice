  // Sum of Odd and Even Numbers
  //URL: https://edabit.com/challenge/EY4nTmp6SbAmtJz5C
  
  // Write a function that takes an array of numbers and returns an array with two elements:
  
  // The first element should be the sum of all even numbers in the array.
  // The second element should be the sum of all odd numbers in the array.
  
  // create a function sumOddAndEven, that accepts an array of numbers as an argument/input
  function sumOddAndEven(arrOfNums){
    // We are going to test to see whether the number is even or odd. After that's found out, we can sum up all its corresponding even numbers & odd numbers, respectively.
    if( Math.max(...arrOfNums) === 0 && Math.min(...arrOfNums) === 0){
      return arrOfNums;
    }
    
    
    const evenNumSum = () => arrOfNums.filter(ele => ele %2 === 0).reduce( (a,b) => (a+b));
    
    const oddNumSum = () => arrOfNums.filter(ele => (ele % 2 === 1) || ele % 2 === -1 ).reduce((a,b) => (a+b));
    
    
    //We will return out an array of the sum of even numbers, followed by the sum of odd numbers. 
    return [evenNumSum(), oddNumSum()];
    }
    //Example
    //sumOddAndEven([1, 2, 3, 4, 5, 6]) // ➞ [12, 9]
    // # 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9
    
    //sumOddAndEven([-1, -2, -3, -4, -5, -6]) // ➞ [-12, -9])
    
    //sumOddAndEven([0, 0]) // ➞ [0, 0])