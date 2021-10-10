// Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

//Declare a function called 'convert' that accepts a number as an argument.
function convert(mins){
  //Return out the argument multiplied by 60.
  //60 seconds in each minute
  return mins * 60;
  }
  
  // Examples
  // convert(5) //➞ 300
  
  // convert(3) //➞ 180
  
  // convert(2) //➞ 120
  
  
  // Area of a Rectangle
  // Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.
  
  //Declare a function called area, that accepts 2 numbers as arguments
  function area(length, width){
  //Declare an if statement that checks if argument 1 or 2 are <= 0
  if(length <= 0 || width <= 0){
  //If so, return -1 immediately.
  return -1;
  } else{
  //Else, return length * width
  return length * width;
  }
  };
  
  // // Examples
  // area(3, 4) //➞ 12
  
  // area(10, 11) //➞ 110
  
  // area(-1, 5) //➞ -1
  
  // area(0, 2) //➞ -1
  
  // area(5, 0) // -1
  
  // How Many Vowels?
  // Create a function that takes a string and returns an object with the number (count) of each vowel contained within it.
  
  //Declare a function countVowels that accepts a string as an argument
  function countVowels(str){
    //Use .split method to break string apart into digestable bits for later.
    let splitString=str.split('');
    //Declare an object that will store the number of each vowel within.
    let numOfVowels={};
    //Declare a variable that identifies what vowels are.
    let vowels="aeiou";
  
    //Use previous split string and apply .forEach to compare each letter of a string to the previously declared vowel variable
    splitString.forEach((letter)=>{
      //Declare if statement that uses .indexOf method to compare each element. Also use .toLowerCase to ensure nothing is missed.
      if(vowels.indexOf(letter.toLowerCase())!==-1){
        //If the vowel passes, add to object.
        if(letter in numOfVowels){
          numOfVowels[letter]++;
          //Otherwise, keep checking
        }else{
          numOfVowels[letter]=1;
        }
      }   
  
   });
   //Return object
   return numOfVowels;    
  }
  
  // Examples
  //countVowels("Celebration") //➞ 5
  
  // countVowels("Palm") //➞ 1
  
  // countVowels("Prediction") //➞ 4
  
  // Notes
  // a, e, i, o, u are considered vowels (not y).
  // All test cases are one word and only contain letters.
  
  // Find the Second Largest Number
  // Create a function that takes an array of numbers and returns the second largest number.
  
  // Examples
  // secondLargest([10, 40, 30, 20, 50]) //➞ 40
  
  // secondLargest([25, 143, 89, 13, 105]) //➞ 105
  
  // secondLargest([54, 23, 11, 17, 10]) //➞ 23
  // Notes
  // There will be at least two numbers in the array.
  
  
  
  
  //console.log("Hello World!");
  
  // Find the Second Largest Number
  // Create a function that takes an array of numbers and returns the second largest number.
    function secondLargest(arrOfNum){
    //Using the array argument, sort the array, and then return the value of the second element. 
    return arrOfNum.sort(function compare(a,b){
      return b-a ;
    })[1]
    }
  
  // Examples
  //console.log(secondLargest([10, 40, 30, 20, 50])) //➞ 40
  
  // console.log(secondLargest([25, 143, 89, 13, 105])) //➞ 105
  
  // console.log(secondLargest([54, 23, 11, 17, 10])) //➞ 23
  
  // How Many Vowels?
  // Create a function that takes a string and returns an object with the number (count) of each vowel contained within it
  function howManyVowels(word){
  
  //Create an object, objVowels, that will contain all the vowels as keys and all the values set to 0. 
  const objVowels = {
    'a': 0,
    'e':0,
    'i':0,
    'o':0,
    'u':0,
  }
    
  //Iterate through the str's length
  for(let letter of word.toLowerCase()){
      //If the current element of the str is a vowel,
    if(letter in objVowels){
      //Increment the value within our objVowels
      objVowels[letter]++;
    }
  }
  //Return our objVowels object
    return objVowels
  }
  // console.log(howManyVowels('Timeo3'))// {  'a': 0,
  // //   'e':1,
  // //   'i':1,
  // //   'o':1,
  // //   'u':0,
  // // }
  // console.log(howManyVowels('Kevin?'))
  // // {  'a': 0,
  // //   'e':1,
  // //   'i':1,
  // //   'o':0,
  // //   'u':0,
  // // }
  
  // console.log(howManyVowels('COdesmith'))
  // // {  'a': 0,
  //   'e':1,
  //   'i':1,
  //   'o':1,
  //   'u':0,
  // }
  
  // Kids With the Greatest Number of Candies
  
  
  // Add to List
  
  // Share
  // Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
  // For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
  
  //Create a function, extraCandies, accept an array and a number
  function extraCandies(candies, extraCandies){
  // If the array has a length less than 1, return [];
  if(candies.length < 1) return [];
  //Declare a variable, maxCandies and we're assign this to be the largest number in  the array of candies.
  const maxCandies = Math.max(...candies);
  
  const resultArr = []
  
   function test(num) {
      return (num  + extraCandies)>= maxCandies
    }
  
  //Iterate through the candies array
    candies.map( ele => {
      return resultArr.push(test(ele));
    })
    
   
    //and at each element we're going to test to see if the element summed w/ the number is greater than or equal to the maxCandies.
      //We will push this value into an array. 
    return resultArr
  }
  
  // console.log(extraCandies([2,3,5,1,3], 3)) //[true,true,true,false,true] 
  // console.log(extraCandies([-10,3,0,1,100], 3))//[false,false,false,false,true]
  
  // // Example 1:
  
  // Input: candies = [2,3,5,1,3], extraCandies = 3
  // Output: [true,true,true,false,true] 
  // Explanation: 
  // Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
  // Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
  // Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
  // Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
  // Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
  
  
  
  
  // Richest Customer Wealth
  
  
  // You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
  
  // A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
  
  // function largestWealth(bankAccount){
  function largestWealth(bankAccount){
  //Declaring a value, largestAccount and assign it the value of the first element of the nested array.
    let largestAccount = bankAccount[0][0];
  //Iterate over the bankAccount nested arrays, 
    for(let account of bankAccount){
      //sum up all the values,
      let test = account.reduce((a, b) => (a+b));
      if(test >= largestAccount) largestAccount = test;
          //Test to see if the that summation is greater than or equal to our current largestAccount val. If so, reassign it to this summation value. 
    }
  //Return largestAccount
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
  function rectangleArea(length, width){
  
  //Any input that are negative or are not integers/floats - return a statement saying invalid input. 
    if( Math.sign(length) === -1 || Math.sign(width) === -1 || typeof(length) != "number" || typeof(width) != "number") return -1;
  
  // Formula of a rectangle: Length * Width - return the e.result of this operation with both arguments. 
    return length * width;
  }
  
  // console.log(rectangleArea(3,5))//15
  // console.log(rectangleArea([1,2,3],5))//-1
  // console.log(rectangleArea({},5))//-1
  // console.log(rectangleArea(-3,5))//-1
  
  
  // Move Capital Letters to the Front
  
  // Create a function that moves all capital letters to the front of a word.
  // Examples
  
  //Declare a function (capToFront) that accepts a string as an argument
  function capToFront(str) {
  //Sort out lowercase letters using the .filter method and the toLowerCase method. Will 'reorder string' with lowercases as they come
   let lowerCase = [...str].filter(l => l === l.toLowerCase())
  //Sort out uppercase letters using the .filter method and the toUpperCase method. Will 'reorder string' with uppercases as they come.
   let upperCase = [...str].filter(l => l === l.toUpperCase())
  //Return the string with toUpperCase first and toLowerCase second to ensure order is correct. Use .join method with empty string.
   return [...upperCase,...lowerCase].join("")
  }
  
  
  //capToFront("hApPy") //➞ "APhpy"
  
  // capToFront("moveMENT") //➞ "MENTmove"
  
  // capToFront("shOrtCAKE") //➞ "OCAKEshrt"
  
  
  // The Reverser!
  
  // The "Reverser" takes a string as input and returns that string in reverse order.
  // Examples
  
  function reverse(str){
      return str.split("").reverse().join("");
  }
  
  // reverse("Hello World") //➞ "dlroW olleH"
  
  // reverse("ReVeRsE") //➞ "EsReVeR"
  
  // reverse("Radar") //➞ "radaR"
  
  // Nth Fibonacci Number
  
  // Create a function to return the Nth number in the Fibonacci sequence as a string.
  // Examples
  
  //Declare a function that takes a single number as an argument.
  function fibonacci(num){
  //Declare a test case that returns 1 for any parameter that is less than or equal to 1.
  if(num <= 1){
    return 1
  } else {
  //Declare recusive statement that mirrors fibonacci sequence.
    return fibonacci(num - 1) + fibonacci(num - 2)
    }
  }
  
  //fibonacci(10) //➞ "55"
  
  // fibonacci(20) //➞ "6765"
  
  // fibonacci(30) //➞ "832040"
  
  // fibonacci(40) //➞ "102334155"
  
  // fibonacci(50) //➞ "12586269025"
  
  // fibonacci(60) //➞ "1548008755920"
  
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
  
  function factorial(num){
    if (num <= 1) return 1;
    return num * factorial(num - 1);
  }
  
  //factorial(8)