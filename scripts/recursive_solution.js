"use strict";
function recursive_solution() {
    alert("recursive_solution");
    // so basically for loop checks each column of the row
    // and the Queen(b, r+1) iterate to next row anad then
    // it use recursive to chahck the column of that row
    // 1) Start in the leftmost column
    // 2) If all queens are placed
    // return true
    // 3) Try all rows in the current column.
    //     Do following for every tried row.
    //     a) If the queen can be placed safely in this row
    // then mark this [row, column] as part of the
    // solution and recursively check if placing
    //     queen here leads to a solution.
    //     b) If placing the queen in [row, column] leads to
    // a solution then return true.
    //     c) If placing queen doesn't lead to a solution then
    // unmark this [row, column] (Backtrack) and go to
    // step (a) to try other rows.
    // 4) If all rows have been tried and nothing worked,
    // return false to trigger backtracking.
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
    console.log(valid_solutions.length + " solutions found!");
}
