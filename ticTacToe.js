   ///Tic Tac Toe
  
   function ticTacToe(moves) {
    if (moves.length < 5) return "Pending"; // moves have to be at least 5
    // generate empty board and then initialise
    let board = new Array(3).fill(0).map(()=>{return new Array(3).fill('')});
    /*
        0: (3) ["", "O", "X"]
        1: (3) ["", "", "X"]
        2: (3) ["O", "X", ""]
    */

    let turn = 0;
    moves.forEach((move)=>{
        turn = turn %2;
        board[move[0]][move[1]] = turn ? 'B' : 'A';
        turn++;
    })
    // check down diagnol, from 0,0
    if (checkDia(board, -1)) {
        return board[0][0]
    }
    // check up diagnol from 2,0
    if (checkDia(board, 1)) {
        return board[2][0];
    }
        
    for (let i = 0; i < 3; i++) {
        if (checkRow(board, i)) {
            return board[i][0]
        }
        if (checkCol(board, i)) {
            return board[0][i]
        }
    }
    return ((moves.length < 9) ? "Pending" : "Draw");
};

function checkRow(board, rowNum) {
    let val = board[rowNum][0];
    return board[rowNum][1] && board[rowNum][1] == board[rowNum][2] && board[rowNum][1] == val;
}

function checkCol(board, colNum) {
    let val = board[0][colNum];
    return board[1][colNum] && board[1][colNum] == board[2][colNum] && board[1][colNum] == val;
}


function checkDia(board, dir) {
    if (dir == -1) { //check down
        return board[0][0] && board[0][0] == board[1][1] && board[2][2] == board[1][1];
    } else {
        return board[2][0] && board[2][0] == board[1][1] && board[0][2] == board[1][1];
    }
}

ticTacToe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]])