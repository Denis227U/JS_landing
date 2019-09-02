function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000;

        if (dateStop > dateNow) {
            let seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor((timeRemaining / 60 / 60) % 24);

            if (String(seconds).length === 1) {
                seconds = '0' + seconds;
            }
            if (String(minutes).length === 1) {
                minutes = '0' + minutes;
            }
            if (String(hours).length === 1) {
                hours = '0' + hours;
            }

            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        } else {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }

    function updateClock() {
        let timer = getTimeRemaining();

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;

        if (timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        }
    }

    updateClock();
}

export default countTimer;