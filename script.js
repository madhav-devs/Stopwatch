
let seconds = 0;
let timer = null;

const timeLabel = document.getElementById("time");
const startButton = document.getElementById("start");
const lapButton = document.getElementById("lap");
const lapsList = document.getElementById("laps");

function updateTime() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    timeLabel.textContent =
        String(hrs).padStart(2, "0") + ":" +
        String(mins).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0");
}

startButton.addEventListener("click", function () {
    if (timer === null) {
        timer = setInterval(function () {
            seconds++;
            updateTime();
        }, 1000);

        startButton.textContent = "Stop";
        startButton.classList.add("stop");
    } else {
        clearInterval(timer);
        timer = null;

        startButton.textContent = "Start";
        startButton.classList.remove("stop");

        lapButton.textContent = "Reset";
    }
});

lapButton.addEventListener("click", function () {
    if (timer !== null) {
        let li = document.createElement("li");
        li.textContent = timeLabel.textContent;
        lapsList.prepend(li);
    } else if (lapButton.textContent === "Reset") {
        seconds = 0;
        updateTime();
        lapsList.innerHTML = "";
        lapButton.textContent = "Lap";
    }
});

updateTime();
