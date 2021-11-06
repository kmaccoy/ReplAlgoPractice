  // Basic Calculator
  // Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
  
  //Declare a function that takes 3 arguments; 2 numbers and 1 operator.

  //Declare if / else if statements covering different operators coupled with return statements that have a prewritten solution for each. 
  //Ex: if "+" { return num1 + num2};

  function calculator(num1, operator, num2){
    if (operator === '+'){
        return num1 + num2
      } else if (operator === '-'){
        return num1 - num2
      } else if(operator === '*'){
        return num1 * num2
      } else if(operator === '/'){
        return num1 / num2
      }
    };
    
    // Examples
    // calculator(2, "+", 2) // ➞ 4
    
    // calculator(2, "*", 8) //➞ 4
    
    // calculator(4, "/", 2) ➞ 2


    //convert to es6

    const basicCalc = (num1, op, num2) => {
      if(op === '+'){
        return num1 + num2;
      } else if(op === '-'){
        return num1 - num2;
      } else if(op === '*'){
        return num1 * num2;
      } else if(op === '/'){
        return num1 / num2;
      }
      else return 'Could not calculate';
    }