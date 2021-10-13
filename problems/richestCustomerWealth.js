  // Richest Customer Wealth
  
  
  // You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
  
  // A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
  
  // function largestWealth(bankAccount){

    //Declaring a value, largestAccount and assign it the value of the first element of the nested array.
    //Iterate over the bankAccount nested arrays, 
    //sum up all the values,
    //Test to see if the that summation is greater than or equal to our current largestAccount val. If so, reassign it to this summation value. 
    //Return largestAccount

    function largestWealth(bankAccount){
        let largestAccount = bankAccount[0][0];
        for(let account of bankAccount){
          let test = account.reduce((a, b) => (a+b));
          if(test >= largestAccount) largestAccount = test;
        }
          return largestAccount;
    }
      // console.log(largestWealth([[1,2,3],[3,2,1]]))// 6
      // console.log(largestWealth([[1,2,3],[3,2,1], [1,2,0],[3,-1,1], [1,20,3],[6,2,1]]))// 24
      
      
      // Example 1:
      
      // Input: accounts = [[1,2,3],[3,2,1]]
      // Output: 6
      // Explanation:
      // 1st customer has wealth = 1 + 2 + 3 = 6
      // 2nd customer has wealth = 3 + 2 + 1 = 6
      // Both customers are considered the richest with a wealth of 6 each, so return 6.
      
      
      // Area of a Rectangle
      // Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.
      
      //Any input that are negative or are not integers/floats - return a statement saying invalid input. 
      // Formula of a rectangle: Length * Width - return the e.result of this operation with both arguments. 

      function rectangleArea(length, width){
      
        if( Math.sign(length) === -1 || Math.sign(width) === -1 || typeof(length) != "number" || typeof(width) != "number") return -1;
      
        return length * width;
      }
      
      // console.log(rectangleArea(3,5))//15
      // console.log(rectangleArea([1,2,3],5))//-1
      // console.log(rectangleArea({},5))//-1
      // console.log(rectangleArea(-3,5))//-1