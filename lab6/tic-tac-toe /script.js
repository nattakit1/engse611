let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let xScore = 0;
let oScore = 0;

const squares = document.querySelectorAll('.square');
const resetButton = document.getElementById('reset');
const scoreDisplay = document.getElementById('score');

function handleClick(index) {
  if (board[index] !== '' || !gameActive) {
    return;
  }

  // Mark the square
  board[index] = currentPlayer;
  squares[index].textContent = currentPlayer;

  // Add color class to X or O
  if (currentPlayer === 'X') {
    squares[index].classList.add('x');
  } else {
    squares[index].classList.add('o');
  }

  // Check if someone has won
  if (checkWinner()) {
    alert(currentPlayer + ' wins!');
    updateScore();
    gameActive = false;
  } else if (board.every(square => square !== '')) {
    alert('It\'s a draw!');
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner() {
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

  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return board[a] === board[b] && board[b] === board[c] && board[a] !== '';
  });
}

function updateScore() {
  if (currentPlayer === 'X') {
    xScore++;
  } else {
    oScore++;
  }
  scoreDisplay.textContent = `X: ${xScore} - O: ${oScore}`;
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  squares.forEach(square => {
    square.textContent = '';
    square.classList.remove('x', 'o');  // Remove color classes
  });
  gameActive = true;
  currentPlayer = 'X';
}

squares.forEach((square, index) => {
  square.addEventListener('click', () => handleClick(index));
});

resetButton.addEventListener('click', resetGame);
