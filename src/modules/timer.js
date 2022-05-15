export const timer = (deadline) => {
	const timersDays = document.querySelectorAll('.count_1 span');
	const timersHours = document.querySelectorAll('.count_2 span');
	const timersMinutes = document.querySelectorAll('.count_3 span');
	const timersSeconds = document.querySelectorAll('.count_4 span');

	if (!deadline) {
		for (let i = 0; i < timersDays.length; i++) {
			try {
				timersDays[i].textContent = '00';
				timersHours[i].textContent = '00';
				timersMinutes[i].textContent = '00';
				timersSeconds[i].textContent = '00';
			} catch (error) {
				console.log(error.message);
			}
		}
		return;
	}

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
		for (let i = 0; i < timersDays.length; i++) {
			try {
				timersDays[i].textContent = getTime.days < 10 ? '0' + getTime.days : getTime.days;
				timersHours[i].textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;
				timersMinutes[i].textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;
				timersSeconds[i].textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;
			} catch (error) {
				console.log(error.message);
			}
		}
		if (getTime.timeRemaining <= 0) {
			clearInterval(interval);
			for (let i = 0; i < timersDays.length; i++) {
				try {
					timersDays[i].textContent = '00';
					timersHours[i].textContent = '00';
					timersMinutes[i].textContent = '00';
					timersSeconds[i].textContent = '00';
				} catch (error) {
					console.log(error.message);
				}
			}
		}
	};

	updateClock();
	interval = setInterval(updateClock, 500);
};