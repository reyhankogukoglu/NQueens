<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>N-Queens: Iteration and Recursion</title>
    <!-- RESOURCES -->
    <link rel="stylesheet" href="resources/bootstrap.min.css">
    <link rel="stylesheet" href="resources/chess_styling.css">
    <link rel="stylesheet" href="resources/colors.css">
    <link rel="icon" href="resources/queen.png">
</head>
<body class="px-5 bg-light">
<header>
    <div class="pt-4" >
        <img class="float-start" src="resources/queen.png" alt="Queen Icon" width="112" height="112">
        <div class="px-3" style="display:inline-block">
            <h3>N-Queens</h3>
            <h6>SOFE 2715U: Data Structures</h6>
            <h6>Iterative & Recursive Solutions</h6>
            <h6>8-Queens, 9-Queens & Runtimes</h6>
        </div>
    </div>
</header>
<div class="vstack gap-3">
    <a href="resources/nqueens_manuscript.pdf"><button class="mt-3 btn btn-secondary chess-btn">Manuscript</button></a>
    <a href="https://github.com/reyhankogukoglu/NQueens"><button class="mt-3 btn btn-secondary chess-btn">GitHub Repo</button></a>
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
        <!-- PHP PRINTING IN CHESS BOARD HTML -->
        <!-- (N=8 OR N=9) BASED OFF GET REQUEST -->
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
        <button id="timer-btn" class="mt-3 btn btn-success" onclick="timerToggle();">Timer</button>
        <button class="mt-3 btn btn-secondary chess-btn" onclick="iterative_solution();">Iterative</button>
        <button class="mt-3 btn btn-secondary chess-btn" onclick="recursive_solution();">Recursive</button>
        <!-- PRINT DIFFERENT BUTTON WITH DIFFERENT LINK -->
        <!-- /W PHP BASED OFF WHICH BOARD IS BEING SHOWN -->
        <?php
        if(!isset($_GET['n'])){
            echo "<a href='../NQueens/?n=9'><button class='mt-3 btn btn-secondary chess-btn'>9-Queens</button></a>";
        } else {
            if($_GET['n'] == "8"){
                echo "<a href='../NQueens/?n=9'><button class='mt-3 btn btn-secondary chess-btn' onclick='change_size();'>9-Queens</button></a>";
            } else if ($_GET['n'] == "9") {
                echo "<a href='../NQueens/'><button class='mt-3 btn btn-secondary chess-btn' onclick='change_size();'>8-Queens</button></a>";
            }
        }
        ?>
        <div id="solutions" hidden>
            <!-- SOLUTIONS (HIDDEN BY DEFAULT) -->
            <select id="solutionDropDown" class="mt-3 form-select" aria-label="Default select example" style="width: 24rem">
                <option selected>Click here to see solutions..</option>
                <!--        <option value="solution3">Three</option>-->
            </select>
        </div>
    </div>
</div>
<div class="px-4 mt-3">
    <h4>N-Queens by:</h4>
    <a href="http://aldenocain.com/"><button class="mt-1 btn btn-secondary chess-btn">Alden O'Cain</button></a>
    <a href="http://reyhankogukoglu.com/"><button class="mt-1 btn btn-secondary chess-btn">Reyhan Kogukoglu</button></a>
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