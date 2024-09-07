const cells =
Array.from(document.querySelectorAll('.cell'));
let currentPlayer= 'X';

function handleClick(event) {
    const cell = event.target;
    if (cell.textContent===") {
        cell.textContent=currentPlayer;
        if(checkWin()) {
            setTimeout(()=> {
                alert('${currentPlayer} gana!');
                highlightWinningCells();
            },10);
            cells.forEach(cell=> 
                cell.removeEventListener('click', handleClick));
            } else if (cells.every(cell =>cell.textContent !=="))
            {
                setTimeout(() =>alert('¡Empate!'),10);
        } else {
            currentPlayer=currentPlayer=== 'X'?'O' : 'X';
        }
    }
}