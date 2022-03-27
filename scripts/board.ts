function test_board(){
    // https://queens.lyndenlea.info/nqueens.php?pg=solutions&sol=9
    const board_size = checkHTMLBoardSize()!;
    // initialize the board with a main diagonal of queens
    // let board:number[][] = [];
    // for(let k=0; k < board_size; k++){
    //     let boardRow:number[] = [];
    //     for(let l=0; l < board_size; l++){
    //         boardRow.push(0);
    //     }
    //     board.push(boardRow);
    // }
    let board:number[][]=[
        [1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0]
    ];
    // board = toggleXY(board,0,0);
    // board = toggleXY(board,8,8);
    let valid_solutions:number[][][]=[];
    valid_solutions = checkBoardDiags(board, valid_solutions);
    if(valid_solutions.length != 1){
        let title = document.getElementById("title-text")!;
        title.innerHTML = "failed";
    } else {
        let title = document.getElementById("title-text")!;
        title.innerHTML = "passed";
    }
    updateBoardHTML(board);
}

function sizeSelectChange(){
    let size8DropDown = document.getElementById('select8')!;
    let size9DropDown = document.getElementById('select9')!;
    let boardSizeInput = document.getElementById('board-size-input')!;
    if(size8DropDown.getAttribute("selected") != null){
        boardSizeInput.setAttribute("value", "8");
    }
    if(size9DropDown.getAttribute("selected") != null){
        boardSizeInput.setAttribute("value", "9");
    }
}

function change_size(){
    let size8DropDown = document.getElementById('select8')!;
    let size9DropDown = document.getElementById('select9')!;
    let boardSizeInput = document.getElementById('board-size-input')!;
    if(size8DropDown.getAttribute("selected") != null){
        boardSizeInput.setAttribute("value", "8");
    }
    if(size9DropDown.getAttribute("selected") != null){
        boardSizeInput.setAttribute("value", "9");
    }
    // @ts-ignore
    // document.getElementById('board-size-form').submit();
}

function checkHTMLBoardSize(){
    let changeSizeBtn = document.getElementById("changeSizeBtn")!;
    let sizeHTML = changeSizeBtn.innerHTML;
    if (String(sizeHTML).includes("8")){
        return 9;
    } else if (String(sizeHTML).includes("9")){
        return 8;
    }
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

function updateBoardCellHTML(x:number, y:number, status:number){
    let position_as_string = x.toString().concat(y.toString());
    if (status == 1){
        let cell = document.getElementById(position_as_string)!;
        cell.innerHTML = "♛";
    } else {
        let cell = document.getElementById(position_as_string)!;
        cell.innerHTML = "";
    }
}

function updateBoardHTML(board:number[][]){
    let counter1:number = 0;
    board.forEach(column => {
        let counter2:number = 0;
        column.forEach(cell =>{
            let targetID:string = String(counter2) + String(counter1); // IS THIS REVERSED?
            let newValue:string=String(cell)=='1'?'♛':'';
            let HTMLcell = document.getElementById(targetID)!;
            HTMLcell.innerHTML = newValue;
            // console.log(targetID);
            counter2 += 1;
        });
        counter1 += 1;
    });
}

function convertValidSolutionsArray(solutions:number[][][]) : number[][][] {
    alert("convertValidSolutionsArray");
    let converted_solutions:number[][][]=[];
    solutions.forEach(solution => {
        let converted_solution:number[][]=[];
        converted_solution = findQueenPositionsFromBoard(solution);
        converted_solutions.push(converted_solution);
    });
    return converted_solutions;
}

function findQueenPositionsFromBoard(board:number[][]) : number[][] {
    alert("findQueenPositionsFromBoard");
    let converted_solution:number[][]=[];
    return converted_solution;
}