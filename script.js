const toggleBtn = document.querySelector('#toogleBtn');
const secondCount = document.querySelector('#secondCount');
const miliSecondCount = document.querySelector('#miliSecondCount');
const reset = document.querySelector('#reset');
const startPauseBtn = document.querySelector('#startPauseBtn');

let isPause = false;
let secondCounter = 0;
let miliSecondCounter = 0;
let intervalId;

function updateDisplay() {
    secondCount.innerHTML = secondCounter;
    miliSecondCount.innerHTML = miliSecondCounter < 10 ? `0${miliSecondCounter}` : miliSecondCounter;
}

function startInterval() {
    intervalId = setInterval(() => {
        if (isPause) {
            startPauseBtn.innerHTML = 'paused';
            startPauseBtn.style.backgroundColor = 'blue';
            miliSecondCounter++;
            if (miliSecondCounter === 100) {
                miliSecondCounter = 0;
                secondCounter++;
            }
            updateDisplay();
        } else {
            startPauseBtn.innerHTML = 'Start'
            startPauseBtn.style.backgroundColor = 'green'
        }
    }, 10);
}

startPauseBtn.addEventListener('click', function () {
    isPause = !isPause;
});

toggleBtn.addEventListener('click', function () {
    isPause = !isPause;
});

reset.addEventListener('click', function () {
    isPause = false;
    secondCounter = 0;
    miliSecondCounter = 0;
    updateDisplay();
});

window.addEventListener('unload', function () {
    clearInterval(intervalId);
});

// Initial display update
updateDisplay();
// Start the interval initially
startInterval();