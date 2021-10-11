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