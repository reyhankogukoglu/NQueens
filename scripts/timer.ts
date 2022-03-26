function timerToggle(){
    // toggles the timer on button click (once unlocked)
    let timerBtn = document.getElementById("timer-btn")!;
    let timerBtnStyles = timerBtn.getAttribute("class");
    if (String(timerBtnStyles).includes("success") || String(timerBtnStyles).includes("danger")){
        $("#timer").toggle();
        if (String(timerBtnStyles).includes("success")){
            timerBtn.innerHTML = "Hide";
            timerBtn.setAttribute("class", "mt-4 btn btn-danger");
        } else {
            timerBtn.innerHTML = "Timer";
            timerBtn.setAttribute("class", "mt-4 btn btn-success");
        }
    } else {
        alert("Click either Iterative or Recursive first!");
    }
}

function unlockTimerButton(method:string){
    let timerTableLabel = document.getElementById("timerTableLabel")!;
    timerTableLabel.innerHTML = method;
    // unlocks the timer button after finding solutions
    let timerBtn = document.getElementById("timer-btn")!;
    timerBtn.setAttribute("class", "mt-4 btn btn-success");
}

function startTimer(){
    // writes current time to start time box
    let startTimeField = document.getElementById("startTime")!;
    startTimeField.innerHTML = String(Date.now());
}

function stopTimerFirst(){
    // calculate the total run time for the first
    let secondTime:number = Date.now();
    let endTimeFirstField = document.getElementById("endTimeFirst")!;
    endTimeFirstField.innerHTML = String(secondTime);

    let startTimeField = document.getElementById("startTime")!;
    let firstTime:number = Number(startTimeField.innerHTML);

    let timeDifference:number = secondTime - firstTime;
    let totalTimeFirstField = document.getElementById("totalTimeFirst")!;
    totalTimeFirstField.innerHTML = String(timeDifference);
}

function stopTimer(){
    // calculate the total run time for the first
    let secondTime:number = Date.now();
    let endTimeField = document.getElementById("endTime")!;
    endTimeField.innerHTML = String(secondTime);

    let startTimeField = document.getElementById("startTime")!;
    let firstTime:number = Number(startTimeField.innerHTML);

    let timeDifference:number = secondTime - firstTime;
    let totalTimeField = document.getElementById("totalTime")!;
    totalTimeField.innerHTML = String(timeDifference);
}
