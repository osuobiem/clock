const date = new Date();

const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

const day = document.getElementById('day');
newDate = date.getDate();
day.innerText = newDate.toString().length > 1 ? newDate : `0${newDate}`;

const seconds = document.getElementById('seconds');
const minute = document.getElementById('minute');
const hour = document.getElementById('hour');

const tickSound = document.getElementById('tick-sound');

const clockNumbers = document.getElementById('clock-numbers');

const longClassNumbers = [1, 4, 7, 10];

let playSound = false;

document.addEventListener('click', () => {
    playSound = true;
})

// Generate clock numbers
for (let i = 1; i <= 12; i++) {
    numberClass = longClassNumbers.includes(i) ? 'long' : 'short';
    clockNumber = document.createElement('span');
    clockNumber.setAttribute('class', `clock-number ${numberClass}`);

    clockNumbers.appendChild(clockNumber);
}

// Rotate Clock Hands & Set Digital Watch

// Seconds
let secondHandAngle = date.getSeconds() * 6;

let secondsCount = date.getSeconds();
seconds.innerText = secondsCount.toString().length > 1 ? secondsCount : `0${secondsCount}`;

// Minutes
let minuteHandAngle = date.getMinutes() * 6;
minuteHand.setAttribute('style', `transform: rotate(${minuteHandAngle}deg)`);

let minuteCount = date.getMinutes();
minute.innerText = minuteCount.toString().length > 1 ? minuteCount : `0${minuteCount}`;

// Hours
let hourHandAngle = ((date.getHours() % 12) * 30) + (minuteCount / 2);
hourHand.setAttribute('style', `transform: rotate(${hourHandAngle}deg)`);

let hourCount = date.getHours();
hour.innerText = hour.innerText = hourCount.toString().length > 1 ? hourCount : `0${hourCount}`;


setInterval(() => {
    // Seconds
    secondHandAngle += 6;
    secondHand.setAttribute('style', `transform: rotate(${secondHandAngle}deg)`);

    secondsCount = (secondsCount === 59) ? 0 : secondsCount + 1;
    seconds.innerText = secondsCount.toString().length > 1 ? secondsCount : `0${secondsCount}`;

    // Minutes
    if (secondsCount === 0) {
        minuteHandAngle += 6;
        minuteHand.setAttribute('style', `transform: rotate(${minuteHandAngle}deg)`);

        minuteCount = (new Date()).getMinutes();
        minute.innerText = minuteCount.toString().length > 1 ? minuteCount : `0${minuteCount}`;
    }

    // Hours
    if (minuteCount === 0) {
        hourCount = (new Date()).getHours()
        hour.innerText = hourCount.toString().length > 1 ? hourCount : `0${hourCount}`;

        hourHandAngle = (((new Date()).getHours() % 12) * 30) + (minuteCount / 2);
        hourHand.setAttribute('style', `transform: rotate(${hourHandAngle}deg)`);
    }
    
    // Days
    if (hourCount === 0) {
        newDate = (new Date()).getDate();
        day.innerText = newDate.toString().length > 1 ? newDate : `0${newDate}`;
    }

    playSound ? tickSound.play() : null;
}, 1000);
