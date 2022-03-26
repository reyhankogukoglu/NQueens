"use strict";
function iterative_solution() {
    let valid_solutions = [];
    // set board to queens on the main diagonal
    let board = [
        [1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1]
    ];
    const board_size = board.length;
    // updateBoardHTML(board);
    // setup - calculating permutations for N-queen on a main diagonal
    const permutations = (ourPermutationsList) => {
        if (ourPermutationsList.length <= 2)
            return ourPermutationsList.length === 2 ? [ourPermutationsList, [ourPermutationsList[1], ourPermutationsList[0]]] : ourPermutationsList;
        return ourPermutationsList.reduce((acc, item, i) => acc.concat(permutations([...ourPermutationsList.slice(0, i), ...ourPermutationsList.slice(i + 1)]).map((val) => [
            item,
            ...val,
        ])), []);
    };
    var rowPermutationList = permutations([0, 1, 2, 3, 4, 5, 6, 7]);
    // setup cont. - performing permutedBoard on diagonal sub arrays
    var allPossibleBoards = [];
    rowPermutationList.forEach(permutation => {
        var permutedBoard = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ];
        let permutationCounter = 0;
        permutation.forEach(element => {
            permutedBoard[permutationCounter] = board[element];
            permutationCounter += 1;
        });
        allPossibleBoards.push(permutedBoard);
    });
    // action
    allPossibleBoards.forEach(permutedBoard => {
        board = permutedBoard;
        valid_solutions = checkBoardDiags(board, valid_solutions);
    });
    updateBoardHTML(board);
    console.log(valid_solutions.length + " solutions found!");
}
