function snakeToCamel (str) {
  //use replace method to specifically target characters (letters) between _'s and -'s
  return str.replace(/([-_][a-z])/ig, (char) => {
    //when targets found, change those characters to upper case
    //console.log(char)
    return char.toUpperCase()
      //replace -'s and _'s out with no space
      .replace('-', '')
      .replace('_', '');
  });
}



// console.log(snakeToCamel("hello_there_world"))
// console.log(snakeToCamel("_hello_there_world_"))