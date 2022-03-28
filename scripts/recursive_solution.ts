let valid_solutions:number[][][]=[];
let first_solution_found:boolean = false;

function recursive_solution(){
    // unset iterative button from being green if recursive was run first
    let recursiveBtn = document.getElementById("iterative-btn")!;
    let recursiveBtnStyles = recursiveBtn.getAttribute("class");
    if (String(recursiveBtnStyles).includes("success")){
        recursiveBtn.setAttribute("class", "mt-4 btn btn-secondary chess-btn");
    }
    // sets the button clicked to green
    let timerBtn = document.getElementById("recursive-btn")!;
    timerBtn.setAttribute("class", "mt-4 btn btn-success");

    startTimer(); // saves the start time of the program
    // so basically for loop checks each column of the row
    // and the Queen(b, r+1) iterate to next row anad then
    // it use recursive to chahck the column of that row
    const board_size = checkHTMLBoardSize()!;
    // initialize the board empty
    let board:number[][] = [];
    for(let k=0; k < board_size; k++){
        let boardRow:number[] = [];
        for(let l=0; l < board_size; l++){
            boardRow.push(0);
        }
        board.push(boardRow);
    }
    // recursive_nqueen(board, 0, board_size, valid_solutions);

    // solveNQUtil(board,0);

    nQueen(board, 0);

    updateBoardHTML(board); // updates the HTML chess board on the screen
    let runtime:number = stopTimer(); // saves the total times and returns value
    unlockTimerButton("Iterative"); // unlocks the timer and sets label
    console.log(valid_solutions.length + " solutions found recursively for " + board_size + "-Queens in " + runtime + " milliseconds!");
}

function nQueen(board:number[][], row:number){
    const board_size = board.length;
    if(row == board_size){
        let size_before:number = valid_solutions.length;
        valid_solutions.push(board);
        if(valid_solutions.length != size_before && !first_solution_found){
            first_solution_found = true;
            stopTimerFirst();
        }
        return
    }

    for(let column=0; column < board_size; column++){
        // @ts-ignore
        if(isSafeRec(board, row, column)){
            board[row][column] = 1;
            nQueen(board, row + 1);
            board[row][column] = 0;
        }
    }
}

function isSafeRec(board:number[][], row:number, column:number){
    const board_size = board.length;
    for(let i=0; i < row; i++){
        if(board[i][column] == 1){
            return false;
        }
    }

    let i:number = row;
    let j:number = column;
    while(i >= 0 && j >= 0){
        if(board[i][j] == 1){
            return false;
        }
        i -= 1;
        j -= 1;
    }

    i = row;
    j = column;
    while(i >= 0 && j < board_size){
        if(board[i][j] == 1){
            return false;
        }
        i -= 1;
        j -= 1;
    }
    return true;
}