
//use replace method to specifically target characters (letters) between _'s and -'s
//when targets found, change those characters to upper case
//replace -'s and _'s out with no space

function snakeToCamel (str) {
  return str.replace(/([-_][a-z])/ig, (char) => {
    //console.log(char)
    return char.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
}



// console.log(snakeToCamel("hello_there_world"))
// console.log(snakeToCamel("_hello_there_world_"))