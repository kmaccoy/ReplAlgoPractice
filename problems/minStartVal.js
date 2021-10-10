/* Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.

Input: nums = [-3,2,-3,4,2]
Output: 5
Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
                step by step sum
                startValue = 4 | startValue = 5 | nums
                  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
                  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
                  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
                  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
                  (4 +2 ) = 6  | (5 +2 ) = 7    |   2
*/

var minStartValue = function(nums) {
  // sort the array to find the min;
  let startVal = 1;
  let trackval = 1;
  function arrLoop(arr, i=0){
    //short circuit case
    if (arr[i]+trackVal<=0){
      i=arr.length;
    } else if (i >= arr.length){
      return trackVal;
    } else {
      return trackVal += arrLoop(arr, i+1)
    }
  };

  for (startVal=1; startVal<100; startVal++){
    arrLoop
  }
};

/*
instead: start at 0
have if statement check for a 0 sum
if 0 sum, increment start val
repeat the process until non 0 complete run of array is found
return that value out
*/

const ARRAY = [-3,2,-3,4,2];
minStartValue(ARRAY);


/*
want a forEach() method to run through each element
  forEach will be used on arguement
utilize Math.min (to start. maybe change) to find lowest start val
need a sum value to update, apply and keept track. if this ever hits 0 outside firt time, test fails
POSSIBLY use Math.abs() since we're always dealing with pos nums.
*/


//solution

function minStartValue(nums){
  let minNum = Infinity;
  let sum = 0;
  nums.forEach(cb => {
    minNum = Math.min(minNum, sum += cb);
    //console.log(minNum);
  });
  //console.log(minNum);
  //console.log(nums);
  //console.log(sum);
  return (minNum>=1) ? 1 : Math.abs(minNum-1);
};

minStartValue([-3,2,-3,4,2])
