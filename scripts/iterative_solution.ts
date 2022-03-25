function iterative_solution(){
    let valid_solutions:number[][][]=[];
    // set board to queens on the main diagonal
    let board = [
        [1,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0],
        [0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0],
        [0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,1]
    ];
    const board_size = board.length;
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
    var rowPermutationList:number[][] = permutations([0,1,2,3,4,5,6,7]);

    // setup cont. - performing permutedBoard on diagonal sub arrays
    var allPossibleBoards:number[][][] = [];
    rowPermutationList.forEach(permutation =>{  // loop through all permutations
        var permutedBoard:number[][]=[
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]
        ];
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
        console.log(board);
        valid_solutions = checkBoardDiags(board, valid_solutions);
    });
    updateBoardHTML(board);
    console.log(valid_solutions.length + " solutions found!");
}
