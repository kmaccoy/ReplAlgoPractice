// // ///////////////////////////////
// // ///           Hello!        ///
// // ///////////////////////////////



// // // Sum of Odd and Even Numbers
// // // Link:
// // //https://edabit.com/challenge/EY4nTmp6SbAmtJz5C
// // // Write a function that takes an array of numbers and returns an array with two elements:

// // // The first element should be the sum of all even numbers in the array.
// // // The second element should be the sum of all odd numbers in the array.

// function sumOddAndEven (arr){
//   //separate into an even and an odd array
//   //use reduce to sum up the values in each array
//   //concatenate both values into one array
//   //return that new array

//   let arrOdd = [];
//   let arrEven = [];

//   for (let i =0; i<arr.length; i++){
//     if (arr[i] % 2 ==0){
//       arrEven.push(arr[i]);
//     } else {
//       arrOdd.push(arr[i])
//     }
//   }
//   console.log(arrEven);
//   console.log(arrOdd);
  
//   let outArr = [];

//   if (arrOdd.length ==0){
//     return arrEven;
//   } else if (arrEven.length ==0){
//     return arrOdd;
//   } else {
//     outArr.push(arrEven.reduce(function(acc,ele){
//     acc += ele;
//     return acc;
//     }));
//     outArr.push(arrOdd.reduce(function(acc,ele){
//       acc+=ele;
//       return acc;
//     }));
//     console.log(outArr);
//     return outArr;
//   }
// }



// // //Example
// // // sumOddAndEven([1, 2, 3, 4, 5, 6]) //➞ [12, 9]
// // // 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9

// // // sumOddAndEven([-1, -2, -3, -4, -5, -6]) //➞ [-12, -9])

// // //sumOddAndEven([0, 0]) //➞ [0, 0])



// // // The global variable
// var watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];
// // /* 
// // The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

// // */

// //look for imdb ratings, specifically directed by Chris Nol
// //average the raitings
// //ratings are strings, convert to nums


// function getRating(watchList){
//   // Only change code below this line
//   let averageRating = 0;
//   //declare empty array to hold imdb ratings
//     //loop through objects with conditional looking for Chis Nol
//   const imdbOfChris = watchList.filter(function(obj){
//     return obj.Director == `Christopher Nolan`
//   }).map(function(obj){
//     return parseFloat(obj.imdbRating);
//   })
//   averageRating = imdbOfChris.reduce(function(acc,ele){
//     return acc+ele;
//   },0) / imdbOfChris.length;
//   console.log(imdbOfChris);
//   console.log(averageRating);
//   return averageRating;
// }

// console.log(getRating(watchList)); //8.675

// // // Oddish vs. Evenish

// // // Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// // // For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.


// // //convert argument into string
// // //iterate through the string, adding up each element
// // //return the boolean result of whether the sum of the digits is even or odd(use modular)

// function oddishOrEvenish(num){
//   let str = num.toString().split('');
//   console.log(str);
//   let output = 0;
//   for (let i = 0; i<str.length; i++){
//     output += Number.parseInt(str[i])
//   }
//   console.log(output);
//   return output%2==0;
// }

// // Examples

// // oddishOrEvenish(4321) //➞ "Oddish"
// // // 4 + 3 = 7
// // // 7 % 2 = 1

// // oddishOrEvenish(373) //➞ "Oddish"
// // // 3 + 7 + 3 = 13
// // // 13 % 2 = 1

// // oddishOrEvenish(4433) //➞ "Evenish"
// // // 4 + 4 + 3 + 3 = 14
// // // 14 % 2 = 0

// /* Given an array of integers nums, you start with an initial positive value startValue.

// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

// Input: nums = [-3,2,-3,4,2]
// Output: 5
// Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
//                 step by step sum
//                 startValue = 4 | startValue = 5 | nums
//                   (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
//                   (1 +2 ) = 3  | (2 +2 ) = 4    |   2
//                   (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
//                   (0 +4 ) = 4  | (1 +4 ) = 5    |   4
//                   (4 +2 ) = 6  | (5 +2 ) = 7    |   2
// */

// // var minStartValue = function(nums) {
// //   //sort the array to find the min;
// // //   let startVal = 1;
// // //   let trackval = 1;
// // //   function arrLoop(arr, i=0){
// // //     //short circuit case
// // //     if (arr[i]+trackVal<=0){
// // //       i=arr.length;
// // //     } else if (i >= arr.length){
// // //       return trackVal;
// // //     } else {
// // //       return trackVal += arrLoop(arr, i+1)
// // //     }
// // //   };

// // //   for (startVal=1; startVal<100; startVal++){
// // //     arrLoop
// // //   }
// // // };

// // /*
// // instead: start at 0
// // have if statement check for a 0 sum
// // if 0 sum, increment start val
// // repeat the process until non 0 complete run of array is found
// // return that value out
// // */

// // const ARRAY = [-3,2,-3,4,2];
// // minStartValue(ARRAY);


// // /*
// // want a forEach() method to run through each element
// //   forEach will be used on arguement
// // utilize Math.min (to start. maybe change) to find lowest start val
// // need a sum value to update, apply and keept track. if this ever hits 0 outside firt time, test fails
// // POSSIBLY use Math.abs() since we're always dealing with pos nums.
// // */


// // //solution

// // function minStartValue(nums){
// //   let minNum = Infinity;
// //   let sum = 0;
// //   nums.forEach(cb => {
// //     minNum = Math.min(minNum, sum += cb);
// //     //console.log(minNum);
// //   });
// //   //console.log(minNum);
// //   //console.log(nums);
// //   //console.log(sum);
// //   return (minNum>=1) ? 1 : Math.abs(minNum-1);
// // };

