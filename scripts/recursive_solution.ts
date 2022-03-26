function recursive_solution(){
    // so basically for loop checks each column of the row
    // and the Queen(b, r+1) iterate to next row anad then
    // it use recursive to chahck the column of that row
    let valid_solutions:number[][][]=[];
    // set board to queens on the main diagonal
    let board = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ];
    const board_size = board.length;
    recursive_nqueen(board, 0, board_size, valid_solutions);
    console.log(valid_solutions.length + " solutions found!");
}

function recursive_nqueen(board, num_queens, max_queens, valid_solutions){
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
                    }
                }
            }
            y += 1;
        });
        x += 1;
    });
    recursive_nqueen(board, num_queens, max_queens, valid_solutions);
}