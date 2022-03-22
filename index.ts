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

function updateBoardHTML(x, y, status){
    // (print) update the board on the screen
}

function printBoardToConsole(){
    // print board matrix to console
}

function buttonClick(){
    toggleXY(1,1);
    // toggleXY(2,1); // row conflict
    toggleXY(1,2); // col conflict
    // toggleXY(0,2); // left diag conflict
    // toggleXY(3,3); // right diag conflict

    console.log("rows: " + checkRows());
    console.log("cols: " + checkCols());
    console.log("Ldiags: " + checkLeftDiags());
    console.log("Rdiags: " + checkRightDiags());

    // document.write(String(Date.now()))
}

function isQueenHere(x: number, y: number){
    // write function check to see if there is a queen in a specific spot < isQueenHere(x, y) >
    return board[x][y];
}

function toggleXY(x: number, y: number){
    // toggle a specific position on the board between 0 and 1
    let status = 0;
    if (board[x][y] == 1){
        board[x][y] = 0;
        status = 0;
    } else {
        board[x][y] = 1
        status = 1;
    }
    updateBoardHTML(x,y, status);
}

function checkRows(){ // works
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

function checkLeftDiags() {
    var diags:number[][]=[];
    var validResults:boolean[]=[];
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
                // process.stdout.write(String(board[i][j]) + " ");
            }
            j += 1
        }
        diags.push(aDiag)
        k += 1
    }

    var last_diags_element_size = diags[diags.length-1].length;
    if (last_diags_element_size == 0){
        diags.pop();
    }
    let returnVal = true;
    diags.forEach(diag => {
        let queenCounter = 0;
        diag.forEach(element => {
            if(element == 1){
                queenCounter += 1
            }
        });
        if(queenCounter == 0 || queenCounter == 1){
            validResults.push(true)
        } else{
            validResults.push(false)
        }
    });
    validResults.forEach(value => {
        if(value != true){
            // console.log()
            returnVal = false;
        }
    });
    return returnVal;
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

function recursive_solution(){
    //
}
