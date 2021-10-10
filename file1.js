// Create a function which returns the number of true values there are in an array.

//create a function, countTrue, which accepts an array of 
//boolean values
function countTrue(array){
  //declare a variable, counter, and assign it the value of 0
  let counter = 0;
  
  //iterate through the array, using a for loop, and at 
  for(let i = 0; i < array.length; i++){
      //each element, check to see if it's equal to true
      if(array[i]) counter++;
            //if so, increment counter by 1. 
  }
  
  //return our counter variable
  return counter;
  }
  
  // Examples
   //countTrue([true, false, false, true, false])// ➞ 2
  
  //countTrue([false, false, false, false]) //➞ 0
  
   //countTrue([]) //➞ 0
  // Notes
  // Return 0 if given an empty array.
  // All array items are of the type bool (true or false).
  
  
  
  
  
  // Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
  
  // create a function minMax, which takes an array of nums,
  // and returns out an array with smallest to largest.
  function minMax(arr){
  //declare variable called result, stores smallest and largest.
  result = []
  largest = arr[0]
  smallest = arr[0]
  //iterate through the array, using a for loop(basic)
  for(let i = 0; i < arr.length; i++){
      //if statement testing against other elements if largest.
      if(arr[i] > largest){
        //if yes, add to array
        largest = arr[i]
      } else if(arr[i] < smallest){
        smallest = arr[i]
      }
  }
  result.push(smallest)
  result.push(largest)
  //return the array.
  return result;
  }
  // Examples
  //minMax([1, 2, 3, 4, 5]) //➞ [1, 5]
  
   //minMax([2334454, 5]) //➞ [5, 2334454]
  
   // minMax([1]) //➞ [1, 1]
  // Notes
  // All test arrays will have at least one element and are valid.
  
  
  // Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
  
  //create a function, numInStr, that accepts the argument of an array full of strings.
  function numInStr(array){
  //Declare a variable, result, and assign it to an empty array. 
  const result = [];
  //Iterate through the array of strings  
  for( let element of array){
  
  //Iterate through the breakdown of each element, using the split method. 
  let newArray = element.split('')
  for(let i = 0; i < element.length; i++){
    if(parseInt(newArray[i])){
      //push this element into our result array
      if(!result.includes(element)){
      result.push(element);
      }
    }
  }
      //Check to see, at every element, if the evaluation of whether or not it is a number is true or false
          //If it's true, we're going to push the string into result. 
      
  }
  
  //Return result
  return result;
  }
  
  
  
  
  // Examples
  //numInStr(["1a", "a", "2b", "b"])// ➞ ["1a", "2b"]
  
  //numInStr(["abc", "abc10"]) //➞ ["abc10"] FAIL
  
  //numInStr(["abc", "ab10c", "a10bc", "bcd"])// ➞ ["ab10c", "a10bc"] FAIL
  
   //numInStr(["this is a test", "test1"])// ➞ ["test1"]
  // Notes
  // The strings can contain white spaces or/ any type of characters.
  // Bonus: Try solving this without regex.
  /// console.log(isNaN("1a")) //true
  // console.log(isNaN("abc"))
  //console.log(parseInt('abc123')) //nAn
  
  // Find the Discount
  
  // Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.
  
  //Declare a function (dis) that takes original price and discount as parameters
  function dis(price, discount){
    //Declare variable for discounted amount
    let discountAmount = 0;
    
    //Declare variable for discount price
    let discountPrice = 0;
  
    //Write out operation to find the discount amount.
    discountAmount = (discount / 100)*price;
    //console.log(discountAmount)
    //Write out operation to apply discount amount to discounted price.
    discountPrice = (price - discountAmount);
  
    //Return out discounted price.
    return discountPrice;
  }
  
  
  // Examples
  
   //dis(1500, 50) //➞ 750
  
  //dis(89, 20) //➞ 71.2
  
  //dis(100, 75) //➞ 25
  
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
  
  
  // Add up the Numbers from a Single Number
  
  // Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
  
  //Declare a function (addUp) that takes a number as a parameter.
  
  //Declare a variable that stores the total.
  
  //
  
  // Examples
  
  // addUp(4) //➞ 10
  
  // addUp(13) //➞ 91
  
  // addUp(600) //➞ 180300
  
  
  //Transform upvotes
  //Url: https://edabit.com/challenge/niTEsddTdE4gs4YGX
  //tags: arrays, higher-order functions and strings.
  
  // Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.Return the upvotes as an array.
  
  //Create a function that takes a string of upvotes (transformUpvotes) and returns an array of numbers.
  function transformUpvotes(upvotes){
  
  //Use .split and .map methods to return out array.
  return upvotes.split(" ").map(callback => {
  
    // Declare variable to use parse method on. Coupled with float.
    let parsed = parseFloat(callback);
    // Have anything with 'k' be plugged into a math operation, that multiples by 1000
    // Return out product.
    return callback.endsWith('k') ? parsed * 1000 : parsed;
    })
  }
  
  // Examples
  // transformUpvotes("6.8k 13.5k") //➞ [6800, 13500]
  
  // transformUpvotes("5.5k 8.9k 32")// ➞ [5500, 8900, 32]
  
  // transformUpvotes("20.3k 3.8k 7.7k 992")// ➞ [20300, 3800, 7700, 992]
  
  
  // Sum of Odd and Even Numbers
  //URL: https://edabit.com/challenge/EY4nTmp6SbAmtJz5C
  
  // Write a function that takes an array of numbers and returns an array with two elements:
  
  // The first element should be the sum of all even numbers in the array.
  // The second element should be the sum of all odd numbers in the array.
  
  // create a function sumOddAndEven, that accepts an array of numbers as an argument/input
  function sumOddAndEven(arrOfNums){
  // We are going to test to see whether the number is even or odd. After that's found out, we can sum up all its corresponding even numbers & odd numbers, respectively.
  if( Math.max(...arrOfNums) === 0 && Math.min(...arrOfNums) === 0){
    return arrOfNums;
  }
  
  
  const evenNumSum = () => arrOfNums.filter(ele => ele %2 === 0).reduce( (a,b) => (a+b));
  
  const oddNumSum = () => arrOfNums.filter(ele => (ele % 2 === 1) || ele % 2 === -1 ).reduce((a,b) => (a+b));
  
  
  //We will return out an array of the sum of even numbers, followed by the sum of odd numbers. 
  return [evenNumSum(), oddNumSum()];
  }
  //Example
  //sumOddAndEven([1, 2, 3, 4, 5, 6]) // ➞ [12, 9]
  // # 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9
  
  //sumOddAndEven([-1, -2, -3, -4, -5, -6]) // ➞ [-12, -9])
  
  //sumOddAndEven([0, 0]) // ➞ [0, 0])
  
  //Spicy food 
  //Url: https://edabit.com/challenge/WoFZTyrayj9f2FPwD
  // The facts are:
  
  // You've just finished dinner.
  // You love spicy food but your friend hates it.
  // Given your friend's unfortunate taste preferences, you decide to split the bill only for non-spicy items. You will pay in full for the spicy dishes.
  // Given two ordered arrays, one classifying the dishes as spicy vs. non-spicy and the other listing their prices, write a function that outputs an array where the first element is how much you pay and the second element is how much your friend pays.
  // The dishes are in the same order for both input arrays.
  // Remember to output an array in this order: [your payment, friend's payment]
  // The array will contain at least one non-spicy dish N (you're not going to let your poor friend go hungry, are you?).
  // Express both payments as integers.
  
  // Declare a function (billSplit) that accepts TWO arrays, one with the 'class' of dish, the other the prices.
  
  function billSplit(foodArr, priceArr){
  
    // Delcare empty array 'myBill'
    let myBill = []
    // Declare empty array 'friendBill'
    let friendBill = []
  
    // Basic for loop.
    for (let i = 0; i < foodArr.length; i++){
    // Within, 'if' statement to break apart arrays.
    if(foodArr[i] === "S"){
    // If 's', corresponding element from second array added to 'myBill'.
    myBill.push(priceArr[i])
    //console.log(priceArr[i])
    } else if(foodArr[i] === "N"){
    //Any 'n' elements and corresponding from second array added to 'friendBill'.
    friendBill.push(priceArr[i]/2)
    myBill.push(priceArr[i]/2)
    // console.log(priceArr[i])
      }
    }
  // Use reduce method to add up each array total.
  let myTotalBill = myBill.reduce((a,b) => (a+b));
  let myfriendTotalBill = friendBill.reduce((a,b) => (a+b));
  //console.log(myTotalBill)
  //console.log(myfriendTotalBill)
  // Return out both arrays as one array.
  return [myTotalBill, myfriendTotalBill]
  }
  
  //billSplit(["S", "N", "S", "S"], [13, 18, 15, 4]) // ➞ [41, 9]
  
  // Since:
  // You pay: [13, 9, 15, 4] = 41
  // Friend pays: [0, 9, 0, 0] = 9
  //Examples
  //billSplit(["N", "S", "N"], [10, 10, 20])// ➞ [25, 15]
  // You pay for half of both "N" dishes (5 + 10) and entirely pay for the "S" dish (10).
  
  //billSplit(["N", "N"], [10, 10])// ➞ [10, 10]
  
  // billSplit(["S", "N"], [41, 10]) //➞ [46, 5]
  
  
  
  // Factor Tractor
  // URL: https://edabit.com/challenge/zWf4ayT7nbTsxYgRe
  // Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.
  
  // Create a function primeFactorize, that accepts a number. We will also create default parameters labeled pFactor  - assigned the value of 2 and test - assigned the value of number
  function primeFactorize(number, pFactor = 2, test = true){
  
  //Calculate whether pFactor is a prime number. 
    // Iterate from 2 all the way to pFactor. 
    //If it is not divisible & at the same time, the iterator is not equal to pFactor, return true
    for(let i = 1; i <= pFactor; i++){
      console.log('I is', i, 'pFactor is', pFactor)
      if(pFactor % i === 0 && pFactor/i !== 1 && i !==1){
        console.log(i)
          test = false;
      }
    }
  
  console.log(test)
  //base case: 
    //If the pFactor happens to be divisible by num and also is a prime number, we will create a variable called quotient and assign to be the result of number / pFactor, and then return out an array, with pFactor and quotient. 
    if(test){
      if(number % pFactor === 0){
      
        let quotient = number/ pFactor;
        if(quotient !== 1){
        return [pFactor, quotient]
        } else return [pFactor]
      }
    }
  
  // Recursive vall: 
   //Return primeFactorize, while also incrementing pFactor before it's returned. 
    return primeFactorize(number, ++pFactor, test= true)
  }
  
  // Examples
  // primeFactorize(25) //➞ [5, 5]
  
  //  primeFactorize(19) //➞ [19]
  
  //  primeFactorize(77) //➞ [7, 11]
  
  
  //Combinatorial Exploration
  //Url: https://edabit.com/challenge/YE9n7my9REKyReMjP
  
  // Given a known number of unique items, how many ways could we arrange them in a row?
  
  // Create a function that takes an integer n and returns the number of digits of the number of possible permutations for n unique items. For instance, 5 unique items could be arranged in 120 unique ways. 120 has 3 digits, hence the integer 3 is returned.
  
  //Declare a function that takes an integer "n"
  
  function noPermsDigits(num){
    
    let lengthOfDigits = 0;
  
    function factorialFind(num){
      // Basecase. Return if 1 or 0.
      if (num <= 1) return 1;
      return num * noPermsDigits(num - 1);
    }
    //Return the number of digits of the number of pissible permutations for n unique items.
    return lengthOfDigits;
  
  }
  
  // Examples
  noPermsDigits(0) //➞ 1
  
  // noPermsDigits(1) ➞ 1
  
  // noPermsDigits(5) ➞ 3
  
  // noPermsDigits(8) ➞ 5
  // Notes
  // This challenge requires some understanding of combinatorics.
  
  // Factorial Code
  
  
  // function factorial(num){
  //   if (num <= 1) return 1;
  //   return num * factorial(num - 1);
  // }
  // factorial(5) //➞ 3
  
  // Return the First Element in an Array
  // Create a function that takes an array containing only numbers and return the first element.
  
  function getFirstValue(arr){
    return arr[0]
  }
  
  // Examples
  // getFirstValue([1, 2, 3]) //➞ 1
  
  // getFirstValue([80, 5, 100]) //➞ 80
  
  // getFirstValue([-500, 0, 50]) //➞ -500
  
  // Convert Hours into Seconds
  // Write a function that converts hours into seconds.
  
  function howManySeconds(num){
    return num * 60 * 60
  }
  
  // Examples
  // howManySeconds(2) //➞ 7200
  
  // howManySeconds(10) //➞ 36000
  
  // howManySeconds(24) //➞ 86400
  
  function minAndMax(array){
  let largest = array[0];
  let smallest = array[0];
  
  for(let i = 0; i < array.length; i++){
    if(array[i] <= smallest) smallest = array[i];
    if(array[i] >= largest) largest = array[i];
    }
  return [smallest, largest]
  }
  
  //minAndMax([3, 66, 93, 1, 12])
  
  // Find the Discount
  // Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.
  
  //Declare a function that takes 2 arguments, the original price and discount percent
  function discounter(price, discount){
  //Declare a variable that holds the amount to discount off the original price.
  let amountToDiscount  = 0;
  //Declare a variable that has the final discounted price.
  let finalDiscountedPrice = 0;
  //Set discount amount by multiplying price by discount amount as a decimal
  amountToDiscount = (discount / 100) * price;
  console.log(amountToDiscount);
  //Set final discount by subtracting the price by the discount amount.
  finalDiscountedPrice = price - amountToDiscount;
  //Return the final discount
  return finalDiscountedPrice;
  };
  // Examples
  //discounter(1500, 50) //➞ 750
  
  //discounter(89, 20) //➞ 71.2
  
  //discounter(100, 75) //➞ 25
  
  // Add up the Numbers from a Single Number
  // Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
  
  function addUp(n) {
    if (n == 1) return 1;
    return n + addUp(n - 1);
  }
  
  // // Examples
  // addUp(4) //➞ 10
  
  // addUp(13) //➞ 91
  
  // addUp(600) //➞ 180300
  // Notes
  
  // Basic Calculator
  // Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
  
  //Declare a function that takes 3 arguments; 2 numbers and 1 operator.
  function calculator(num1, operator, num2){
  //Declare if / else if statements covering different operators coupled with return statements that have a prewritten solution for each. Ex: if "+" { return num1 + num2};
  if (operator === '+'){
    return num1 + num2
  } else if (operator === '-'){
    return num1 - num2
  } else if(operator === '*'){
    return num1 * num2
  } else if(operator === '/'){
    return num1 / num2
  }
  }
  
  // Examples
  // calculator(2, "+", 2) // ➞ 4
  
  // calculator(2, "*", 8) //➞ 4
  
  // calculator(4, "/", 2) ➞ 2
  
  // Find the Smallest and Biggest Numbers
  // Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
  
  //Declare a function that accepts an array as an argument
  function minMax(arr){
    //Declare am empty array that will be returned out with the largest and smallest numbers
    let smallestLargest = []
    //Declare a variable for the smallest number using math.min
    let smallest = Math.min(...arr)
    //Declare a variable for the largest number using math.max
    let largest = Math.max(...arr)
    //Push smallest and largest numbers.
    smallestLargest.push(smallest, largest)
    return smallestLargest;
    //Return the array.
  }
  
  // Examples
  // minMax([1, 2, 3, 4, 5]) //➞ [1, 5]
  
  // minMax([2334454, 5]) //➞ [5, 2334454]
  
  // minMax([1]) //➞ [1, 1]
  
  // minMax([-1, 4, 222, 13, 293, -40, 0])
  
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
  
  // Frames Per Second
  // Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
  
  //Declare a function that accepts two arguements, numFrames and minutes.
  function frames(numFrames, numMins){
  //Return total by multiplying numFrames by 60, multiplied by number of minutes.
    return (numFrames*60) * numMins;
  }
  
  // // Examples
  // frames(1, 1) //➞ 60
  
  // frames(10, 1) //➞ 600
  
  // frames(10, 25) //➞ 15000
  
  // Add up the Numbers from a Single Number
  // Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
  
  //Declare a function that accepts a number as an argument.
  function addUp(num){
  //Declare a count variable
    let count = 0;
  //Declare a currentSum variable.
    let currentSum = 0;
  //While loop that runs while count is <= number argument.
    while (count <= num){
  //Within while loop, have currentSum + count.
      currentSum = currentSum + count
  //Increment count
      count++
    }
  //Return currentSum when while loop is done.
  return currentSum;
  }
  
  // // Examples
  // addUp(4) //➞ 10
  
  // addUp(13) //➞ 91
  
  // addUp(600) //➞ 180300
  
  
  // Return the Factorial
  // Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.
  
  //Declare a function (factorial) that accepts a number as an argument.
  function factorial(num){
  //Declare if statement that returns anything that is <= 1 as 1
  if (num <= 1){
    return 1;
  }
  //Declare a return that takes argument * the function factorial (num - 1)
  return num * factorial(num -1);
  }
  
  // Examples
  // factorial(3) //➞ 6
  
  // factorial(5) //➞ 120
  
  // factorial(13) //➞ 6227020800
  
  
  
  // Rock, Paper, Scissors
  // Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.
  
  // Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:
  
  // Rock beats Scissors
  // Scissors beats Paper
  // Paper beats Rock
  // If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw".
  
  //Declare a function that accepts two strings as arguments.
  function rps(p1, p2){
  
  //Declare if statement that checks if P1 and P2 equal one another. If true, return draw.
    if(p1 === p2){
      return `It's a draw.`
  // If there is no draw, begin comparing the arguments against one another. Scissors beats Paper.
    } else if (p1 === 'Scissors' && p2 === 'Paper'){
      return 'The winner is p1'
  // Paper beats Rock.
    } else if (p1 === 'Paper' && p2 === 'Rock'){
      return 'The winner is p1'
  // Rock beats Scissors.
    } else if (p1 === 'Rock' && p2 === 'Scissors'){
      return 'The winner is p1'
  // If player 1 has not played Scissors over Paper, Paper over Rock, or Rock over Scissors, it is assumed player 2 is the winner.
    } else {
      return 'The winner is p2'
    }
  }
  // Examples
  // rps("Rock", "Paper") //➞ "The winner is p2"
  
  // rps("Scissors", "Paper") //➞ "The winner is p1"
  
  // rps("Paper", "Paper") //➞ "It's a draw"
  
  // rps("Scissors", "Rock") // Player 2
  
  
  
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
  
  // Title: Fibonacci Recursion
  // Link: https://edabit.com/challenge/Cfe88oSTXyxihiPhu
  
  // The Fibonacci sequence is a classic use case for recursive functions since the value of the sequence at a given index is dependent on the last two values. More precisely, it's dependent on the sum of the previous two values.
  
  // Write a function named fib that takes an integer n as its input. It should return the Fibonacci sequence's value at index n.
  
  //Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...
  
  //Create a function, fib, that accepts an integer n and has a default parameter, sum assigned to 0
  function fib(n){
  // Base case: if n is strictly equal to 1 or 2, we will return 1. 
  if( n === 1 || n === 2) return 1;
   
  //Recursive case,
      //Return fib, w/ it assigned to be equal to n-1 + n-2
    return fib(n-1)+ fib(n-2)
  
  }
  // Examples
  
  // console.log(fib(6))//➞ 8
  // // 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
  
  // fib(1) //➞ 1
  
  // fib(2) //➞ 1
  
  //Dashed Vowels
  //https://edabit.com/challenge/QQxJqZnfFN6mPcBCr
  
  // Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).
  // A string can contain uppercase and lowercase vowels.
  // Y is not considered a vowel.
  
  //Create a function (dashed) that accepts a string as an argument.
  function dashed(str){
  //Declare an array that houses all vowels (excluding Y)
  let vowels = ['a', 'e', 'i', 'o', 'u']
  //Use split method to turn argument string into array.
  let lettersToTest = str.split('')
  //console.log(lettersToTest)
  //Declare empty string to return out.
  let dashedString = ''
  // Use for loop, to iterate through each element of new array, that is our string.
  for(let i = 0; i < lettersToTest.length; i++){
  // Use an if statement to compare each element versus the vowels array. If the elemnt is a vowel, we immediately add that element to new string with dashes.
  //Use .toLowerCase to ensure all vowels are recognized no matter what.
  if(vowels.includes(lettersToTest[i].toLowerCase())){
    dashedString += `-${lettersToTest[i]}-`
    //console.log(dashedString)
  } else {
  // If element IS a string, ad dashes on either side of it.
  // Y is not considered a vowel in this case.
  dashedString += `${lettersToTest[i]}`
      }
    }
  //Return out now filled string variable with complete item.
  return dashedString;
  }
  // Examples
  // dashed("Edabit") //➞ "-E-d-a-b-i-t"
  
  // dashed("Carpe Diem") //➞ "C-a-rp-e- D-i--e-m"
  
  // dashed("Fight for your right to party!")// ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
  
  //I went ahead and finished the problem on my own when I was practicing. Literally the last thing that was needed to do is add the final it of logic to the else statement. It passed all three tests. =)
  
  
  
  
  // 1470. Shuffle the Array
  // Link: https://leetcode.com/problems/shuffle-the-array/
  
  // Share
  // Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
  
  // Return the array in the form [x1,y1,x2,y2,...,xn,yn].
  
   // Creating a function w/ shuffle, that accepts an array and a number n. 
  function shuffle(arr, n){
   // We will slice the array intot two sub arrays, arr1 and arr2. with the median being n. 
  
  const arr1 = arr.slice(0,n);
  const arr2 = arr.slice(n, arr.length);
  
  const result =[];
   //Iterate using a for loop, over the length of either subarray. And we will push the respective elements of each subarray into our new array, result. 
  for(let i = 0; i < arr1.length; i++){
    result.push(arr1[i], arr2[i]);
  }
  //Return result. 
  return result;
  }
  
  // console.log(shuffle([2,5,1,3,4,7], 3))//[2,3,5,4,1,7] 
  // console.log(shuffle([1,2,3,4,4,3,2,1], 4))//[1,4,2,3,3,2,4,1] 
  // console.log(shuffle([1,1,2,2], 2))
  
  // Example 1:
  
  // Input: nums = [2,5,1,3,4,7], n = 3
  // Output: [2,3,5,4,1,7] 
  // Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
  // Example 2:
  
  // Input: nums = [1,2,3,4,4,3,2,1], n = 4
  // Output: [1,4,2,3,3,2,4,1]
  // Example 3:
  
  // Input: nums = [1,1,2,2], n = 2
  // Output: [1,2,1,2]
   
  
  // Constraints:
  
  // 1 <= n <= 500
  // nums.length == 2n
  // 1 <= nums[i] <= 10^3
  
  
  //Url to prob
  //https://edabit.com/challenge/XcfmvhpRp4t3tQWG2
  
  // There are many different styles of music and many albums exhibit multiple styles. Create a function that takes an array of musical styles from albums and returns how many styles are unique.
  
  /*
  Plan:
  // Making function that takes an array
  // Declare an empty array "isUnique" that'll hold each unqiue style
  // Use for loop to iterate through parameter.
  // Utilize the includes method. If the style is not already present, add new style to the "isUnique" array
  // Return out the lenghth of "isUnique"
   */
  
  //Delcare function that accepts one array as an argument.
  function uniqueStyles(arr){
    const isUnique = []
    //Outer for loop will split apart the "arr" array.
    for(let i = 0; i < arr.length; i++){
      let splitStyles = arr[i].split(',')
      //console.log(splitStyles)
      //Inner for loop will do the comparisons.
      for(let j = 0; j < splitStyles.length; j++){
        if(isUnique.includes(splitStyles[j])){
          //console.log('There was something here.')
        } else {
          isUnique.push(splitStyles[j])
        }
      }
    }
    //console.log(isUnique)
    return isUnique.length;
  }
  
  
  
  // //Examples
  // uniqueStyles([
  //   "Dub,Dancehall",
  //   "Industrial,Heavy Metal",
  //   "Techno,Dubstep",
  //   "Synth-pop,Euro-Disco",
  //   "Industrial,Techno,Minimal"
  // ]) //➞ 9
  
  // uniqueStyles([
  //   "Soul",
  //   "House,Folk",
  //   "Trance,Downtempo,Big Beat,House",
  //   "Deep House",
  //   "Soul"
  // ]) //➞ 7
  
  
  // Exact Factorial Bounds
  // Create a function that tests if a number is the exact upper bound of the factorial of n. If so, return an array of the exact factorial bound and n, or otherwise, the string "Not exact!".
  // Link: https://edabit.com/challenge/jFqttm7eFe8j4WMPu
  
  // create a funcion, isExact that accepts a potential upperbound of a factorial. 
  function isExact(testFactorial){
  
    let upperBound = 1;
    let factorialNum = 1;
  //Set up a while loop that starts at 1, and continualy multiplies under the condition that the result is less than or equal to the potential upperbound. 
  while(upperBound < testFactorial){
    console.log(upperBound, factorialNum)
       factorialNum++;
      upperBound *= factorialNum;
  }
  //If we've gone throgh all iterations and the pot. upperbound is not strictly equal to the returned value of the funcion, return the string, Not exact
  if(upperBound !== testFactorial) return 'Not exact!'
  
  //Else, return an array, with the upp. val and the factorial of upp. val. 
  return [upperBound, factorialNum]
  }
  // console.log(isExact(125))// 'Not Exact'
  // console.log(isExact(6))//[6,3]
  // console.log(isExact(1024)) //'Not exact'
  // console.log(isExact(40320))//[40320,8]
  
  
  // Examples
  // isExact(6) //➞ [6, 3]
  
  // isExact(24) //➞ [24, 4]
  
  // isExact(125) //➞ "Not exact!"
  
  // isExact(720) //➞ [720, 6]
  
  // isExact(1024) //➞ "Not exact!"
  
  // isExact(40320) //➞ [40320, 8]
  
  
  //Scoring a field goal
  //Url: https://edabit.com/challenge/uauDJo55B8nYc9mLZ
  
  // In (American) Football, a team can score if they manage to kick a ball through the goal (i.e. above the crossbar and between the uprights).
  
  // Create a function that returns true if the ball 0 goes through the goal. You will be given an array of arrays.
  // All goals will be of the same size.
  // All arrays will be of equal length (11).
  // A team can never score if it hits the crossbar or goes underneath it
  
  // //Declare a function (isGoalScored) that accepts a nested array that looks like a goalpost.
  // function isGoalScored(arr){
  // //Declare a for loop that only iterates three times. Since goalpost only occupies the first 3 elements of nested array.
  // for (let i = 0; i < 3; i++){
  //   //Declare variable that's set to the zero'th element of array[i] use indexOf method for '0'
  //   let index = arr[i][0].indexOf('0')
  //   //console.log(index)
  //   //If statement that looks for if "0" is > 4 and < 8, return true.
  //   if(index >= 3 && index <= 9){
  //     return true;
  //   }  
  //   }
  //   return false;
  // }
  
  // //Examples
  // //console.log(isGoalScored([
  //   ["  #     #  "],
  //   ["  #  0  #  "],
  //   ["  #     #  "],
  //   ["  #######  "],
  //   ["     #     "],
  //   ["     #     "],
  //   ["     #     "]
  // //]))// ➞ true
  // // //[0,1]
  // // //[0,2]
  // // //So on
  
  // console.log(isGoalScored([
  //   ["  #0    #  "],
  //   ["  #     #  "],
  //   ["  #     #  "],
  //   ["  #######  "],
  //   ["     #     "],
  //   ["     #     "],
  //   ["     #     "]
  // ])) //➞ true
  
  // console.log(isGoalScored([
  //   ["  #     #  "],
  //   ["  #     #  "],
  //   ["  #     # 0"],
  //   ["  #######  "],
  //   ["     #     "],
  //   ["     #     "],
  //   ["     #     "]
  // ]))// ➞ false
  
  
  // console.log(isGoalScored([
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  #  0      #  "],
  //   ["  ###########  "],
  //   ["       #       "],
  //   ["       #       "],
  //   ["       #       "],
  //   ["       #       "],
  //   ["       #       "]
  // ]))// ➞ true
  
  // console.log(isGoalScored([
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  ###########  "],
  //   ["       #       "],
  //   ["       #    0  "],
  //   ["       #       "],
  //   ["       #       "],
  //   ["       #       "]
  // ]))// ➞ false
  
  //Declare the function "isGoalScored" with the parameter "goal".
  function isGoalScored(goal) {
    //Declare an initial "isGoal" boolean set to false. Will always return false unless conditionals are proven otherwise.
    let isGoal = false
    //Declare a for loop that runs runs for the length of the array (goal). Can be any length / size goal instead of 3 of brute force method done prior.
    for(let i = 0; i < goal.length; i++){
      //Use .toString method to make everything represent as a text value. Use .split method to account for each line for closer inspection. Use .filter to account for whitespace.
      let arr = goal[i].toString().split('').filter(letter => letter !==' ')
      //Declare ballIndex variable bound to .indexOf so the program looks for '0', AKA the ball.
      let ballIndex = arr.indexOf('0')
      //Declare if statement that continually looks for ball within the '#' goalposts on each line.
      if(ballIndex !== -1){
        if((arr[ballIndex-1] === '#' && arr[ballIndex+1] === '#')
           && arr[ballIndex-2]!=='#' && arr[ballIndex+2]!=='#'
        ){
          //If ball is found, goal is set to true.
          isGoal = true
          //Accounting for infinite loop possibility.
          break;
        }
      }
    }
    //Return isGoal.
    return isGoal
  }
   ///Tic Tac Toe
  
  function ticTacToe(moves) {
      if (moves.length < 5) return "Pending"; // moves have to be at least 5
      // generate empty board and then initialise
      let board = new Array(3).fill(0).map(()=>{return new Array(3).fill('')});
      /*
          0: (3) ["", "O", "X"]
          1: (3) ["", "", "X"]
          2: (3) ["O", "X", ""]
      */
  
      let turn = 0;
      moves.forEach((move)=>{
          turn = turn %2;
          board[move[0]][move[1]] = turn ? 'B' : 'A';
          turn++;
      })
      // check down diagnol, from 0,0
      if (checkDia(board, -1)) {
          return board[0][0]
      }
      // check up diagnol from 2,0
      if (checkDia(board, 1)) {
          return board[2][0];
      }
          
      for (let i = 0; i < 3; i++) {
          if (checkRow(board, i)) {
              return board[i][0]
          }
          if (checkCol(board, i)) {
              return board[0][i]
          }
      }
      return ((moves.length < 9) ? "Pending" : "Draw");
  };
  
  function checkRow(board, rowNum) {
      let val = board[rowNum][0];
      return board[rowNum][1] && board[rowNum][1] == board[rowNum][2] && board[rowNum][1] == val;
  }
  
  function checkCol(board, colNum) {
      let val = board[0][colNum];
      return board[1][colNum] && board[1][colNum] == board[2][colNum] && board[1][colNum] == val;
  }
  
  
  function checkDia(board, dir) {
      if (dir == -1) { //check down
          return board[0][0] && board[0][0] == board[1][1] && board[2][2] == board[1][1];
      } else {
          return board[2][0] && board[2][0] == board[1][1] && board[0][2] == board[1][1];
      }
  }
  
  ticTacToe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]])