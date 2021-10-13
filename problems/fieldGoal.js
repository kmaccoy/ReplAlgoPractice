  //Scoring a field goal
  //Url: https://edabit.com/challenge/uauDJo55B8nYc9mLZ
  
  // In (American) Football, a team can score if they manage to kick a ball through the goal (i.e. above the crossbar and between the uprights).
  
  // Create a function that returns true if the ball 0 goes through the goal. You will be given an array of arrays.
  // All goals will be of the same size.
  // All arrays will be of equal length (11).
  // A team can never score if it hits the crossbar or goes underneath it
  
  // //Declare a function (isGoalScored) that accepts a nested array that looks like a goalpost.
  // function isGoalScored(arr){
  // //Declare a for loop that only iterates three times. Since goalpost only occupies the first 3 elements of nested array.
  // for (let i = 0; i < 3; i++){
  //   //Declare variable that's set to the zero'th element of array[i] use indexOf method for '0'
  //   let index = arr[i][0].indexOf('0')
  //   //console.log(index)
  //   //If statement that looks for if "0" is > 4 and < 8, return true.
  //   if(index >= 3 && index <= 9){
  //     return true;
  //   }  
  //   }
  //   return false;
  // }
  
  // //Examples
  // //console.log(isGoalScored([
  //   ["  #     #  "],
  //   ["  #  0  #  "],
  //   ["  #     #  "],
  //   ["  #######  "],
  //   ["     #     "],
  //   ["     #     "],
  //   ["     #     "]
  // //]))// ➞ true
  // // //[0,1]
  // // //[0,2]
  // // //So on
  
  // console.log(isGoalScored([
  //   ["  #0    #  "],
  //   ["  #     #  "],
  //   ["  #     #  "],
  //   ["  #######  "],
  //   ["     #     "],
  //   ["     #     "],
  //   ["     #     "]
  // ])) //➞ true
  
  // console.log(isGoalScored([
  //   ["  #     #  "],
  //   ["  #     #  "],
  //   ["  #     # 0"],
  //   ["  #######  "],
  //   ["     #     "],
  //   ["     #     "],
  //   ["     #     "]
  // ]))// ➞ false
  
  
  // console.log(isGoalScored([
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  #  0      #  "],
  //   ["  ###########  "],
  //   ["       #       "],
  //   ["       #       "],
  //   ["       #       "],
  //   ["       #       "],
  //   ["       #       "]
  // ]))// ➞ true
  
  // console.log(isGoalScored([
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  #         #  "],
  //   ["  ###########  "],
  //   ["       #       "],
  //   ["       #    0  "],
  //   ["       #       "],
  //   ["       #       "],
  //   ["       #       "]
  // ]))// ➞ false
  
  //Declare the function "isGoalScored" with the parameter "goal".
  //Declare an initial "isGoal" boolean set to false. Will always return false unless conditionals are proven otherwise.
  //Declare a for loop that runs runs for the length of the array (goal). 
  //Can be any length / size goal instead of 3 of brute force method done prior.
  //Use .toString method to make everything represent as a text value. 
  //Use .split method to account for each line for closer inspection. Use .filter to account for whitespace.
  //Declare ballIndex variable bound to .indexOf so the program looks for '0', AKA the ball.
  //Declare if statement that continually looks for ball within the '#' goalposts on each line.
  //If ball is found, goal is set to true.
  //Accounting for infinite loop possibility.

  function isGoalScored(goal) {
    let isGoal = false
    for(let i = 0; i < goal.length; i++){
      let arr = goal[i].toString().split('').filter(letter => letter !==' ')
      let ballIndex = arr.indexOf('0')
      if(ballIndex !== -1){
        if((arr[ballIndex-1] === '#' && arr[ballIndex+1] === '#')
           && arr[ballIndex-2]!=='#' && arr[ballIndex+2]!=='#'
        ){
          isGoal = true
          break;
        }
      }
    }
    return isGoal
  }