"use strict";
function iterative_solution() {
    let valid_solutions = [];
    // set board to queens on the main diagonal
    let board_size = checkHTMLBoardSize();
    // initialize the board with a main diagonal of queens
    let board = [];
    for (let k = 0; k < board_size; k++) {
        let boardRow = [];
        for (let l = 0; l < board_size; l++) {
            boardRow.push(0);
        }
        boardRow[k] = 1;
        board.push(boardRow);
    }
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
    var rowPermutationList = permutations(Array.from(Array(board_size).keys()));
    console.log(rowPermutationList);
    // setup cont. - performing permutedBoard on diagonal sub arrays
    var allPossibleBoards = [];
    var permutedBoard;
    rowPermutationList.forEach(permutation => {
        if (board_size == 8) {
            permutedBoard = [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]
            ];
        }
        else if (board_size == 9) {
            permutedBoard = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];
        }
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
    unlockTimerButton("Iterative");
    // stopTimerFirst();
    // stopTimer();
    unlockSolutions();
    console.log(valid_solutions.length + " solutions found iteratively for " + board_size + "-Queens!");
}
