'use strict'

const store = require('../store')

let turn = 0
let gamesPlayed = 0

// The game logic

// The game board as an array
// An element for each space
const gameArr = ['', '', '', '', '', '', '', '', '']

// functions for either X or O winning the game
const xWins = function () {
  $('#message').text('X wins!')
  $('#message').removeClass()
  $('#message').addClass('success')
  gamesPlayed += 1
}

const oWins = function () {
  $('#message').text('O wins!')
  $('#message').removeClass()
  $('#message').addClass('success')
  gamesPlayed += 1
}

const drawWins = function () {
  $('#message').text('A draw!')
  $('#message').removeClass()
  $('#message').addClass('success')
  gamesPlayed += 1
}

const isDraw = function () {
  let draw = 0
  for (let i = 0; i < gameArr.length; i++) {
    if (gameArr[i] !== '') {
      draw += 1
    }
  }
  return draw
}

// Function to check if X or O won the game
const checkWin = function () {
  if (isDraw() === 9) {
    drawWins()
  } else if (gameArr[0] === 'x' && gameArr[1] === 'x' && gameArr[2] === 'x') {
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

// Sign the user up for a new account
const signUpSuccess = function (data) {
  $('#message').text('Sign up successfull')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`signUpSuccess ran. Data is:`, data)

  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`signUpFailure ran. Error is:`, error)

  $('form').trigger('reset')
}

// Sign in an existing account
const signInSuccess = function (data) {
  $('#message').text('Sign in successfull')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`signInSuccess ran. Data is:`, data)

  store.user = data.user

  $('#authenticated').show()
  $('#unauthenticated').hide()

  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`signInFailure ran. Error is:`, error)

  $('form').trigger('reset')
}

// Allows user to change their password
const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`changePasswordSuccess ran. Data is:`, data)

  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').text('Change password failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`changePasswordFailure ran. Error is:`, error)

  $('form').trigger('reset')
}

// Sign the user out and change user to null
const signOutSuccess = function (data) {
  $('#message').text('Sign out successfull')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`signOutSuccess ran. Data is:`, data)

  $('form').trigger('reset')

  $('#authenticated').hide()
  $('#unauthenticated').show()

  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

// Store game data?
const gameStartSuccess = function (data) {
  console.log('Game created')
  store.user = data.user
}

const gameStartFailure = function (error) {
  console.log(`Game creation failed. Error is:`, error)
}

// Box click ui
// Change the box to either X or O based on who's turn it is
// Check for win condition
// Change turns
const changeBox = function (data) {
  if ($('#message').text() === 'X wins!' || $('#message').text() === 'O wins!' || $('#message').text() === 'A draw!') {
    console.log('Game is over')
  } else if (turn === 0) {
    if ($(event.target).hasClass('box')) {
      $(event.target).text('X')
      $(event.target).removeClass()
      $(event.target).addClass('col-4 x')
      gameArr[event.target.id] = 'x'
      console.log(gameArr)
      checkWin()
      turn = 1
    }
  } else if (turn === 1) {
    $(event.target).text('O')
    $(event.target).removeClass()
    $(event.target).addClass('col-4 o')
    gameArr[event.target.id] = 'o'
    console.log(gameArr)
    checkWin()
    turn = 0
  }
}

// Keep the X or O in the box when already populated
const keepBox = function (error) {
  if ($('#message').text() === 'X wins!' || $('#message').text() === 'O wins!') {
    console.log('Game is over')
  } else if ($(event.target).hasClass('x') || $(event.target).hasClass('o')) {
    $('#message').text('Box already taken')
    $('#message').removeClass()
    $('#message').addClass('failure')
    console.log(error)
  }
}

// Refresh the game board for a new game
const refresh = function (data) {
  $('#played').text(`You played ${gamesPlayed} games!`)
  $('.container').show()
  $('.col-4').text('')
  $('.col-4').removeClass('x')
  $('.col-4').removeClass('o')
  $('.col-4').addClass('box')
  $('#message').text('New Game!')
  $('#message').removeClass()
  $('#message').addClass('success')
  for (let i = 0; i < gameArr.length; i++) {
    gameArr[i] = ''
  }
  turn = 0
  /*
  for (let child = $('row').firstChild; child !== null; child = child.nextSibling) {
    child.text(null)
    child.removeClass()
    child.addClass('col-4 box')
  }
  console.log('Refresh ran')
  $('row'.child).text(null)
  $('row'.child).removeClass()
  $('row'.child).addClass('col-4 box')
  */
  /*
  $('#0').text(null)
  $('#1').text(null)
  $('#2').text(null)
  $('#3').text(null)
  $('#4').text(null)
  $('#5').text(null)
  $('#6').text(null)
  $('#7').text(null)
  $('#8').text(null)
  $('#0').removeClass()
  $('#1').removeClass()
  $('#2').removeClass()
  $('#3').removeClass()
  $('#4').removeClass()
  $('#5').removeClass()
  $('#6').removeClass()
  $('#7').removeClass()
  $('#8').removeClass()
  $('#0').addClass('col-4 box')
  $('#1').addClass('col-4 box')
  $('#2').addClass('col-4 box')
  $('#3').addClass('col-4 box')
  $('#4').addClass('col-4 box')
  $('#5').addClass('col-4 box')
  $('#6').addClass('col-4 box')
  $('#7').addClass('col-4 box')
  $('#8').addClass('col-4 box')
  */
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpFailure,
  signInFailure,
  signOutFailure,
  changePasswordFailure,
  changeBox,
  keepBox,
  refresh,
  gameStartSuccess,
  gameStartFailure
}
