/* Initializing default information */
const board = document.getElementById('board');
const defaultSize = 16;
const defaultColor = 'black';

/* Creating grid */
function grid(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < (size * size); i++) {
        let square = document.createElement('div');
        board.appendChild(square).className = 'grid-square';
    }
}

/* Update grid sizing */
function updateGrid(newSize) {
    board.innerHTML = '';
    let currentSize = defaultSize;
    currentSize = newSize;
    grid(currentSize);
}

/* Slider */
const slider = document.getElementById('size-choice');
let output = document.getElementById('output');
output.innerHTML = slider.value;

/* Updates slider value - for text and update grid size */
slider.oninput = () => { 
    output.innerHTML = slider.value;
    const changeBtn = document.getElementById('set-new-size');
    changeBtn.addEventListener('click', () => updateGrid(slider.value));
};

/* Color change */
let currentColor = defaultColor;
let colorChoice = document.querySelectorAll('#color-choice');
colorChoice.forEach(choice => choice.addEventListener('click', (e) => changeColor(e)));

function changeColor(e) {
    let color = e.target.value;
    switch(color) {
        case 'black':
            currentColor = 'black';
            return currentColor
        case 'white':
            currentColor = 'white';
            return currentColor
        case 'random':
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            currentColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            return currentColor
    }
};

/* Click on board starts the hovering function */
board.addEventListener('click', () => {
    let square = document.querySelectorAll('.grid-square');
    square.forEach(item => { item.addEventListener('mouseenter', () => {
        item.style.background = currentColor;
        }); 
    })
} );


/* Default/Reset board */
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    board.innerHTML = '';
    grid(defaultSize);
});

window.onload = () => {
    grid(defaultSize);
    currentColor = 'black';
}