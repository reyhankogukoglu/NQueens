"use strict";
// toggles the timer on button click
function timerToggle() {
    alert("not yet working!");
    let timerBtnStyles = document.getElementById("timer-btn");
    // how can we determine whether the button is green or red?
    // @ts-ignore (TS does not recognize jquery selectors by default)
    $("#timer").fadeToggle(1000); // this does not work
}
// writes current time to start time box
function startTimer() {
    alert("startTimer");
    // document.getElementById("startTime").setAttribute("value", String(Date.now()));
}
// writes current time to end time box
// and calculates the total run time
// for one solution
function stopTimerFirst() {
    alert("stopTimerFirst");
    // document.getElementById("endTime").setAttribute("value", String(Date.now()));
    // calculate the total run time for the first
}
// writes current time to end time box
// and calculates the total run time
// for all solutions
function stopTimer() {
    alert("stopTimer");
    // document.getElementById("endTime").setAttribute("value", String(Date.now()));
    // calculate the total run time
}
