/*
// The game logic

// The game board as an array
// An element for each space
const gameArr = ['', '', '', '', '', '', '', '', '']

// functions for either X or O winning the game
const xWins = function () {
  $('#message').text('X wins!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const oWins = function () {
  $('#message').text('O wins!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

// Function to check if X or O won the game
const checkWin = function () {
  if (gameArr[0] === 'x' && gameArr[1] === 'x' && gameArr[2] === 'x') {
    xWins()
  } else if (gameArr[3] === 'x' && gameArr[4] === 'x' && gameArr[5] === 'x') {
    xWins()
  } else if (gameArr[6] === 'x' && gameArr[7] === 'x' && gameArr[8] === 'x') {
    xWins()
  } else if (gameArr[0] === 'x' && gameArr[3] === 'x' && gameArr[6] === 'x') {
    xWins()
  } else if (gameArr[1] === 'x' && gameArr[4] === 'x' && gameArr[7] === 'x') {
    xWins()
  } else if (gameArr[2] === 'x' && gameArr[5] === 'x' && gameArr[8] === 'x') {
    xWins()
  } else if (gameArr[0] === 'x' && gameArr[4] === 'x' && gameArr[8] === 'x') {
    xWins()
  } else if (gameArr[2] === 'x' && gameArr[4] === 'x' && gameArr[6] === 'x') {
    xWins()
  } else if (gameArr[0] === 'o' && gameArr[1] === 'o' && gameArr[2] === 'o') {
    oWins()
  } else if (gameArr[3] === 'o' && gameArr[4] === 'o' && gameArr[5] === 'o') {
    oWins()
  } else if (gameArr[6] === 'o' && gameArr[7] === 'o' && gameArr[8] === 'o') {
    oWins()
  } else if (gameArr[0] === 'o' && gameArr[3] === 'o' && gameArr[6] === 'o') {
    oWins()
  } else if (gameArr[1] === 'o' && gameArr[4] === 'o' && gameArr[7] === 'o') {
    oWins()
  } else if (gameArr[2] === 'o' && gameArr[5] === 'o' && gameArr[8] === 'o') {
    oWins()
  } else if (gameArr[0] === 'o' && gameArr[4] === 'o' && gameArr[8] === 'o') {
    oWins()
  } else if (gameArr[2] === 'o' && gameArr[4] === 'o' && gameArr[6] === 'o') {
    oWins()
  } else {
    // If neither X or O won this should display
    $('#message').text('Next turn!')
    $('#message').removeClass()
    $('#message').addClass('success')
  }
}

/*
const checkWinO = function () {
  if (gameArr[0] === 'o' && gameArr[1] === 'o' && gameArr[2] === 'o') {
    oWins()
  } else if (gameArr[3] === 'o' && gameArr[4] === 'o' && gameArr[5] === 'o') {
    oWins()
  } else if (gameArr[6] === 'o' && gameArr[7] === 'o' && gameArr[8] === 'o') {
    oWins()
  } else if (gameArr[0] === 'o' && gameArr[3] === 'o' && gameArr[6] === 'o') {
    oWins()
  } else if (gameArr[1] === 'o' && gameArr[4] === 'o' && gameArr[7] === 'o') {
    oWins()
  } else if (gameArr[2] === 'o' && gameArr[5] === 'o' && gameArr[8] === 'o') {
    oWins()
  } else if (gameArr[0] === 'o' && gameArr[4] === 'o' && gameArr[8] === 'o') {
    oWins()
  } else if (gameArr[2] === 'o' && gameArr[4] === 'o' && gameArr[6] === 'o') {
    oWins()
  } else {
    console.log('Next turn')
  }
}

// The game board coordinates?
// [0, 0] is id=0 [2, 2] = id=9
const coord = [
  [x, y],
  [x, y],
  [x, y]
]

// some code that might be useful
// index = 3 * y + x
// index is the returned to the id?

const playGame = function () {

}
module.exports = {
  gameArr,
  checkWin
}
*/
