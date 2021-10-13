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

  //Outer for loop will split apart the "arr" array.
  //Inner for loop will do the comparisons.

  function uniqueStyles(arr){
    const isUnique = []
    for(let i = 0; i < arr.length; i++){
      let splitStyles = arr[i].split(',')
      //console.log(splitStyles)
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