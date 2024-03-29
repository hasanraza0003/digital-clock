const todayDate = document.querySelector(".date-container");
const todayHours = document.querySelector(".hour");
const todayMinutes = document.querySelector(".minute");
const todaySeconds = document.querySelector(".seconds");
const todayDay = document.querySelector(".day-container");

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function addZero(num) {
    return (num < 10 ? "0" : "") + num;
}

function digitalClock() {
    const today = new Date();
    todayDate.innerText = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    todayHours.innerText = addZero(today.getHours());
    todayMinutes.innerText = addZero(today.getMinutes());
    todaySeconds.innerText = addZero(today.getSeconds());
    todayDay.innerText = days[today.getDay()];
}

setInterval(() => {
    digitalClock();
}, 1000);

digitalClock();


