// represent the board as an array
// x column, y is the row

var board_size = 8;
var board:number[][]=[
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
]

function updateBoardHTML(){
    // (print) update the board on the screen
}

function printBoardToConsole(){
    // print board matrix to console
}

function buttonClick(){
    toggleXY(1,1);
    toggleXY(2,1); // row conflict
    // toggleXY(1,2); // col conflict
    console.log(checkRows());
    console.log(checkCols());
}

function isQueenHere(x: number, y: number){
    // write function check to see if there is a queen in a specific spot < isQueenHere(x, y) >
    return board[x][y];
}

function toggleXY(x: number, y: number){
    // toggle a specific position on the board between 0 and 1
    if (board[x][y] == 1){
        board[x][y] = 0
    } else {
        board[x][y] = 1
    }
}

function checkRows(){
    for(var i = 0; i < board_size; i++) {
        // array_1D = board[i]
        var sum = board[i].reduce((pv, cv) => pv + cv, 0);
        // console.log("sum was: " + sum + " for row " + i);
        if(sum > 1){
            // console.log("rows = FALSE");
            return false;
        }
    }
    // console.log("rows = TRUE");
    return true;
}

function checkCols(){
    for(let x = 0; x < board_size; x++) {
        let numQueens:number = 0;
        for(let y = 0; y < board_size; y++) {
            if(board[x][y] == 1){
                numQueens += 1;
                if(numQueens > 1){
                    return false;
                }
            }
        }
    }
    return true;
}

function checkLeftDiags(){




}

function checkRightDiags(){
    alert("checkRightDiags");
}

function checkBoard(){
    alert("checkBoard");
    // if checkRows = true
    // and if checkCols = true
    // and if checkLeftDiags = true
    // and if checkRightDiags = true
    // return true
    // else return false
}

