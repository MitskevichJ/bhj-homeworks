const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');

let clickCount = 0;
let lastClickTime = null;
let isEnlarged = false;

const speedContainer = document.createElement('div');
speedContainer.innerHTML = 'Скорость клика: <span id="clicker__speed">0</span> клик/сек';
document.querySelector('.clicker').appendChild(speedContainer);
const speedElement = document.getElementById('clicker__speed');

cookie.onclick = function() {
    clickCount++;
    clickerCounter.textContent = clickCount;
    
    if (isEnlarged) {
        cookie.width = 200;
    } else {
        cookie.width = 250;
    }
    cookie.height = cookie.width; 
    isEnlarged = !isEnlarged;
    
    const now = new Date();
    if (lastClickTime !== null) {
        const interval = (now - lastClickTime) / 1000;
        const speed = (1 / interval).toFixed(2);
        speedElement.textContent = speed;
    }
    lastClickTime = now;
};