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