// // minStartValue([-3,2,-3,4,2])


// // 1275. Find Winner on a Tic Tac Toe Game

// Tic-tac-toe is played by two players A and B on a 3 x 3 grid.

// Here are the rules of Tic-Tac-Toe:

// Players take turns placing characters into empty squares (" ").
// The first player A always places "X" characters, while the second player B always places "O" characters.
// "X" and "O" characters are always placed into empty squares, never on filled ones.
// The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.
// Given an array moves where each element is another array of size 2 corresponding to the row and column of the grid where they mark their respective character in the order in which A and B play.

// Return the winner of the game if it exists (A or B), in case the game ends in a draw return "Draw", if there are still movements to play return "Pending".

// You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the grid is initially empty and A will play first.

 

// Example 1:

// Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
// Output: "A"
// Explanation: "A" wins, he always plays first.
// "X  "    "X  "    "X  "    "X  "    "X  "
// "   " -> "   " -> " X " -> " X " -> " X "
// "   "    "O  "    "O  "    "OO "    "OOX"
// Example 2:

// Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
// Output: "B"
// Explanation: "B" wins.
// "X  "    "X  "    "XX "    "XXO"    "XXO"    "XXO"
// "   " -> " O " -> " O " -> " O " -> "XO " -> "XO " 
// "   "    "   "    "   "    "   "    "   "    "O  "
// Example 3:

// Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
// Output: "Draw"
// Explanation: The game ends in a draw since there are no moves to make.
// "XXO"
// "OOX"
// "XOX"
// Example 4:

// Input: moves = [[0,0],[1,1]]
// Output: "Pending"
// Explanation: The game has not finished yet.
// "X  "
// " O "
// "   "
 

// Constraints:

// 1 <= moves.length <= 9
// moves[i].length == 2
// 0 <= moves[i][j] <= 2
// There are no repeated elements on moves.
// moves follow the rules of tic tac toe.


// function ticTacCheck(moves){
//   //have a base case that checks if moves are less than 5
//   //have that return out "pending" (5 moves base line for a win)
//   if(moves.length < 5){
//     return 'Pending';
//   };
//   //board generation
//   //create a nested array that will serve as the board, use to reference the "moves" as the input is filled
//   //track number of moves, if there is no winner and the number of moves is less than 9, pending will be logged, otherwise draw will be logged
//   let moveCount = 0;
//   let board = moves.reduce(function(acc, cur, index){
//     moveCount +=1;
//     //console.log(acc)
//     //console.log(cur)
//     //console.log(index)
//     //fill out board with moves, divide input array into "A" and "B" (or "X" and "Y"), push respective values onto board array 
//     if(index %2 === 0){
//       //test if accumulator is odd / even concat respectively
//       acc[cur[0]][cur[1]] += `A`;
//     } else {
//       acc[cur[0]][cur[1]] += `B`;
      
//     }
//     return acc;
//   },[['','',''], //0
//   ['','',''], //1
//   ['','','']] //2
//   );
//   //console.log(board)

//   let checkCol = function (board, colNum){
//     let value = board[0][colNum];
//     if (board[1][colNum] && board[1][colNum] == board[2][colNum] && board[2][colNum] == value) {
//       return value;
//     } else return false;
//   }

//   let checkRow = function (board, rowNum){
//     let value = board[rowNum][0];
//     if (board[rowNum][1] && board[rowNum][1] == board[rowNum][2] && board[rowNum][2] ==  value) {
//       return value;
//     } else return false;
//   }

//   let checkDiag =  function (board){
//     let center = board[1][1];
//     // console.log(center);
//     if (board[1][1] && (board[0][0] == center && board[2][2] == center || board[2][0] == center && board[0][2] == center)){
//       return center;
//     } else return false;
//   }
  
//   //check the board for matches
//     //iterate through each row
//       //check for horizont, verti, and diag matches
//   let diag = checkDiag(board);
//   let column = false;
//   let row = false;
//   for (let i=0; i<3; i++){
//     column = checkCol(board, i);
//     row = checkRow(board, i);
//     //eject out of loop if true otherwise row and column variables will be overwritten by a false case after a true has been hit
//     if (row || column){
//       i=3;
//     }
//   }
//   //console.log(row);
//   // console.log(row || column || diag)
//   if (row || column || diag){
//     return row || column || diag
//   } else {
//     if (moveCount < 9){
//       return `Pending`;
//     } else return `Draw`;
//   }
    
// }




// // let outBoard = ticTacCheck([[0,0],[2,0],[1,1],[2,1],[2,2]]);
// // console.log(outBoard[0]);
// // console.log(outBoard[1]);
// // console.log(outBoard[2]);
// // console.log(checkDiag(outBoard));
// let newMoves = [[2,2],[0,2],[1,0],[0,1],[2,0],[0,0]];
// let newBoard = newMoves.reduce(function(acc, cur, index){
    
//     //console.log(acc)
//     //console.log(cur)
//     //console.log(index)
//     //fill out board with moves, divide input array into "A" and "B" (or "X" and "Y"), push respective values onto board array 
//     if(index %2 === 0){
//       //test if accumulator is odd / even concat respectively
//       acc[cur[0]][cur[1]] += `A`;
//     } else {
//       acc[cur[0]][cur[1]] += `B`;
      
//     }
//     return acc;
//   },[['','',''], //0
//   ['','',''], //1
//   ['','','']] //2
//   );
//   console.log(newBoard[0]);
//   console.log(newBoard[1])
//   console.log(newBoard[2])