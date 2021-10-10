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