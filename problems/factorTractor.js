  // Factor Tractor
  // URL: https://edabit.com/challenge/zWf4ayT7nbTsxYgRe
  // Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.
  
  // Create a function primeFactorize, that accepts a number. We will also create default parameters labeled pFactor  - assigned the value of 2 and test - assigned the value of number
  //Calculate whether pFactor is a prime number. 
  // Iterate from 2 all the way to pFactor. 
  //If it is not divisible & at the same time, the iterator is not equal to pFactor, return true
  //If the pFactor happens to be divisible by num and also is a prime number, we will create a variable called quotient and assign to be the result of number / pFactor, and then return out an array, with pFactor and quotient. 
  //Return primeFactorize, while also incrementing pFactor before it's returned. 

  function primeFactorize(number, pFactor = 2, test = true){
  
      for(let i = 1; i <= pFactor; i++){
        console.log('I is', i, 'pFactor is', pFactor)
        if(pFactor % i === 0 && pFactor/i !== 1 && i !==1){
          console.log(i)
            test = false;
        }
      }
    
    console.log(test)
    //base case: 
      if(test){
        if(number % pFactor === 0){
        
          let quotient = number/ pFactor;
          if(quotient !== 1){
          return [pFactor, quotient]
          } else return [pFactor]
        }
      }
    
    // Recursive vall: 
      return primeFactorize(number, ++pFactor, test= true)
    }
    
    // Examples
    // primeFactorize(25) //➞ [5, 5]
    
    //  primeFactorize(19) //➞ [19]
    
    //  primeFactorize(77) //➞ [7, 11]