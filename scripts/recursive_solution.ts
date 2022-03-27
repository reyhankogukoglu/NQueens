function isSafe(board:number[][], row:number, col:number) {
    // Check this row on left side
    for(let i = 0; i < col; i++){
        if(board[row][i] == 1)
            return false
    }

    // Check upper diagonal on left side
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j])
            return false

    // Check lower diagonal on left side
    for (let i = row, j = col; j >= 0 && i < board.length; i++, j--)
        if (board[i][j])
            return false
    return true
}

function solveNQUtil(board:number[][], col:number){
    console.log(board);
    // base case: If all queens are placed
    // then return true
    if(col >= board.length)
        return true

    // Consider this column and try placing
    // this queen in all rows one by one
    for(let i=0;i<board.length;i++){

        if(isSafe(board, i, col)){

            // Place this queen in board[i][col]
            board[i][col] = 1

            // recur to place rest of the queens
            if(solveNQUtil(board, col + 1))
                return true

            // If placing queen in board[i][col
            // doesn't lead to a solution, then
            // queen from board[i][col]
            board[i][col] = 0
        }
    }
    // if the queen can not be placed in any row in
    // this column col then return false
    return false
}


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

    // so basically for loop checks each column of the row
    // and the Queen(b, r+1) iterate to next row anad then
    // it use recursive to chahck the column of that row
    const board_size = checkHTMLBoardSize()!;
    let valid_solutions:number[][][]=[];
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

    solveNQUtil(board,0);



    let runtime:number = 0;
    console.log(valid_solutions.length + " solutions found recursively for " + board_size + "-Queens in " + runtime + " milliseconds!");
}

function recursive_nqueen(board:number[][], num_queens:number, max_queens:number, valid_solutions:number[][][]) : boolean {
    let x:number = 0;
    board.forEach(row => {
        let y:number = 0;
        // Start in the leftmost column ( first row )
        row.forEach(cell => {
            if(!isQueenHere(board, x, y)){
                board = toggleXY(board, x, y);
                let cbReturnArray:any[] = checkBoard(board, valid_solutions);
                let reverse:boolean=!cbReturnArray[0];
                if(reverse){
                    // if the queen added invalidated the board
                    board = toggleXY(board, x, y);
                } else {
                    // if the queen added was valid
                    num_queens += 1;
                    if(num_queens == max_queens){
                        // If all queens are placed
                        if(valid_solutions.indexOf(board) != -1){
                            valid_solutions.push(board);
                            board = [
                                [0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0]
                            ];
                        }
                        return true;
                    }
                }
            }
            y += 1;
        });
        x += 1;
    });
    return recursive_nqueen(board, num_queens, max_queens, valid_solutions);
}