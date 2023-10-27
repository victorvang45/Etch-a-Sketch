let click = false;


let board = document.querySelector('.board');
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";


for(let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor = 'white';
    board.appendChild(square);
}

let squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    
        square.addEventListener('mouseover', () => {
            if(click) {
                square.style.backgroundColor = 'red';
            }
    });


});

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != "BUTTON") {
        click = !click;
    }
   
})
