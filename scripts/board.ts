function sizeSelectChange(){
    let size8DropDown = document.getElementById('select8');
    let size9DropDown = document.getElementById('select9');
    let boardSizeInput = document.getElementById('board-size-input');
    if(size8DropDown.getAttribute("selected") != null){
        boardSizeInput.setAttribute("value", "8");
    }
    if(size9DropDown.getAttribute("selected") != null){
        boardSizeInput.setAttribute("value", "9");
    }
}

function change_size(){
    let size8DropDown = document.getElementById('select8');
    let size9DropDown = document.getElementById('select9');
    let boardSizeInput = document.getElementById('board-size-input');
    if(size8DropDown.getAttribute("selected") != null){
        boardSizeInput.setAttribute("value", "8");
    }
    if(size9DropDown.getAttribute("selected") != null){
        boardSizeInput.setAttribute("value", "9");
    }
    // @ts-ignore
    // document.getElementById('board-size-form').submit();
}

function isQueenHere(board:number[][], x:number, y: number){
    // write function check to see if there is a queen in a specific spot < isQueenHere(x, y) >
    return board[x][y];
}

function toggleXY(board:number[][], x: number, y: number){
    // toggle a specific position on the board array between 0 and 1
    let status = 0;
    if (board[x][y] == 1){
        board[x][y] = 0;
        status = 0;
    } else {
        board[x][y] = 1
        status = 1;
    }
    updateBoardCellHTML(x,y, status); // updates the cell on the screen
    return board;
}

function updateBoardCellHTML(x, y, status){
    let position_as_string = x.toString().concat(y.toString());
    if (status == 1){
        document.getElementById(position_as_string).innerHTML = "♛";
    } else {
        document.getElementById(position_as_string).innerHTML = "";
    }
}

export function updateBoardHTML(board:number[][]){
    let counter1:number = 0;
    board.forEach(column => {
        let counter2:number = 0;
        column.forEach(cell =>{
            let targetID:string = String(counter2) + String(counter1); // IS THIS REVERSED?
            let newValue:string=String(cell)=='1'?'♛':'';
            document.getElementById(targetID).innerHTML = newValue;
            // console.log(targetID);
            counter2 += 1;
        });
        counter1 += 1;
    });
}
