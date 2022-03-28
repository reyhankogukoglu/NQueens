function checkBoard(){
    // checks the full board based off rows, columns and diagonals

    // rowValidity = checkRows(board);
    // colValidity = checkCols(board);
    // ldiagValidity = checkLeftDiags(board);
    // rdiagValidity = checkRightDiags(board);

    // if all are valid, then board is valid
        // return true
    // if not
        // return false
}

function checkBoardDiags(){
    // checks the full board (diagonals only)

    // ldiagValidity = checkLeftDiags(board);
    // rdiagValidity = checkRightDiags(board);

    // if both are valid, then board is valid
    // return true
    // if not
    // return false
}

function checkRows(){
    // board_size = board.length;
    // for y 0 - board_size
        // numQueens in row = 0
        // for x 0 - board_size
            // if cell is 1
                // numQueens += 1
            // if numQueens > 1
                // return false
    // else return true
}

function checkCols(){
    // board_size = board.length;
    // for x 0 - board_size
        // numQueens in column = 0
        // for y 0 - board_size
            // if cell is 1
                // numQueens += 1
            // if numQueens > 1
                // return false
    // else return true
}

function checkLDiags(){
    // board_size = board.length;

    // scan in the columns and convert them into a two-dimensional array

    // for x 0 - board_size
        // numQueens in diag = 0
        // for y 0 - board_size
            // if cell is 1
                // numQueens += 1
        // if numQueens > 1
            // return false
    // else return true
}

function checkLRiags(){
    // board_size = board.length;

    // rotate the array so the same code can be utilized as in checkLDiags

    // scan in the columns and convert them into a two-dimensional array

    // for x 0 - board_size
        // numQueens in diag = 0
        // for y 0 - board_size
            // if cell is 1
                // numQueens += 1
            // if numQueens > 1
                // return false
    // else return true
}