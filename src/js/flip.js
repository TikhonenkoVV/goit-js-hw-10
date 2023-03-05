import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    startButton: document.querySelector('[data-start]'),
    stopButton: document.querySelector('[data-stop]'),
    dateInput: document.querySelector('#container__datetime-picker'),
    daysTens: document.querySelector('[data-days-tens]'),
    daysOnes: document.querySelector('[data-days-ones]'),
    hoursTens: document.querySelector('[data-hours-tens]'),
    hoursOnes: document.querySelector('[data-hours-ones]'),
    minutesTens: document.querySelector('[data-minutes-tens]'),
    minutesOnes: document.querySelector('[data-minutes-ones]'),
    secondsTens: document.querySelector('[data-seconds-tens]'),
    secondsOnes: document.querySelector('[data-seconds-ones]'),
};

refs.startButton.disabled = true;
refs.stopButton.disabled = true;

let timerId;

Notify.init({
    position: 'center-top',
});
const convertMs = ms => {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
};

const flip = (flipCard, newNumber) => {
    const topHalf = flipCard.querySelector('.top');
    const startNumber = parseInt(topHalf.textContent);
    if (newNumber === startNumber) return;

    const bottomHalf = flipCard.querySelector('.bottom');
    const topFlip = document.createElement('div');
    topFlip.classList.add('top-flip');
    const bottomFlip = document.createElement('div');
    bottomFlip.classList.add('bottom-flip');

    top.textContent = startNumber;
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener('animationstart', e => {
        topHalf.textContent = newNumber;
    });
    topFlip.addEventListener('animationend', e => {
        topFlip.remove();
    });
    bottomFlip.addEventListener('animationend', e => {
        bottomHalf.textContent = newNumber;
        bottomFlip.remove();
    });
    flipCard.append(topFlip, bottomFlip);
};

const flipAllCards = time => {
    const seconds = convertMs(time).seconds;
    const minutes = convertMs(time).minutes;
    const hours = convertMs(time).hours;
    const days = convertMs(time).days;

    flip(refs.daysTens, Math.floor(days / 10));
    flip(refs.daysOnes, days % 10);
    flip(refs.hoursTens, Math.floor(hours / 10));
    flip(refs.hoursOnes, hours % 10);
    flip(refs.minutesTens, Math.floor(minutes / 10));
    flip(refs.minutesOnes, minutes % 10);
    flip(refs.secondsTens, Math.floor(seconds / 10));
    flip(refs.secondsOnes, seconds % 10);
};

const onStartButtonClick = e => {
    e.target.disabled = true;
    refs.stopButton.disabled = false;
    refs.dateInput.disabled = true;
    const currentDate = new Date(refs.dateInput.value).getTime();
    let previousTimeBetweenDates;
    timerId = setInterval(() => {
        const newDate = new Date().getTime();
        const ms = currentDate - newDate;
        if (ms >= 0) flipAllCards(ms);
        else {
            clearInterval(timerId);
            refs.dateInput.disabled = false;
            refs.stopButton.disabled = true;
            Notify.info('Сountdown is over!');
        }

        previousTimeBetweenDates = ms;
    }, 250);
};

const onStopButtonClick = e => {
    e.target.disabled = true;
    refs.dateInput.disabled = false;
    refs.startButton.disabled = false;
    clearInterval(timerId);
    flip(refs.daysTens, 0);
    flip(refs.daysOnes, 0);
    flip(refs.hoursTens, 0);
    flip(refs.hoursOnes, 0);
    flip(refs.minutesTens, 0);
    flip(refs.minutesOnes, 0);
    flip(refs.secondsTens, 0);
    flip(refs.secondsOnes, 0);
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    maxDate: new Date().fp_incr(90),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date().getTime();
        const selectedDate = selectedDates[0].getTime();
        const ms = selectedDate - currentDate;
        if (selectedDate > currentDate) {
            refs.startButton.disabled = false;
        } else {
            Notify.failure('Please choose a date in the future');
            refs.startButton.disabled = true;
        }
    },
};

flatpickr('#container__datetime-picker', options);

refs.startButton.addEventListener('click', onStartButtonClick);

refs.stopButton.addEventListener('click', onStopButtonClick);
