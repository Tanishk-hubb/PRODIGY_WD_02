let startTime, updatedTime, difference = 0, tInterval, running = false;
let lapCounter = 1;

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime() - difference;
        tInterval = setInterval(getShowTime, 10); // Update every 10 milliseconds
        running = true;
        document.getElementById('start').disabled = true;
        document.getElementById('pause').innerHTML = "Pause";
        document.getElementById('pause').disabled = false;
        document.getElementById('reset').disabled = false;
        document.getElementById('lap').disabled = false;
    }
}

function pauseStopwatch() {
    if (running) {
        clearInterval(tInterval);
        running = false;
        document.getElementById('pause').innerHTML = "Unpause";
    } else {
        startStopwatch();
        document.getElementById('pause').innerHTML = "Pause";
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    document.getElementById('display').innerHTML = '00:00:00.00';
    document.getElementById('laps').innerHTML = '';
    lapCounter = 1;
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
    document.getElementById('reset').disabled = true;
    document.getElementById('lap').disabled = true;
}

function lapTime() {
    const lapTime = document.getElementById('display').innerHTML;
    const lapRecord = document.createElement('li');
    lapRecord.innerText = `Lap ${lapCounter}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapRecord);
    lapCounter++;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    document.getElementById('display').innerHTML = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
}
