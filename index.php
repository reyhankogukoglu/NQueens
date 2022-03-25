<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>N-Queens: Iteration and Recursion</title>
    <!-- RESOURCES -->
    <link rel="stylesheet" href="resources/bootstrap.min.css">
    <link rel="stylesheet" href="resources/chess_styling.css">
    <link rel="stylesheet" href="resources/colors.css">
    <link rel="icon" href="https://cdn.pixabay.com/photo/2012/04/18/00/42/chess-36311_1280.png">
</head>
<body class="px-5 bg-light">
<!--for our iterative method do we need to check rows and columns?-->
<!--<br>maybe add a header/image of queen? see icon image-->
<!--<br>rename your github repo to NQueens-->
<!--<br>change board back to letters at the top?-->

<form id="board-size-form" method="get" action=""><input type="text" name="n" id="board-size-input"></form>

<div class="vstack gap-3">
    <a href="resources/nqueens_manuscript.pdf"><button class="mt-3 btn btn-secondary chess-btn">Manuscript</button></a>
    <a href="https://github.com/reyhankogukoglu/QueenActivity"><button class="mt-3 btn btn-secondary chess-btn">GitHub Repo</button></a>
    <!--    <div class="float-start container mb-5" style="width: 20rem" hidden>-->
    <div id="timer" class="float-start container mb-5" hidden>
        <!-- TIMER (HIDDEN BY DEFAULT) -->
        <div class="row">
            <div class="col">
                <h6 class="mb-3">Start Time</h6>
                <h6 class="mb-3">End Time (1st)</h6>
                <h6 class="mb-3">End Time (All)</h6>
                <h6 class="mb-3">Total Time (1st)</h6>
                <h6 class="mb-3">Total Time (All)</h6>
            </div>
            <div class="col">
                <input class="mb-3" type="text" id="startTime" disabled>
                <input class="mb-3" type="text" id="endTimeFirst" disabled>
                <input class="mb-3" type="text" id="totalTimeFirst" disabled>
                <input class="mb-3" type="text" id="endTime" disabled>
                <input class="mb-3" type="text" id="totalTime" disabled>
            </div>
        </div>
    </div>
    <div id="chess-board">
        <!-- CHESS BOARD HTML -->
        <?php
        if(!isset($_GET['n'])){
            $fileName = "8-queens-board.html";
        } else {
            if($_GET['n'] == "8"){
                $fileName = "8-queens-board.html";
            } else if ($_GET['n'] == "9") {
                $fileName = "9-queens-board.html";
            }
        }

        $fileName = "resources/" . $fileName;
        $handle = fopen($fileName, "r");
        if ($handle) {
            while (($line = fgets($handle)) !== false) {
                echo $line;
            }
            fclose($handle);
        } else {
            echo "error opening chess board HTML file";
        }
        ?>
    </div>
    <div id="menu" class="px-4">
        <select id="boardSizeDropDown" class="mt-3 form-select" aria-label="Default select example" style="width: 24rem">
            <?php
            if(!isset($_GET['n'])){
                echo "<option value='8' id='select8' selected>8-Queens</option><option id='select9' value='9'>9-Queens</option>";
            } else {
                if($_GET['n'] == "8"){
                    echo "<option value='8' id='select8' selected>8-Queens</option><option id='select9' value='9'>9-Queens</option>";
                } else if ($_GET['n'] == "9") {
                    echo "<option value='8' id='select8'>8-Queens</option><option value='9' id='select9' selected>9-Queens</option>";
                }
            }
            ?>
        </select>
        <button id="timer-btn" class="mt-3 btn btn-success" onclick="timerToggle();">Timer</button>
        <button class="mt-3 btn btn-secondary chess-btn" onclick="iterative_solution();">Iterative</button>
        <button class="mt-3 btn btn-secondary chess-btn" onclick="recursive_solution();">Recursive</button>
        <button class="mt-3 btn btn-secondary chess-btn" onclick="change_size();">Change Size</button>
        <div id="solutions" hidden>
            <!-- SOLUTIONS (HIDDEN BY DEFAULT) -->
            <select id="solutionDropDown" class="mt-3 form-select" aria-label="Default select example" style="width: 24rem">
                <option selected>Click here to see solutions..</option>
                <!--        <option value="solution3">Three</option>-->
            </select>
        </div>
    </div>
</div>
<div class="px-5 mt-5">
    <h5>N-Queens by:</h5>
    <a href="http://aldenocain.com/"><h6>Alden O'Cain</h6></a>
    <a href="http://reyhankogukoglu.com/"><h6>Reyhan Kogukoglu</h6></a>
</div>
<!-- SCRIPTS -->
<script src="scripts/timer.js"></script>
<script src="scripts/board.js"></script>
<script src="scripts/check_board.js"></script>
<script src="scripts/iterative_solution.js"></script>
<script src="scripts/recursive_solution.js"></script>
<!-- OTHER RESOURCES -->
<script src="resources/jquery-3.3.1.slim.min.js"></script>
<script src="resources/popper.min.js"></script>
<script src="resources/bootstrap.min.js"></script>
</body>
</html>