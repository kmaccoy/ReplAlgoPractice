  //Problem: Multiplying Numbers in a strings
  //Url: https://edabit.com/challenge/TzxoYExuxuQw2ahWR
  
  // Given a string of numbers separated by a comma and space, return the product of the numbers.
  // Notes
  // Bonus: Try to complete this challenge in one line!
  
  //Declare a function (multiplyNums) that accepts one string as an argument.
  function multiplyNums(str){
    // //Use parseInt to convert string into integer base.
    // let parsed = parseInt(str);
    // console.log(parsed)
    //Push integer items into array, name toMultiply
    let toMultiply = str.split(' ')
    //console.log(toMultiply)
    //Declare a multiplied variable, set it to 1
    let multiplied = 1;
    //Declare basic for loop, iterate through toMultiply
    for (let i = 0; i < toMultiply.length; i++){
      //Multiply elements from array, update multiplied variable.
      multiplied = multiplied * parseInt(toMultiply[i])
      }
    // return out multiplied variable.
    return multiplied;
    }
    
    //Examples
    // multiplyNums("2, 3") //➞ 6
    
    // multiplyNums("1, 2, 3, 4")// ➞ 24
    
    // multiplyNums("54, 75, 453, 0")// ➞ 0
    
    // multiplyNums("10, -2") //➞ -20