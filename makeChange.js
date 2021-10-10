  // Making Change
  
  // Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.
  
  //Declare a function (makeChange) that accepts a number as a parameter.
  function makeChange(num){
    //Delcare a variable (changeToBreak) that is the value of the parameter and can be mutated.
    let changeToBreak = num;
    
    //Declare an empty object with Quarters, Dimes, Nickels, and Pennies (Largest to smallest) and have all values = 0.
    const coinsCollected = {'q' : 0, 'd' : 0, 'n' : 0, 'p' : 0}
    //Declare a while loop that runs until changeToBreak is 0.
    while(changeToBreak > 0){
      //Declare if statement that checks if parameter is greater than 25
      if(changeToBreak >= 25){
      //If true, subtract 25 from changeToBreak, add 1 quarters to object.
      changeToBreak -= 25
      coinsCollected['q'] += 1
      } else if(changeToBreak >= 10){
      //If false, make else if check to check if parameter is greater than 10
      //If true, subtract 10 from changeToBreak, add 1 dimes to object.
      changeToBreak -= 10
      coinsCollected['d'] += 1
      } else if(changeToBreak >= 5){
      //Repeat process for Dimes and Pennies.
      changeToBreak -= 5
      coinsCollected['n'] += 1
      } else if(changeToBreak >= 1){
        changeToBreak -= 1
        coinsCollected['p'] += 1
      }
    }
    //Return out object
    return coinsCollected;
    }
    
    // Examples
    
    //makeChange(47) //➞ { "q": 1, "d": 2, "n": 0, "p": 2 }
    
    //makeChange(24) //➞ { "q": 0, "d": 2, "n": 0, "p": 4 }
    
    //makeChange(92) //➞ { "q": 3, "d": 1, "n": 1, "p": 2 }