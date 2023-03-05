import { defaultStyle, styleBodyColor } from './style.js';

defaultStyle();
styleBodyColor();

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
};

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
buttonStop.setAttribute('disabled', 'true');

let timerId;

const togleButton = button => {
    const isStartButtonDisabled =
        button.hasAttribute('disabled') === true || false;
    if (isStartButtonDisabled) {
        button.removeAttribute('disabled');
        button.style.backgroundColor = 'rgb(37, 33, 33)';
        button.style.cursor = 'pointer';
    } else {
        button.setAttribute('disabled', 'true');
        button.style.cursor = 'no-drop';
        button.style.backgroundColor = '#d8d8d8';
    }
};

const onButtonStartClick = e => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    togleButton(buttonStart);
    togleButton(buttonStop);
};

const onButtonStoptClick = e => {
    clearInterval(timerId);
    togleButton(buttonStart);
    togleButton(buttonStop);
};

buttonStart.addEventListener('click', onButtonStartClick);
buttonStop.addEventListener('click', onButtonStoptClick);
