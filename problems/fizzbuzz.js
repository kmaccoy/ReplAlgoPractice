// Write a function that takes an object and returns a nested array. These inner arrays will each have two elements: the key-value pairs from the object. These whole array should be *SORTED* in alphabetical order by the key names.

const fizzbuzz = num => {  
  //declare output array to push items into
  const buzzyArr = [];
  //iterate through the array
  for (let i = 1; i < num; i++){
    //set up network of flow control
    //if num div 3 but not 5 --> fizz
    if (i % 3 === 0 && i % 5 === 0){
        buzzyArr.push('fizzbuzz');
    } else if (i % 3 === 0) {
    //if num div 5 but not 3 --> buzz
        buzzyArr.push('fizz')
    } else if (i % 5 === 0) {
    //if num div by 3 and 5 --> fizzbuzz
        buzzyArr.push('buzz')
    } else {
        buzzyArr.push(i);
    }
  }
  //return output array
  return buzzyArr;
};

//console.log(fizzbuzz(16))