/* Creating drawing board */
function grid(x) {
    let board = document.getElementById('board');
    for (let i=0; i<x; i++){
        let row = document.createElement('div');
        row.className = 'row';
        for (let j=0; j<x; j++){
            let item = document.createElement('div');
            item.setAttribute('id', 'square');
            row.appendChild(item);
        }
        board.appendChild(row);
    }
}

grid(16);

/* Click on board starts the hovering function */
let board = document.getElementById('board');
board.addEventListener('click', () => {
    let square = document.querySelectorAll('#square');
    square.forEach(item => { item.addEventListener('mouseenter', () => {
        item.setAttribute('class', 'color-change')
        }); 
    })
} );

/* Restart board */
let reset = document.getElementById('reset');
reset.addEventListener('click', () => location.reload());