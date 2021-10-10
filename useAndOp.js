  // Using the "&&" Operator
  // JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
  
  // Consider a && b:
  
  // a is checked if it is true or false.
  // If a is false, false is returned.
  // b is checked if it is true or false.
  // If b is false, false is returned.
  // Otherwise, true is returned (as both a and b are therefore true ).
  // The && operator will only return true for true && true.
  
  
  
  // Make a function using the && operator.
  
  //Declare function trueFalse that accepts booleans
  function trueFalse(bool1, bool2){
    //Declare if statement that checks if true & true.
      if(bool1 && bool2 === true){
        return true;
      } else {
        return false;
      }
    //Else, return false.
    }
    
    // Examples
    //trueFalse(true, false) //➞ false
    
    //trueFalse(true, true) //➞ true
    
    //trueFalse(false, true) //➞ false
    
    //trueFalse(false, false) //➞ false