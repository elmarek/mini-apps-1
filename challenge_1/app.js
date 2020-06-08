let gameOver;
let player1 = true
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var turns = 0

// Check to see if move wins game
let gameCheck = (() => {
  // Array of winning states
  let boardState =
  [[board[0], board[3], board[6]],
  [board[1], board[4], board[7]],
  [board[2], board[5], board[8]],
  [board[0], board[1], board[2]],
  [board[3], board[4], board[5]],
  [board[0], board[3], board[6]],
  [board[0], board[4], board[8]],
  [board[2], board[4], board[6]]];

  var equality;
  // Check to see if any winning states exist
  for (var i = 0; i < boardState.length; i++) {
    if (boardState[i][0] === boardState[i][1] && boardState[i][1] === boardState[i][2]) {
      equality = true
      gameOver = true
    }
  }
  return equality;
})

// Grab all table cells
const tic = document.querySelectorAll('td');
// Picking squares and conditions
tic.forEach((cell, index) => {
  cell.addEventListener('click', function(e) {
    // If game is over
    if(gameOver) {
      alert('Game Over. Try Again')
      return
    }
    // check if square is taken
    if(cell.innerText.length > 0) {
      alert("Already taken! Choose a new square.")
      return
    }
    // Add move to board and check for win - player 1
    if(player1){
      cell.innerText = 'X';
      player1 = false;
      board[cell.id] = false;
      turns += 1;
      if(gameCheck()) {
        alert('Game Over. Player 1 Wins!')
      }
    // Add move to board and check for win - player 2
    } else {
      cell.innerText = 'O';
      player1 = true;
      board[cell.id] = true;
      turns += 1;
      if(gameCheck()) {
        alert('Game Over. Player 2 Wins!')
      }
    }
  })
})

// New Game
let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function(e) {
  board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  player1 = true
  gameOver = false
  let square = document.querySelectorAll('td');
  square.forEach(cell => {
    cell.innerText = '';
  })
})