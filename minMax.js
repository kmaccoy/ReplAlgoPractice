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