  // Kids With the Greatest Number of Candies
  
  
  // Add to List
  
  // Share
  // Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
  // For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
  
  //Create a function, extraCandies, accept an array and a number
  // If the array has a length less than 1, return [];
  //Declare a variable, maxCandies and we're assign this to be the largest number in  the array of candies.
  //Iterate through the candies array
  //and at each element we're going to test to see if the element summed w/ the number is greater than or equal to the maxCandies.
  //We will push this value into an array. 


  function extraCandies(candies, extraCandies){
    if(candies.length < 1) return [];
    const maxCandies = Math.max(...candies);
    
    const resultArr = []
    
     function test(num) {
        return (num  + extraCandies)>= maxCandies
      }
    
      candies.map( ele => {
        return resultArr.push(test(ele));
      })
      
     
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