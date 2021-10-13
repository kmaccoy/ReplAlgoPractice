// Oddish vs. Evenish

// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.


//convert argument into string
//iterate through the string, adding up each element
//return the boolean result of whether the sum of the digits is even or odd(use modular)

function oddishOrEvenish(num){
  let str = num.toString().split('');
  console.log(str);
  let output = 0;
  for (let i = 0; i<str.length; i++){
    output += Number.parseInt(str[i])
  }
  console.log(output);
  return output%2==0;
}

// Examples

//oddishOrEvenish(4321) //➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

//oddishOrEvenish(373) //➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

//oddishOrEvenish(4433) //➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0