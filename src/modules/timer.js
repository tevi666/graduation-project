export const timer = (deadline) => {
    const timerDays = document.querySelectorAll('.count_1');
    const timerHours = document.querySelectorAll('.count_2');
    const timerMinutes = document.querySelectorAll('.count_3');
    const timerSeconds = document.querySelectorAll('.count_4');
    let addingZero;

    let interval;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        };
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();

        addingZero = number => number < 10 ? `0${number} ` : number;

        timerDays.forEach(days => {
            days.innerHTML = `Дней:</br> <span>${addingZero(getTime.days)}</span>`;
        });
        timerHours.forEach(hours => {
            hours.innerHTML = `Часов:</br> <span>${addingZero(getTime.hours)}</span>`;
        });
        timerMinutes.forEach(minutes => {
            minutes.innerHTML = `Минут:</br> <span>${addingZero(getTime.minutes)}</span>`;
        });
        timerSeconds.forEach(seconds => {
            seconds.innerHTML = `Секунд:</br> <span>${addingZero(getTime.seconds)}</span>`;
        });
        if (getTime.timeRemaining <= 0) {
            clearInterval(interval);
            timerDays.forEach(days => {
                days.innerHTML = `Дней:</br> <span>00</span>`;
            });
            timerHours.forEach(hours => {
                hours.innerHTML = `Часов:</br> <span>00</span>`;
            });
            timerMinutes.forEach(minutes => {
                minutes.innerHTML = `Минут:</br> <span>00</span>`;
            });
            timerSeconds.forEach(seconds => {
                seconds.innerHTML = `Секунд:</br> <span>00</span>`;
            });
        }
    };
    updateClock();
    interval = setInterval(updateClock, 1000);
};