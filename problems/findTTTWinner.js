// 1275. Find Winner on a Tic Tac Toe Game

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


//have a base case that checks if moves are less than 5
//have that return out "pending" (5 moves base line for a win)
//create a nested array that will serve as the board, use to reference the "moves" as the input is filled
//track number of moves, if there is no winner and the number of moves is less than 9, pending will be logged, otherwise draw will be logged
//fill out board with moves, divide input array into "A" and "B" (or "X" and "Y"), push respective values onto board array 
//test if accumulator is odd / even concat respectively

function ticTacCheck(moves){
  if(moves.length < 5){
    return 'Pending';
  };
  //board generation
  let moveCount = 0;
  let board = moves.reduce(function(acc, cur, index){
    moveCount +=1;
    //console.log(acc)
    //console.log(cur)
    //console.log(index)
    if(index %2 === 0){
      acc[cur[0]][cur[1]] += `A`;
    } else {
      acc[cur[0]][cur[1]] += `B`;
      
    }
    return acc;
  },[['','',''], //0
  ['','',''], //1
  ['','','']] //2
  );
  //console.log(board)

  let checkCol = function (board, colNum){
    let value = board[0][colNum];
    if (board[1][colNum] && board[1][colNum] == board[2][colNum] && board[2][colNum] == value) {
      return value;
    } else return false;
  }

  let checkRow = function (board, rowNum){
    let value = board[rowNum][0];
    if (board[rowNum][1] && board[rowNum][1] == board[rowNum][2] && board[rowNum][2] ==  value) {
      return value;
    } else return false;
  }

  let checkDiag =  function (board){
    let center = board[1][1];
    // console.log(center);
    if (board[1][1] && (board[0][0] == center && board[2][2] == center || board[2][0] == center && board[0][2] == center)){
      return center;
    } else return false;
  }
  
  //check the board for matches
  //iterate through each row
  //check for horizont, verti, and diag matches
  //eject out of loop if true otherwise row and column variables will be overwritten by a false case after a true has been hit

  let diag = checkDiag(board);
  let column = false;
  let row = false;
  for (let i=0; i<3; i++){
    column = checkCol(board, i);
    row = checkRow(board, i);
    if (row || column){
      i=3;
    }
  }
  //console.log(row);
  // console.log(row || column || diag)
  if (row || column || diag){
    return row || column || diag
  } else {
    if (moveCount < 9){
      return `Pending`;
    } else return `Draw`;
  }
    
}




// let outBoard = ticTacCheck([[0,0],[2,0],[1,1],[2,1],[2,2]]);
// console.log(outBoard[0]);
// console.log(outBoard[1]);
// console.log(outBoard[2]);
// console.log(checkDiag(outBoard));
let newMoves = [[2,2],[0,2],[1,0],[0,1],[2,0],[0,0]];
let newBoard = newMoves.reduce(function(acc, cur, index){
    
    //console.log(acc)
    //console.log(cur)
    //console.log(index)
    //fill out board with moves, divide input array into "A" and "B" (or "X" and "Y"), push respective values onto board array 
    if(index %2 === 0){
      //test if accumulator is odd / even concat respectively
      acc[cur[0]][cur[1]] += `A`;
    } else {
      acc[cur[0]][cur[1]] += `B`;
      
    }
    return acc;
  },[['','',''], //0
  ['','',''], //1
  ['','','']] //2
  );
  console.log(newBoard[0]);
  console.log(newBoard[1])
  console.log(newBoard[2])