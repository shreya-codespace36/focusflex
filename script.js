// ---------------- DOM Elements ----------------
const startBtn = document.getElementById('start-focus');
const intentSection = document.getElementById('intent-section');
const timerSection = document.getElementById('timer-section');
const timerDisplay = document.getElementById('timer');
const endBtn = document.getElementById('end-session');
const realityCheck = document.getElementById('reality-check');
const checkMessage = document.getElementById('check-message');
const tryAgain = document.getElementById('try-again');

// ---------------- Reality check messages ----------------
const messages = [
    "Focus or fail! 😼",
    "You said you’d do it, didn’t you? 😏",
    "Distraction is the enemy, remember that! 🔥",
    "Finish what you started, legend! 💪",
    "Eyes on the prize, not the phone! 📱"
];

// ---------------- Mood colors ----------------
const moods = [
    "mood-1", // fiery
    "mood-2", // calm
    "mood-3", // energized
    "mood-4", // sunny
    "mood-5"  // playful
];
let currentMood = ""; // track current mood class

// ---------------- Timer variables ----------------
let timer;
let timeLeft = 25 * 60; // 25 minutes default

// ---------------- Helper Functions ----------------
function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

// Show reality check with random mood & message
function showRealityCheck() {
    timerSection.classList.add('hidden');
    realityCheck.classList.remove('hidden');

    // Random reality message
    checkMessage.textContent = messages[Math.floor(Math.random() * messages.length)];

    // Random mood
    const mood = moods[Math.floor(Math.random() * moods.length)];
    if(currentMood) realityCheck.classList.remove(currentMood);
    realityCheck.classList.add(mood);
    currentMood = mood;

    // Pop animation
    realityCheck.classList.remove('show');
    setTimeout(() => {
        realityCheck.classList.add('show');
    }, 50);
}

// ---------------- Event Listeners ----------------

// Start session
startBtn.addEventListener('click', () => {
    const goal = document.getElementById('intent-input').value.trim();
    if(goal === ""){
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
            showRealityCheck();
        }
    }, 1000);
});

// End session manually
endBtn.addEventListener('click', () => {
    clearInterval(timer);
    showRealityCheck();
});

// Try again / back to input
tryAgain.addEventListener('click', () => {
    realityCheck.classList.add('hidden');
    intentSection.classList.remove('hidden');
});
