const cells = document.querySelectorAll('.cursor-pointer');
let currentPlayer = 'X';
const winnerMessage = document.getElementById('winner-message');

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return cells[a].textContent;
        }
    }
    return null;
};

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent === 'X' || cell.textContent === 'O' || winnerMessage.textContent) return;
        cell.textContent = currentPlayer;
        cell.style.color = currentPlayer === 'X' ? 'yellow' : 'red';
        const winner = checkWinner();
        if (winner) {
            winnerMessage.textContent = `¡El ganador es ${winner}!`;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

document.getElementById('reset-button').addEventListener('click', () => {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.color = '';
    });
    currentPlayer = 'X';
    winnerMessage.textContent = '';
});