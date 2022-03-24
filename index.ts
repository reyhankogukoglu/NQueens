// represent the board as an array
// x column, y is the row

function startTimer(){
    document.getElementById("startTime").setAttribute("value", String(Date.now()));
}
function stopTimer(){
    document.getElementById("endTime").setAttribute("value", String(Date.now()));
}

var valid_solutions:number[][][]=[];

var board:number[][]=[
    [1,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0],
    [0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,1]
]
// console.log(board)

// board:number[][]=[
//     [0,0,0,1,0,0,0,0],
//     [0,0,0,0,1,0,0,0],
//     [0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,0,0,1],
//     [0,0,0,0,0,0,1,0],
//     [1,0,0,0,0,0,0,0],
//     [0,0,0,0,0,1,0,0],
//     [0,1,0,0,0,0,0,0]
// ]


// board=[
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0]
// ]
var board_size = board.length;
let leftDiagReturnVal = null;
let rightDiagReturnVal = null;

function updateBoardHTML(x, y, status){
    // (print) update the board on the screen
    let position_as_string = x.toString().concat(y.toString());
    if (status == 1){
        document.getElementById(position_as_string).innerHTML = "♛";
    } else {
        document.getElementById(position_as_string).innerHTML = "";
    }
}

function buttonClick(){
    console.log("Play button was clicked or page was reloaded");
    // document.write(String(Date.now()) + "<br>")

    // toggleXY(1,1);
    // toggleXY(2,1); // row conflict
    // toggleXY(1,2); // col conflict
    // toggleXY(3,3); // left diag conflict
    // toggleXY(4,4); // left diag conflict 2
    // toggleXY(0,2); // right diag conflict
    // toggleXY(2,0); // right diag conflict 2

    // console.log("rows: " + checkRows());
    // console.log("cols: " + checkCols());
    // console.log("Ldiags: " + checkLeftDiags());
    // console.log("Rdiags: " + checkRightDiags());

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

function checkCols(){ // works
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
                // process.stdout.write(String(rotated_board[i][j]) + " ");
            }
            j += 1
        }
        // console.log(aDiag)
        diags.push(aDiag)
        // console.log()
        k += 1
    }

    var last_diags_element_size = diags[diags.length-1].length;
    if (last_diags_element_size == 0){
        diags.pop();
    }

    diags.forEach(diag => {
        let queenCounter = 0;
        diag.forEach(element => {
            if(element == 1){
                queenCounter += 1
            }
        });
        if(queenCounter == 0 || queenCounter == 1){
            validResults.push(true);
        } else{
            validResults.push(false);
        }
    });
    validResults.forEach(value => {
        if(value != true){
            leftDiagReturnVal = false;
        }
    });
    if (leftDiagReturnVal == null){
        leftDiagReturnVal = true;
    }
    return leftDiagReturnVal;
}

function checkRightDiags(){
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
    var validResults:boolean[]=[];
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

    var last_diags_element_size = diags[diags.length-1].length;
    if (last_diags_element_size == 0){
        diags.pop();
    }

    diags.forEach(diag => {
        let queenCounter = 0;
        diag.forEach(element => {
            if(element == 1){
                queenCounter += 1
            }
        });
        if(queenCounter == 0 || queenCounter == 1){
            validResults.push(true);
        } else{
            validResults.push(false);
        }
    });
    validResults.forEach(value => {
        if(value != true){
            rightDiagReturnVal = false;
        }
    });
    if (rightDiagReturnVal == null){
        rightDiagReturnVal = true;
    }
    return rightDiagReturnVal;
}

function checkBoard(){
    var rowValidity:boolean = checkRows();
    var colValidity:boolean = checkCols();
    var ldiagValidity:boolean = checkLeftDiags();
    var rdiagValidity:boolean = checkRightDiags();
    if (rowValidity && colValidity && rdiagValidity && ldiagValidity){
        valid_solutions.push(board);
        console.log(rowValidity)
        console.log(colValidity)
        console.log(ldiagValidity)
        console.log(rdiagValidity)

        console.log("board was valid")
    }
    else{
        //console.log("was not valid")
        // console.log(rowValidity)
        // console.log(colValidity)
        //console.log(ldiagValidity)
        //console.log(rdiagValidity)
    }
}

function recursive_solution(){
    //
}

function iterative_solution(){
    //
}
const permutations = ourPermutationsList => {
    if (ourPermutationsList.length <= 2) return ourPermutationsList.length === 2 ? [ourPermutationsList, [ourPermutationsList[1], ourPermutationsList[0]]] : ourPermutationsList;
    return ourPermutationsList.reduce(
        (acc, item, i) =>
            acc.concat(
                permutations([...ourPermutationsList.slice(0, i), ...ourPermutationsList.slice(i + 1)]).map(val => [
                    item,
                    ...val,
                ])
            ),
        []
    );
};

var ourComboList:number[][] = permutations([0,1,2,3,4,5,6,7]);
var allResults:number[][][] = [];
ourComboList.forEach(combo =>{  // loop through all permutations
    var oneResult:number[][]=[]
    combo.forEach(element =>{  // loop through each element (col position) in the permutation
        oneResult.push(board[element]);
        // oneResult.append(ourBoard[element])
    });
    allResults.push(oneResult);
});

allResults.forEach(entry =>{
    checkBoard();
});

console.log(allResults)
console.log(board);
board = allResults[0];
checkBoard();

//
// var counter:number = 0;
// allResults.forEach(result =>{
//     board = result;
//     checkBoard();
//     // console.log(counter)
//     counter += 1;
// });
// checkBoard();
// // console.log(valid_solutions);
// console.log("there were " + valid_solutions.length + " valid solutions found");
