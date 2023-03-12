function grid(x) {
    let board = document.getElementById('board');
    for (let i=0; i<x; i++){
        let row = document.createElement('div');
        row.className = 'row';
        for (let j=0; j<x; j++){
            let item = document.createElement('div');
            item.className = 'square';
            row.appendChild(item);
        }
        board.appendChild(row);
    }
}

grid(16);

