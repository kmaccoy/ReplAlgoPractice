// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
function factorial(n) {
  //basecase
  if (n <= 1){
    return n;
  }
  //recursive call
  return n * factorial(n - 1);
};

// console.log(factorial(5)); // 120
// console.log(factorial(1)); // 1


// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
function sum(array){
  console.log(array)
  //basecase
  if (array.length === 1){
    return array[0]
  }
  
  //var to carry out
  let arraySum = 0 + array.shift()
  //console.log(arraySum)//
  //recursive call
  return arraySum + sum(array);
};

// console.log(sum([1,2,3,4,5,6])); //21
// console.log(sum([2,4,6,8,10])); //30


// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
function arraySum(array){
  //basecase
  if(array.length === 1){
    return array[0];
  }
  
  //remove the nests
  let flatArray = array.flat()
  //console.log(flatArray);
  //create sum variable to pass through
  let sumArray = 0 + flatArray.shift();
  //console.log(sumArray);
  //recursive call
  return sumArray + arraySum(flatArray);
}

//console.log(arraySum([1,[2,3],[[4]],5])); // 15
//console.log(arraySum([1,[[2,3]],[4],5])) //15
//console.log(arraySum([2,[4,6],8,[[[10]]]])) //30


// 4. Check if a number is even.
function isEven(n){
  //console.log(n)
  //basecase (odd)
  if(n == 1){
    return false;
  };
  //basecase (even)
  if(n == 0){
    return true;
  };
  //recursive call
  return isEven(n - 2)
};

// console.log(isEven(2)) //true
// console.log(isEven(9)) //false
// console.log(isEven(8)) // true


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

function sumBelow(n){
  //basecase
  if(n === 1) {
    return 0;
  } else {
    //recursive case
    //console.log(n)
    return n-1 + sumBelow(n - 1);
  }
  
};

//console.log(sumBelow(10)) //45
// console.log(sumBelow(7)); // 21

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

//recursive way

function range(x, y){
  if (y - x === 2) 
  {
    return [x + 1];
  } 
  else 
  {
    var list = range(x, y - 1);
    list.push(y - 1);
    return list;
  }
};

//console.log(range(2,9))

//iterative way:

function iterateRange(x, y){
  //declare output array
  let output = [];
  //iterate through where i starts at x and ends before y
  for (let i = x+1; i < y; i++){
    //push numbers to array
    output.push(i)
  }
  //return array
  return output;
}

//console.log(iterateRange(2,9)); // [3, 4, 5, 6, 7, 8]

function capitalizeVowels (str) {
  //target vowels in a replacer method, pass them into an inner function return the vowels once converted to uppercase
  return str.toLowerCase().replace(/[aeiou]/g, (l) => {
    return l.toUpperCase();
  });
}

//console.log(capitalizeVowels('hella world'));

// Write a function that takes an array and two integers as arguments. These two numbers will be indices. All array elements between (and including) these positions should be reversed.

function reverseChunk (arr, start, end) {
    //declare a variable for the edited array, will be pushed out
    let reversedArr = arr;
    console.log(reversedArr);
    //declare a storage array for targets
    let targets = [];
    //specifically target the start and end params, break them off from the main array
    for(let i = start; i < reversedArr.length; i++){
      console.log(i)
      if(i <= end){
        //push the targets into storage array
        targets.push(reversedArr[i])
        console.log(targets)
      }
    }
    //reverse that section, apply the separate array back into the edited array
    targets.reverse();
    console.log(targets)

    reversedArr.splice(start, end, targets)
    console.log(reversedArr)
    //return the new array out
}

const zeroToTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverseChunk(zeroToTen, 2, 6));



//console.log(reverseChunk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

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

//Write a function that takes an object and returns a nested array. These inner arrays will each have two elements: the key-value pairs from the object. These whole array should be *SORTED* in alphabetical order by the key names.

function objToSortedArray (obj) {
  //Utilize map to identify the key-value pairs of the object, convert those pairs into the desired array
  let objectConverter = Object.keys(obj).map(key => ({ [key]: obj[key] }));
  //return the output array;
  //still need to sort by name...
  return objectConverter;
}


const phoneNums = {
  chris: 3429588375,
  andy: 4829574932,
  mildew: 9975723073
}

//console.log(objToSortedArray(phoneNums));


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


const drawStairs = n => {
     //declare variable array that will hold the stairs
     let steps = new Array(n).fill('*');
     //declare length variable that will work with the .length of steps
     let length = steps.length;
     //map the steps out
     steps = steps.map((value, i) => {
          return new Array(length - i - 1). fill(' ').join('') + value + new Array(i).fill('*').join('');
     });
     return steps.join('\n');
};

//console.log(drawStairs(6))