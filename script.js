let click = false;
let color = 'black';

function CreateBoard(size) {
    let board = document.querySelector('.board');
    let grid = board.querySelectorAll('div');
    grid.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.borderStyle = 'groove';
        square.style.backgroundColor = 'white';
        board.appendChild(square);
    }

    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {

        square.addEventListener('mouseover', () => {
            if (click) {
                square.style.backgroundColor = color;
            }
        });


    });
}


function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    });
}

function rangeFunction() {
    let size = document.getElementById('sliderange').value;
    document.querySelector('.sliderValue').textContent = `Grid Size: ${size} x ${size}`;
    resetBoard();
    CreateBoard(size);
}


function erase() {
    color = 'white';
}

function changeColor() {
    let colorpick = document.getElementById('colorpick').value;
    color = colorpick;
}


CreateBoard(16);

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != "BUTTON" && e.target.tagName != "INPUT") {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = 'Mode: Sketching';
        } else {
            document.querySelector('.mode').textContent = 'Mode: Not Sketching';
        }
    }

})