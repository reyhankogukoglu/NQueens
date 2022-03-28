<!DOCTYPE html>
<html lang="en">
<head>
<!--    we should make a readme for the repo for nqueens-->
<!--    should be 352 not 280-->
<!--    should scan solution boards for solution lists-->
<!--    remove duplicate boards-->
    <meta charset="UTF-8">
    <title>N-Queens: Iteration and Recursion</title>

    <!-- RESOURCES -->
    <link rel="stylesheet" href="resources/bootstrap.min.css">
    <link rel="stylesheet" href="resources/chess_styling.css">
    <link rel="stylesheet" href="resources/colors.css">
    <link rel="icon" href="resources/queen.png">
    <script src="resources/jquery-3.6.0.min.js"></script>
</head>
<body class="px-5 bg-light">

<!-- HEADER WITH ICON/TEXT -->
<header>
    <div class="pt-4" >
        <img class="float-start mt-2" src="resources/queen.png" alt="Queen Icon" width="112" height="112">
        <div class="px-3" style="display:inline-block">
            <h3 id="title-text">N-Queens</h3>
            <h5>Ontario Tech University</h5>
            <h6>SOFE 2715U: Data Structures</h6>
            <h6>Iterative & Recursive Solutions</h6>
            <h6>8-Queens, 9-Queens & Runtimes</h6>
        </div>
    </div>
</header>

<!-- REMAINING BODY -->
<div class="vstack gap-3">
    <!-- REPORT / GITHUB BUTTONS -->
    <a class="px-3" href="resources/nqueens_manuscript.pdf"><button class="mt-3 btn btn-secondary btn-lg chess-btn">Report</button></a>
    <a href="https://github.com/reyhankogukoglu/NQueens"><button class="mt-3 btn btn-secondary btn-lg chess-btn">GitHub</button></a>

    <!-- TIMER (HIDDEN UNTIL PROGRAM RUNS) -->
    <div id="timer" class="px-5 float-start container mt-3">
        <h3 id="timerTableLabel"></h3>
        <table class="table" style="width: 20rem">
            <thead>
            <tr>
                <th scope="col">Metric</th>
                <th scope="col">Time (ms)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">Start Time</th>
                <td id="startTime"></td>
            </tr>
            <tr>
                <th scope="row">End Time (1st)</th>
                <td id="endTimeFirst"></td>
            </tr>
            <tr>
                <th scope="row">End Time (All)</th>
                <td id="endTime"></td>
            </tr>
            <tr>
                <th scope="row">Total Time (1st)</th>
                <td id="totalTimeFirst"></td>
            </tr>
            <tr>
                <th scope="row">Total Time (All)</th>
                <td id="totalTime"></td>
            </tr>
            </tbody>
        </table>
    </div>
    <script>
        $("#timer").toggle();
    </script>

    <!-- PHP PRINTING IN CHESS BOARD HTML -->
    <!-- (N=8 OR N=9) BASED OFF GET REQUEST -->
    <div id="chess-board">
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

    <!-- USER MENU -->
    <div id="menu" class="px-4">
        <button id="timer-btn" class="mt-4 btn btn-secondary chess-btn" onclick="timerToggle();">Show Timer</button>
        <button id="iterative-btn" class="mt-4 btn btn-secondary chess-btn" onclick="iterative_solution();">Iterative</button>
        <button id="recursive-btn" class="mt-4 btn btn-secondary chess-btn" onclick="recursive_solution();">Recursive</button>
        <button id="test-btn" class="mt-4 btn btn-secondary chess-btn" onclick="test_board();">Test</button>
        <!-- PRINT DIFFERENT BUTTON WITH DIFFERENT LINK -->
        <!-- /W PHP BASED OFF WHICH BOARD IS BEING SHOWN -->
        <?php
        if(!isset($_GET['n'])){
            echo "<a href='../NQueens/?n=9'><button id='changeSizeBtn' class='mt-4 btn btn-secondary chess-btn'>9-Queens</button></a>";
        } else {
            if($_GET['n'] == "8"){
                echo "<a href='../NQueens/?n=9'><button id='changeSizeBtn' class='mt-4 btn btn-secondary chess-btn'>9-Queens</button></a>";
            } else if ($_GET['n'] == "9") {
                echo "<a href='../NQueens/'><button id='changeSizeBtn' class='mt-4 btn btn-secondary chess-btn'>8-Queens</button></a>";
            }
        }
        ?>
        <div id="solutions">
            <!-- SOLUTIONS (HIDDEN UNTIL PROGRAM RUNS) -->
            <select id="solutionDropDown" class="mt-3 form-select" aria-label="Default select example" style="width: 24rem">
                <option selected>Click here to see solutions..</option>
                <!--        <option value="solution3">Three</option>-->
            </select>
        </div>
        <script>
            $("#solutions").toggle();
        </script>
    </div>
</div>
<div id="authors" class="px-4 mt-3">
    <h6 style="display:inline-block">Authors:&nbsp;</h6>
    <a href="http://aldenocain.com/"><button class="mt-1 btn btn-secondary chess-btn">Alden O'Cain</button></a>
    <a href="http://reyhankogukoglu.com/"><button class="mt-1 btn btn-secondary chess-btn">Reyhan Kogukoglu</button></a>
</div>

<!-- SCRIPTS -->
<script src="scripts/board.js"></script>
<script src="scripts/check_board.js"></script>
<script src="scripts/iterative_solution.js"></script>
<script src="scripts/recursive_solution.js"></script>
<script src="scripts/solutions.js"></script>
<script src="scripts/timer.js"></script>

<!-- OTHER RESOURCES -->
<script src="resources/popper.min.js"></script>
<script src="resources/bootstrap.min.js"></script>
</body>
</html>