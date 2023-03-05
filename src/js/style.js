export const defaultStyle = () => {
    const htmlDocument = document.querySelector('html');
    htmlDocument.style.height = '100vh';
    htmlDocument.style.padding = '0';
    htmlDocument.style.margin = '0';
    document.body.style.position = 'relative';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = 'rgb(30, 90, 30)';
    document.body.style.transition = 'background-color 250ms';
    const backBox = document.body.firstElementChild;
    backBox.style.position = 'absolute';
    backBox.style.top = '16px';
    backBox.style.left = '16px';
    backBox.style.margin = '0';
    backBox.style.padding = '0';
    const link = document.body.firstElementChild.firstElementChild;
    const arrow = document.createElement('span');
    arrow.style.display = 'flex';
    arrow.style.justifyContent = 'center';
    arrow.style.alignItems = 'center';
    arrow.style.width = '40px';
    arrow.style.backgroundColor = 'rgb(37, 33, 33)';
    arrow.style.border = '2px solid #fff';
    arrow.style.borderRadius = '50%';
    arrow.innerHTML = `<svg width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><g id="icomoon-ignore"></g><path fill="#fff" d="M201.373 438.627l-160-160c-12.497-12.496-12.497-32.758 0-45.255l160-160c12.497-12.496 32.758-12.496 45.255 0s12.497 32.758 0 45.255l-105.373 105.373h306.745c17.673 0 32 14.327 32 32s-14.327 32-32 32h-306.745l105.373 105.373c6.248 6.248 9.372 14.438 9.372 22.627s-3.124 16.379-9.372 22.627c-12.497 12.497-32.758 12.497-45.255 0z"></path></svg>`;
    arrow.style.backgroundImage = 'url(../img/icon-back.svg)';
    link.style.display = 'flex';
    link.style.gap = '10px';
    link.style.padding = '5px 0';
    link.style.fontSize = '24px';
    link.style.lineHeight = '1.6667';
    link.style.textDecoration = 'none';
    link.style.color = '#fff';
    link.style.transition = 'transform 250ms';
    link.prepend(arrow);
    link.addEventListener('mouseover', e => {
        e.currentTarget.style.transform = 'translateX(-10px)';
    });
    link.addEventListener('mouseout', e => {
        e.currentTarget.style.transform = 'translateX(0)';
    });
};

export const styleBodyColor = () => {
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    const button = document.querySelectorAll('button');
    button.forEach(e => {
        e.style.width = '100px';
        e.style.height = '50px';
        e.style.fontSize = '24px';
        e.style.color = 'white';
    });
    const startButton = document.querySelector('[data-start]');
    startButton.style.backgroundColor = 'rgb(37, 33, 33)';
    startButton.style.cursor = 'pointer';
    startButton.style.border = '2px solid #fff';
    startButton.style.borderTopLeftRadius = '25px';
    startButton.style.borderBottomLeftRadius = '25px';
    const stopButton = document.querySelector('[data-stop]');
    stopButton.style.backgroundColor = '#d8d8d8';
    stopButton.style.cursor = 'no-drop';
    stopButton.style.border = '2px solid #fff';
    stopButton.style.borderTopRightRadius = '25px';
    stopButton.style.borderBottomRightRadius = '25px';
    stopButton.disabled = true;
};

export const styleTimePicker = () => {
    document.body.style.display = 'grid';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
    document.body.style.gridTemplateColumns = '300px 100px';
    document.body.style.gridAutoRows = 'minmax(25px, auto)';
    document.body.style.gap = '20px';
    const timerInput = document.querySelector('#datetime-picker');
    timerInput.style.padding = '10px';
    timerInput.style.fontSize = '30px';
    timerInput.style.color = '#fff';
    timerInput.style.backgroundColor = 'rgb(37, 33, 33)';
    timerInput.style.border = '2px solid #fff';
    timerInput.style.borderRadius = '10px';
    timerInput.style.marginTop = 'auto';
    const startButton = document.querySelector('[data-start]');
    startButton.style.height = '58px';
    startButton.style.color = '#fff';
    startButton.style.border = '2px solid #fff';
    startButton.style.borderRadius = '10px';
    startButton.style.fontSize = '30px';
    startButton.style.marginTop = 'auto';
    const timer = document.querySelector('.timer');
    timer.style.gridColumnStart = '1';
    timer.style.gridColumnEnd = '3';
    timer.style.display = 'flex';
    timer.style.justifyContent = 'space-between';
    timer.style.marginBottom = 'auto';
    const field = document.querySelectorAll('.field');
    field.forEach(e => {
        e.style.textAlign = 'center';
        e.style.borderRadius = '5px';
        e.style.border = '2px solid #fff';
        e.style.padding = '10px';
        e.style.color = '#fff';
        e.style.backgroundColor = 'rgb(37, 33, 33)';
    });
    const valueSpan = document.querySelectorAll('.value');
    valueSpan.forEach(e => {
        e.style.display = 'block';
        e.style.fontSize = '60px';
    });
    const labelSpan = document.querySelectorAll('.label');
    labelSpan.forEach(e => {
        e.style.display = 'block';
        e.style.color = 'rgb(37, 33, 33)';
        e.style.backgroundColor = '#fff';
        e.style.borderRadius = '3px';
    });
};

export const stylePromiseGenerator = () => {
    const form = document.querySelector('.form');
    const label = form.querySelectorAll('label');
    const input = form.querySelectorAll('input');
    const submitButton = form.querySelector('button');
    form.style.position = 'absolute';
    form.style.top = '50%';
    form.style.left = '50%';
    form.style.transform = 'translate(-50%, -50%)';
    form.style.display = 'flex';
    form.style.gap = '20px';
    form.style.width = '550px';
    form.style.padding = '20px';
    form.style.backgroundColor = '#ff5';
    form.style.flexDirection = 'column';
    form.style.fontSize = '40px';
    form.style.color = '#fff';
    form.style.backgroundColor = 'rgb(37, 33, 33)';
    form.style.border = '2px solid #fff';
    form.style.borderRadius = '10px';

    label.forEach(e => {
        e.style.display = 'flex';
        e.style.justifyContent = 'space-between';
    });
    input.forEach(e => {
        e.style.width = '200px';
        e.style.marginLeft = 'auto';
        e.style.fontSize = '30px';
        e.style.padding = '10px';
    });
    submitButton.style.fontSize = '30px';
    submitButton.style.padding = '10px';
    submitButton.style.borderRadius = '10px';
};
