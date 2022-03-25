export function checkBoard(board:number[][], valid_solutions:number[][][]){
    var rowValidity:boolean = checkRows(board);
    var colValidity:boolean = checkCols(board);
    var ldiagValidity:boolean = checkLeftDiags(board);
    var rdiagValidity:boolean = checkRightDiags(board);
    if (rowValidity && colValidity && rdiagValidity && ldiagValidity){
        valid_solutions.push(board);
    }
    else {
        if(!rowValidity){
            console.log("rows: " + rowValidity)
        }
        if(!colValidity){
            console.log("cols: " + colValidity)
        }
        if(!ldiagValidity){
            console.log("ldiag: " + ldiagValidity)
        }
        if(!rdiagValidity){
            console.log("rdiag: " + rdiagValidity)
        }
    }
    return valid_solutions;
}

export function checkBoardDiags(board:number[][], valid_solutions:number[][][]){
    var ldiagValidity:boolean = checkLeftDiags(board);
    var rdiagValidity:boolean = checkRightDiags(board);
    if (rdiagValidity && ldiagValidity){
        valid_solutions.push(board);
    }
    else {
        if(!ldiagValidity){
            console.log("ldiag: " + ldiagValidity)
        }
        if(!rdiagValidity){
            console.log("rdiag: " + rdiagValidity)
        }
    }
    return valid_solutions;
}

function checkRows(board:number[][]){
    var board_size = board.length;
    for(let y = 0; y < board_size; y++) {
        let numQueens:number = 0;
        for(let x = 0; x < board_size; x++) {
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

function checkCols(board:number[][]){
    var board_size = board.length;
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

function checkLeftDiags(board:number[][]) {
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

    var diags:number[][]=[];
    var validpermutedBoards:boolean[]=[];
    let k = 0;
    while (k < board_size * 2){
        var aDiag:number[]=[];
        let numQueens = 0;
        let j = 0;
        while (j <= k){
            let i = k - j;
            if (i < board_size && j < board_size){
                if(board[i][j] == 1){
                    numQueens += 1
                }
                aDiag.push(board[i][j])
            }
            j += 1
        }
        diags.push(aDiag)
        k += 1
    }

    // sometimes an empty cell is added at the end
    // so if that is the case we will remove it now
    var last_diags_element_size = diags[diags.length-1].length;
    if (last_diags_element_size == 0){
        diags.pop();
    }

    let returnValue:boolean = null;
    diags.forEach(diag => {
        let queenCounter = 0;
        diag.forEach(element => {
            if(element == 1){
                queenCounter += 1
            }
        });
        if(queenCounter == 0 || queenCounter == 1){
            validpermutedBoards.push(true);
        } else{
            validpermutedBoards.push(false);
        }
    });
    validpermutedBoards.forEach(value => {
        if(value != true){
            returnValue = false;
        }
    });
    if (returnValue == null){
        returnValue = true;
    }
    return returnValue;
}

function checkRightDiags(board:number[][]){
    var board_size = board.length;
    var rotated_board:number[][]= board;
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

    var diags:number[][]=[];
    var validpermutedBoards:boolean[]=[];
    let k = 0;
    while (k < board_size * 2){
        var aDiag:number[]=[];
        let numQueens = 0;
        let j = 0;
        while (j <= k){
            let i = k - j;
            if (i < board_size && j < board_size){
                if(rotated_board[i][j] == 1){
                    numQueens += 1
                }
                aDiag.push(rotated_board[i][j])
                // process.stdout.write(String(rotated_board[i][j]) + " ");
            }
            j += 1
        }
        // console.log(aDiag)
        diags.push(aDiag)
        // console.log()
        k += 1
    }

    // sometimes an empty cell is added at the end
    // so if that is the case we will remove it now
    var last_diags_element_size = diags[diags.length-1].length;
    if (last_diags_element_size == 0){
        diags.pop();
    }

    let returnValue:boolean = null;
    diags.forEach(diag => {
        let queenCounter = 0;
        diag.forEach(element => {
            if(element == 1){
                queenCounter += 1
            }
        });
        if(queenCounter == 0 || queenCounter == 1){
            validpermutedBoards.push(true);
        } else{
            validpermutedBoards.push(false);
        }
    });
    validpermutedBoards.forEach(value => {
        if(!value){
            returnValue = "false";
        }
    });
    if (returnValue == null){
        returnValue = true;
    }
    return returnValue;
}