export const timer = (deadline) => {
    const timerDays = document.querySelector('.count_1');
    const timerHours = document.querySelector('.count_2');
    const timerMinutes = document.querySelector('.count_3');
    const timerSeconds = document.querySelector('.count_4');
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

        timerDays.textContent = addingZero(getTime.days);
        timerHours.textContent = addingZero(getTime.hours);
        timerMinutes.textContent = addingZero(getTime.minutes);
        timerSeconds.textContent = addingZero(getTime.seconds);

        if (getTime.timeRemaining <= 0) {
            clearInterval(interval);
            timerDays.textContent = '00';
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    };
    updateClock();
    interval = setInterval(updateClock, 1000);
};