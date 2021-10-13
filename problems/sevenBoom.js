  // Seven Boom!
  // Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
  
  //Declare a function that accepts an array as an argument.
  
  function sevenBoom(arr){
    if (arr.includes(7)){
      return 'Boom!'
    } else {
      return 'There is no 7 in the array. =('
    }
  };
  
  //Challenge: Having the if statement idenfity 7's within larger numbers. EX: 107. Possibility: using the .split method to break apart each number with whitespace.
  
  // Examples
  //sevenBoom([1, 2, 3, 4, 5, 6, 7]) //➞ "Boom!"
  // // 7 contains the number seven.
  
  //sevenBoom([8, 6, 33, 100]) //➞ "there is no 7 in the array"
  // // None of the items contain 7 within them.
  
  //sevenBoom([2, 55, 60, 97, 86]) //➞ "Boom!"
  // // 97 contains the number seven.