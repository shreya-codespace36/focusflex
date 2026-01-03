// DOM Elements
const startBtn = document.getElementById('start-focus');
const intentSection = document.getElementById('intent-section');
const timerSection = document.getElementById('timer-section');
const timerDisplay = document.getElementById('timer');
const endBtn = document.getElementById('end-session');
const realityCheck = document.getElementById('reality-check');
const checkMessage = document.getElementById('check-message');
const tryAgain = document.getElementById('try-again');

// Reality check messages
const messages = [
    "Focus or fail! 😼",
    "You said you’d do it, didn’t you? 😏",
    "Distraction is the enemy, remember that! 🔥",
    "Finish what you started, legend! 💪",
    "Eyes on the prize, not the phone! 📱"
];

let timer;
let timeLeft = 25 * 60; // 25 minutes

// Convert seconds to MM:SS
function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

// Start focus session
startBtn.addEventListener('click', () => {
    if(document.getElementById('intent-input').value === ""){
        alert("Type your goal first!");
        return;
    }

    intentSection.classList.add('hidden');
    timerSection.classList.remove('hidden');
    timeLeft = 25 * 60;
    timerDisplay.textContent = formatTime(timeLeft);

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = formatTime(timeLeft);

        if(timeLeft <= 0){
            clearInterval(timer);
            timerSection.classList.add('hidden');
            realityCheck.classList.remove('hidden');
            checkMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
        }
    }, 1000);
});

// End session manually
endBtn.addEventListener('click', () => {
    clearInterval(timer);
    timerSection.classList.add('hidden');
    realityCheck.classList.remove('hidden');
    checkMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
});

// Next reality check
tryAgain.addEventListener('click', () => {
    realityCheck.classList.add('hidden');
    intentSection.classList.remove('hidden');
});
