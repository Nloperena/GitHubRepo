const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
let currentPlayer = 'X';

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkForWinner() {
    let winner = null;

    winningCombinations.forEach((combo) => {
        const cellsCombo = combo.map(index => cells[index].innerText);
        if (cellsCombo.every(cell => cell === 'X')) {
            winner = 'X';
        } else if (cellsCombo.every(cell => cell === 'O')) {
            winner = 'O';
        }
    });

    return winner;
}

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.classList.contains('taken')) {
            return;
        }

        cell.innerText = currentPlayer;
        cell.classList.add('taken');

        const winner = checkForWinner();
        if (winner) {
            statusText.innerText = `${winner} wins!`;
            cells.forEach(c => c.classList.add('taken'));
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            statusText.innerText = `${currentPlayer}'s turn`;
        }
    });
});
