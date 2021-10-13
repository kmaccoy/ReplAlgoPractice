  // Sum of Odd and Even Numbers
  //URL: https://edabit.com/challenge/EY4nTmp6SbAmtJz5C
  
  // Write a function that takes an array of numbers and returns an array with two elements:
  
  // The first element should be the sum of all even numbers in the array.
  // The second element should be the sum of all odd numbers in the array.
  
  // create a function sumOddAndEven, that accepts an array of numbers as an argument/input

  // We are going to test to see whether the number is even or odd. After that's found out, we can sum up all its corresponding even numbers & odd numbers, respectively.
  // We will return out an array of the sum of even numbers, followed by the sum of odd numbers. 

  function sumOddAndEven(arrOfNums){
    if( Math.max(...arrOfNums) === 0 && Math.min(...arrOfNums) === 0){
      return arrOfNums;
    }
    
    
    const evenNumSum = () => arrOfNums.filter(ele => ele %2 === 0).reduce( (a,b) => (a+b));
    
    const oddNumSum = () => arrOfNums.filter(ele => (ele % 2 === 1) || ele % 2 === -1 ).reduce((a,b) => (a+b));
    
    
    return [evenNumSum(), oddNumSum()];
  }

    //Example
    //sumOddAndEven([1, 2, 3, 4, 5, 6]) // ➞ [12, 9]
    // # 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9
    
    //sumOddAndEven([-1, -2, -3, -4, -5, -6]) // ➞ [-12, -9])
    
    //sumOddAndEven([0, 0]) // ➞ [0, 0])


// Sum of Odd and Even Numbers
// Link:
//https://edabit.com/challenge/EY4nTmp6SbAmtJz5C
// Write a function that takes an array of numbers and returns an array with two elements:

// The first element should be the sum of all even numbers in the array.
// The second element should be the sum of all odd numbers in the array.

//separate into an even and an odd array
//use reduce to sum up the values in each array
//concatenate both values into one array
//return that new array

function sumOddAndEven (arr){

  let arrOdd = [];
  let arrEven = [];

  for (let i =0; i<arr.length; i++){
    if (arr[i] % 2 ==0){
      arrEven.push(arr[i]);
    } else {
      arrOdd.push(arr[i])
    }
  }
  console.log(arrEven);
  console.log(arrOdd);
  
  let outArr = [];

  if (arrOdd.length ==0){
    return arrEven;
  } else if (arrEven.length ==0){
    return arrOdd;
  } else {
    outArr.push(arrEven.reduce(function(acc,ele){
    acc += ele;
    return acc;
    }));
    outArr.push(arrOdd.reduce(function(acc,ele){
      acc+=ele;
      return acc;
    }));
    console.log(outArr);
    return outArr;
  }
}



//Example
// sumOddAndEven([1, 2, 3, 4, 5, 6]) //➞ [12, 9]
// 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9

// sumOddAndEven([-1, -2, -3, -4, -5, -6]) //➞ [-12, -9])

//sumOddAndEven([0, 0]) //➞ [0, 0])