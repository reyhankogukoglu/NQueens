"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = require("./board");
var check_board_1 = require("./check_board");
function iterative_solution() {
    var valid_solutions = [];
    // set board to queens on the main diagonal
    var board = [
        [1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1]
    ];
    var board_size = board.length;
    // updateBoardHTML(board);
    // setup - calculating permuations for N-queen on a main diagonal
    var permutations = function (ourPermutationsList) {
        if (ourPermutationsList.length <= 2)
            return ourPermutationsList.length === 2 ? [ourPermutationsList, [ourPermutationsList[1], ourPermutationsList[0]]] : ourPermutationsList;
        return ourPermutationsList.reduce(function (acc, item, i) {
            return acc.concat(permutations(__spreadArray(__spreadArray([], ourPermutationsList.slice(0, i), true), ourPermutationsList.slice(i + 1), true)).map(function (val) { return __spreadArray([
                item
            ], val, true); }));
        }, []);
    };
    var rowPermutationList = permutations([0, 1, 2, 3, 4, 5, 6, 7]);
    // setup cont. - performing permutedBoard on diagonal subarrays
    var allPossibleBoards = [];
    rowPermutationList.forEach(function (permutation) {
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
        var permutationCounter = 0;
        permutation.forEach(function (element) {
            permutedBoard[permutationCounter] = board[element];
            permutationCounter += 1;
        });
        allPossibleBoards.push(permutedBoard);
    });
    console.log(allPossibleBoards[678]);
    // action
    allPossibleBoards.forEach(function (permutedBoard) {
        board = permutedBoard;
        console.log(board);
        valid_solutions = (0, check_board_1.checkBoardDiags)(board, valid_solutions);
    });
    (0, board_1.updateBoardHTML)(board);
    console.log(valid_solutions.length + " solutions found!");
}
