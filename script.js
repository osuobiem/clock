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

const clockNumbers = document.getElementById('clock-numbers');

const longClassNumbers = [1, 4, 7, 10];


// Generate clock numbers
for (let i = 1; i <= 12; i++) {
    numberClass = longClassNumbers.includes(i) ? 'long' : 'short';
    clockNumber = document.createElement('span');
    clockNumber.setAttribute('class', `clock-number ${numberClass}`);

    clockNumbers.appendChild(clockNumber);
}

// Rotate Second Hand
let secondHandAngle = date.getSeconds() * 6;

let secondsCount = date.getSeconds();
seconds.innerText = secondsCount.toString().length > 1 ? secondsCount : `0${secondsCount}`;

setInterval(() => {
    secondHandAngle += 6;
    secondHand.setAttribute('style', `transform: rotate(${secondHandAngle}deg)`);

    secondsCount = (secondsCount === 59) ? 0 : secondsCount + 1;
    seconds.innerText = secondsCount.toString().length > 1 ? secondsCount : `0${secondsCount}`;
}, 1000);


// Rotate Minute Hand
let minuteHandAngle = date.getMinutes() * 6;
minuteHand.setAttribute('style', `transform: rotate(${minuteHandAngle}deg)`);

let minuteCount = date.getMinutes();
minute.innerText = minuteCount.toString().length > 1 ? minuteCount : `0${minuteCount}`;

setInterval(() => {
    minuteHandAngle += secondHandAngle / (60 * 60);
    minuteHand.setAttribute('style', `transform: rotate(${minuteHandAngle}deg)`);

    if (secondsCount === 0) {
        minuteCount = (new Date()).getMinutes();
        minute.innerText = minuteCount.toString().length > 1 ? minuteCount : `0${minuteCount}`;
    }
}, 1000);


// Rotate Hour Hand
let hourHandAngle = (date.getHours() * 30) + (minuteHandAngle/12) + (secondHandAngle/144);
hourHand.setAttribute('style', `transform: rotate(${hourHandAngle}deg)`);

let hourCount = date.getHours();
hour.innerText = hour.innerText = hourCount.toString().length > 1 ? hourCount : `0${hourCount}`;

setInterval(() => {
    hourHandAngle = (date.getHours() * 30) + (minuteHandAngle/12) + (secondHandAngle/144)
    hourHand.setAttribute('style', `transform: rotate(${hourHandAngle}deg)`);

    if (minuteCount === 0) {
        hourCount = (new Date()).getHours();
        hour.innerText = hourCount.toString().length > 1 ? hourCount : `0${hourCount}`;
    }

    if (hourCount === 0) {
        newDate = (new Date()).getDate();
        day.innerText = newDate.toString().length > 1 ? newDate : `0${newDate}`;
    }
}, 1000);
