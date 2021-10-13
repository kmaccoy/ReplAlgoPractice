  //Problem: Multiplying Numbers in a strings
  //Url: https://edabit.com/challenge/TzxoYExuxuQw2ahWR
  
  // Given a string of numbers separated by a comma and space, return the product of the numbers.
  // Notes
  // Bonus: Try to complete this challenge in one line!
  
  // Declare a function (multiplyNums) that accepts one string as an argument.
  // Use parseInt to convert string into integer base.
  // Push integer items into array, name toMultiply
  // Declare a multiplied variable, set it to 1
  // Declare basic for loop, iterate through toMultiply
  // Multiply elements from array, update multiplied variable.
  // return out multiplied variable.

  function multiplyNums(str){
    // let parsed = parseInt(str);
    // console.log(parsed)
    let toMultiply = str.split(' ')
    //console.log(toMultiply)
    let multiplied = 1;
    for (let i = 0; i < toMultiply.length; i++){
      multiplied = multiplied * parseInt(toMultiply[i])
      }
    return multiplied;
  }
    
    //Examples
    // multiplyNums("2, 3") //➞ 6
    
    // multiplyNums("1, 2, 3, 4")// ➞ 24
    
    // multiplyNums("54, 75, 453, 0")// ➞ 0
    
    // multiplyNums("10, -2") //➞ -20