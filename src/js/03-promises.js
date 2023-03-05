import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { defaultStyle, stylePromiseGenerator } from './style.js';

defaultStyle();
stylePromiseGenerator();

const form = document.querySelector('.form');

const createPromise = (position, delay) => {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((res, re) => {
        setTimeout(() => {
            if (shouldResolve) {
                res({ position, delay });
            } else {
                re({ position, delay });
            }
        }, delay);
    });
};

const onFormSubmit = e => {
    e.preventDefault();
    const {
        elements: { delay, step, amount },
    } = e.currentTarget;

    if (!delay.value || !step.value || !amount.value) {
        Report.warning('Warning', 'Please fill in all fields!', 'Ok');
        return;
    }

    let promiseStep = +delay.value;
    for (let i = 0; i < +amount.value; i += 1) {
        createPromise(i + 1, promiseStep)
            .then(({ position, delay }) => {
                Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
            })
            .catch(({ position, delay }) => {
                Notify.failure(`Rejected promise ${position} in ${delay}ms`);
            });
        promiseStep += +step.value;
    }
};

form.addEventListener('submit', onFormSubmit);
