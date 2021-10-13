  // Move Capital Letters to the Front
  
  // Create a function that moves all capital letters to the front of a word.
  // Examples
  
  //Declare a function (capToFront) that accepts a string as an argument
  //Sort out lowercase letters using the .filter method and the toLowerCase method. Will 'reorder string' with lowercases as they come
  //Sort out uppercase letters using the .filter method and the toUpperCase method. Will 'reorder string' with uppercases as they come.
  //Return the string with toUpperCase first and toLowerCase second to ensure order is correct. Use .join method with empty string.

  function capToFront(str) {
     let lowerCase = [...str].filter(l => l === l.toLowerCase())
     let upperCase = [...str].filter(l => l === l.toUpperCase())
     return [...upperCase,...lowerCase].join("")
    }
    
    
    //capToFront("hApPy") //➞ "APhpy"
    
    // capToFront("moveMENT") //➞ "MENTmove"
    
    // capToFront("shOrtCAKE") //➞ "OCAKEshrt"