// Write a function that takes an object and returns a nested array. These inner arrays will each have two elements: the key-value pairs from the object. These whole array should be *SORTED* in alphabetical order by the key names.
//declare output array to push items into
//iterate through the array
//set up network of flow control
//if num div 3 but not 5 --> fizz
//if num div 5 but not 3 --> buzz
//if num div by 3 and 5 --> fizzbuzz
//return output array

const fizzbuzz = num => {  
  const buzzyArr = [];
  for (let i = 1; i < num; i++){
    if (i % 3 === 0 && i % 5 === 0){
        buzzyArr.push('fizzbuzz');
    } else if (i % 3 === 0) {
        buzzyArr.push('fizz')
    } else if (i % 5 === 0) {
        buzzyArr.push('buzz')
    } else {
        buzzyArr.push(i);
    }
  }
  return buzzyArr;
};

//console.log(fizzbuzz(16))