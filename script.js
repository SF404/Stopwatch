var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
let clockState = false;
const music = new Audio();
music.src = "sound.mp3";
music.volume = 0.1;
music.play();
music.loop = true;
const tickSound = new Audio();
tickSound.src = "tick1.mp3";
tickSound.loop = true;
function $id(id) {
    return document.getElementById(id);
}
let video = $id("bgVideo");
function start() {
    if (!clockState) {
        tickSound.play();
        clockState = true;
        video.play();
        // video.load();
        $id("startBtn").value = "Pause";
        stopwatch();
    }
    else {
        tickSound.pause();
        clockState = false;
        video.pause();
        $id("startBtn").value = "Start";
    }
}

let timeoutId;
function stopwatch() {
    clearTimeout(timeoutId);
    if (clockState) {
        count = count + 1;
    }
    if (count == 99) {
        sec = sec + 1;
        count = 0;
        video.playbackRate=sec*0.05+1;
    }
    if (sec == 59) {
        min = min + 1;
        sec = 0;
    }
    if (min == 59) {
        hr = hr + 1;
        min = 0;
        sec = 0;
    }
    let countString = count;
    let secString = sec;
    let minString = min;
    let hrString = hr;
    if (count < 10) countString = "0" + count;
    if (sec < 10) secString = "0" + sec;
    if (min < 10) minString = "0" + min;
    if (hr < 10) hrString = "0" + hr;
    $id("milisec").innerHTML = countString;
    $id("sec").innerHTML = secString;
    $id("min").innerHTML = minString;
    $id("hr").innerHTML = hrString;
    timeoutId = setTimeout("stopwatch()", 10);
}
function reset() {
    clockState = false;
    tickSound.pause();
    video.pause();
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
}