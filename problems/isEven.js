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