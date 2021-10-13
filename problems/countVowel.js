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


  // How Many Vowels?
  // Create a function that takes a string and returns an object with the number (count) of each vowel contained within it
  
  //Create an object, objVowels, that will contain all the vowels as keys and all the values set to 0. 
  //Iterate through the str's length
  //If the current element of the str is a vowel,
  //Increment the value within our objVowels
  //Return our objVowels object

  function howManyVowels(word){
  
    const objVowels = {
      'a': 0,
      'e':0,
      'i':0,
      'o':0,
      'u':0,
    }
      
    for(let letter of word.toLowerCase()){
      if(letter in objVowels){
        objVowels[letter]++;
      }
    }
      return objVowels
  };
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