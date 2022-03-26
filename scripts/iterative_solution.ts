function iterative_solution(){
    startTimer();
    let first_solution_found:boolean = false;
    let valid_solutions:number[][][]=[];
    // set board to queens on the main diagonal
    const board_size = checkHTMLBoardSize()!;
    // initialize the board with a main diagonal of queens
    let board:number[][] = [];
    for(let k=0; k < board_size; k++){
        let boardRow:number[] = [];
        for(let l=0; l < board_size; l++){
            boardRow.push(0);
        }
        boardRow[k] = 1;
        board.push(boardRow);
    }
    // updateBoardHTML(board);

    // setup - calculating permutations for N-queen on a main diagonal
    const permutations = (ourPermutationsList: any[]) : any => {
        if (ourPermutationsList.length <= 2) return ourPermutationsList.length === 2 ? [ourPermutationsList, [ourPermutationsList[1], ourPermutationsList[0]]] : ourPermutationsList;
        return ourPermutationsList.reduce(
            (acc: string | any[], item: any, i: number) =>
                acc.concat(
                    permutations([...ourPermutationsList.slice(0, i), ...ourPermutationsList.slice(i + 1)]).map((val: any) => [
                        item,
                        ...val,
                    ])
                ),
            []
        );
    };
    var rowPermutationList:number[][] = permutations(Array.from(Array(board_size).keys()));

    // setup cont. - performing permutedBoard on diagonal sub arrays
    var allPossibleBoards:number[][][] = [];
    var permutedBoard:number[][];
    rowPermutationList.forEach(permutation =>{  // loop through all permutations
        if(board_size == 8){
            permutedBoard=[
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0]
            ];
        } else if(board_size == 9){
            permutedBoard=[
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0]
            ];
        }
        let permutationCounter:number = 0;
        permutation.forEach(element =>{  // loop through each element (col position) in the permutation
            permutedBoard[permutationCounter] = board[element];
            permutationCounter += 1;
        });
        allPossibleBoards.push(permutedBoard);
    });

    // action
    allPossibleBoards.forEach(permutedBoard =>{
        board = permutedBoard;
        let size_before:number = valid_solutions.length;
        valid_solutions = checkBoardDiags(board, valid_solutions);
        if(valid_solutions.length != size_before && !first_solution_found){
            first_solution_found = true;
            stopTimerFirst();
        }
    });
    updateBoardHTML(board);
    let runtime:number = stopTimer();
    unlockTimerButton("Iterative");
    // unlockSolutions();
    console.log(valid_solutions.length + " solutions found iteratively for " + board_size + "-Queens in " + runtime + " milliseconds!");
}
