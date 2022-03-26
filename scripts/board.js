"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBoardHTML = void 0;
function sizeSelectChange() {
    var size8DropDown = document.getElementById('select8');
    var size9DropDown = document.getElementById('select9');
    var boardSizeInput = document.getElementById('board-size-input');
    if (size8DropDown.getAttribute("selected") != null) {
        boardSizeInput.setAttribute("value", "8");
    }
    if (size9DropDown.getAttribute("selected") != null) {
        boardSizeInput.setAttribute("value", "9");
    }
}
function change_size() {
    var size8DropDown = document.getElementById('select8');
    var size9DropDown = document.getElementById('select9');
    var boardSizeInput = document.getElementById('board-size-input');
    if (size8DropDown.getAttribute("selected") != null) {
        boardSizeInput.setAttribute("value", "8");
    }
    if (size9DropDown.getAttribute("selected") != null) {
        boardSizeInput.setAttribute("value", "9");
    }
    // @ts-ignore
    // document.getElementById('board-size-form').submit();
}
function isQueenHere(board, x, y) {
    // write function check to see if there is a queen in a specific spot < isQueenHere(x, y) >
    return board[x][y];
}
function toggleXY(board, x, y) {
    // toggle a specific position on the board array between 0 and 1
    var status = 0;
    if (board[x][y] == 1) {
        board[x][y] = 0;
        status = 0;
    }
    else {
        board[x][y] = 1;
        status = 1;
    }
    updateBoardCellHTML(x, y, status); // updates the cell on the screen
    return board;
}
function updateBoardCellHTML(x, y, status) {
    var position_as_string = x.toString().concat(y.toString());
    if (status == 1) {
        document.getElementById(position_as_string).innerHTML = "♛";
    }
    else {
        document.getElementById(position_as_string).innerHTML = "";
    }
}
function updateBoardHTML(board) {
    var counter1 = 0;
    board.forEach(function (column) {
        var counter2 = 0;
        column.forEach(function (cell) {
            var targetID = String(counter2) + String(counter1); // IS THIS REVERSED?
            var newValue = String(cell) == '1' ? '♛' : '';
            document.getElementById(targetID).innerHTML = newValue;
            // console.log(targetID);
            counter2 += 1;
        });
        counter1 += 1;
    });
}
exports.updateBoardHTML = updateBoardHTML;
