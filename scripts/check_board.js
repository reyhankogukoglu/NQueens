"use strict";
function checkBoard(board, valid_solutions) {
    var rowValidity = checkRows(board);
    var colValidity = checkCols(board);
    var ldiagValidity = checkLeftDiags(board);
    var rdiagValidity = checkRightDiags(board);
    var boardValidity = rowValidity != "false" && colValidity != "false" && rdiagValidity != "false" && ldiagValidity != "false";
    if (boardValidity) {
        valid_solutions.push(board);
    }
    else {
        if (!rowValidity) {
            console.log("rows: " + rowValidity);
        }
        if (!colValidity) {
            console.log("cols: " + colValidity);
        }
        if (!ldiagValidity) {
            console.log("ldiag: " + ldiagValidity);
        }
        if (!rdiagValidity) {
            console.log("rdiag: " + rdiagValidity);
        }
    }
    return [
        boardValidity,
        valid_solutions
    ];
}
function checkBoardDiags(board, valid_solutions) {
    var ldiagValidity = checkLeftDiags(board);
    var rdiagValidity = checkRightDiags(board);
    if (rdiagValidity != "false" && ldiagValidity != "false") {
        valid_solutions.push(board);
    }
    return valid_solutions;
}
function checkRows(board) {
    var board_size = board.length;
    for (let y = 0; y < board_size; y++) {
        let numQueens = 0;
        for (let x = 0; x < board_size; x++) {
            if (board[x][y] == 1) {
                numQueens += 1;
                if (numQueens > 1) {
                    return "false";
                }
            }
        }
    }
    return "true";
}
function checkCols(board) {
    var board_size = board.length;
    for (let x = 0; x < board_size; x++) {
        let numQueens = 0;
        for (let y = 0; y < board_size; y++) {
            if (board[x][y] == 1) {
                numQueens += 1;
                if (numQueens > 1) {
                    return "false";
                }
            }
        }
    }
    return "true";
}
function checkLeftDiags(board) {
    var board_size = board.length;
    for (var i = 0; i < board_size / 2; i++) {
        var top = i;
        var bottom = board_size - 1 - i;
        for (var j = top; j < bottom; j++) {
            var temp = board[top][j];
            board[top][j] = board[j][bottom];
            board[j][bottom] = board[bottom][bottom - (j - top)];
            board[bottom][bottom - (j - top)] = board[bottom - (j - top)][top];
            board[bottom - (j - top)][top] = temp;
        }
    }
    var diags = [];
    var validpermutedBoards = [];
    let k = 0;
    while (k < board_size * 2) {
        var aDiag = [];
        let numQueens = 0;
        let j = 0;
        while (j <= k) {
            let i = k - j;
            if (i < board_size && j < board_size) {
                if (board[i][j] == 1) {
                    numQueens += 1;
                }
                aDiag.push(board[i][j]);
            }
            j += 1;
        }
        diags.push(aDiag);
        k += 1;
    }
    // sometimes an empty cell is added at the end
    // so if that is the case we will remove it now
    var last_diags_element_size = diags[diags.length - 1].length;
    if (last_diags_element_size == 0) {
        diags.pop();
    }
    let returnValue = "null";
    diags.forEach(diag => {
        let queenCounter = 0;
        diag.forEach(element => {
            if (element == 1) {
                queenCounter += 1;
            }
        });
        if (queenCounter == 0 || queenCounter == 1) {
            validpermutedBoards.push(true);
        }
        else {
            validpermutedBoards.push(false);
        }
    });
    validpermutedBoards.forEach(value => {
        if (value != true) {
            returnValue = "false";
        }
    });
    if (returnValue == "null") {
        returnValue = "true";
    }
    return returnValue;
}
function checkRightDiags(board) {
    var board_size = board.length;
    var rotated_board = board;
    for (var i = 0; i < board_size / 2; i++) {
        var top = i;
        var bottom = board_size - 1 - i;
        for (var j = top; j < bottom; j++) {
            var temp = rotated_board[top][j];
            rotated_board[top][j] = rotated_board[j][bottom];
            rotated_board[j][bottom] = rotated_board[bottom][bottom - (j - top)];
            rotated_board[bottom][bottom - (j - top)] = rotated_board[bottom - (j - top)][top];
            rotated_board[bottom - (j - top)][top] = temp;
        }
    }
    var diags = [];
    var validpermutedBoards = [];
    let k = 0;
    while (k < board_size * 2) {
        var aDiag = [];
        let numQueens = 0;
        let j = 0;
        while (j <= k) {
            let i = k - j;
            if (i < board_size && j < board_size) {
                if (rotated_board[i][j] == 1) {
                    numQueens += 1;
                }
                aDiag.push(rotated_board[i][j]);
                // process.stdout.write(String(rotated_board[i][j]) + " ");
            }
            j += 1;
        }
        // console.log(aDiag)
        diags.push(aDiag);
        k += 1;
    }
    // sometimes an empty cell is added at the end
    // so if that is the case we will remove it now
    var last_diags_element_size = diags[diags.length - 1].length;
    if (last_diags_element_size == 0) {
        diags.pop();
    }
    let returnValue = "null";
    diags.forEach(diag => {
        let queenCounter = 0;
        diag.forEach(element => {
            if (element == 1) {
                queenCounter += 1;
            }
        });
        if (queenCounter == 0 || queenCounter == 1) {
            validpermutedBoards.push(true);
        }
        else {
            validpermutedBoards.push(false);
        }
    });
    validpermutedBoards.forEach(value => {
        if (!value) {
            returnValue = "false";
        }
    });
    if (returnValue == "null") {
        returnValue = "true";
    }
    return returnValue;
}
