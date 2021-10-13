  // Area of a Rectangle
  // Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.
  
  //Declare a function called area, that accepts 2 numbers as arguments
  //Declare an if statement that checks if argument 1 or 2 are <= 0
  //If so, return -1 immediately.
  //Else, return length * width

  function area(length, width){
    if(length <= 0 || width <= 0){
      return -1;
      } else{
      return length * width;
    }
  };
    
    // // Examples
    // area(3, 4) //➞ 12   
    // area(10, 11) //➞ 110   
    // area(-1, 5) //➞ -1   
    // area(0, 2) //➞ -1   
    // area(5, 0) // -1