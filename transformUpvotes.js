  // Find the Discount
  
  // Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.
  
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