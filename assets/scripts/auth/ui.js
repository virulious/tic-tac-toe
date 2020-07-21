'use strict'

const store = require('../store')
const api = require('./api')

let turn = 0
let gamesPlayed = 0
let gameOver = false
let winnerX = 0
let winnerO = 0
let winnerDraw = 0

const messageFail = function () {
  $('.message').removeClass('success')
  $('.message').addClass('failure')
}

const messageSuccess = function () {
  $('.message').removeClass('failure')
  $('.message').addClass('success')
}

// The game logic

// The game board as an array
// An element for each space
const gameArr = ['', '', '', '', '', '', '', '', '']

// functions for either X or O winning the game
const xWins = function () {
  $('.message').text('X wins!')
  messageSuccess()
  gameOver = true
  gamesPlayed += 1
  winnerX += 1
  // console.log(store)
}

const oWins = function () {
  $('.message').text('O wins!')
  messageSuccess()
  gameOver = true
  gamesPlayed += 1
  winnerO += 1
  // console.log(store)
}

const drawWins = function () {
  $('.message').text('A draw!')
  messageSuccess()
  gamesPlayed += 1
  gameOver = true
  winnerDraw += 1
  // console.log(store)
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
  } else if (isDraw() === 9) {
    drawWins()
  } else {
    // If neither X or O won this should display
    $('.message').text('Next turn!')
    messageSuccess()
  }
}

// Sign the user up for a new account
const signUpSuccess = function (data) {
  $('.message').text('Sign up successfull')
  messageSuccess()
  // console.log(`signUpSuccess ran. Data is:`, data)

  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('.message').text('Sign up failed!')
  messageFail()
  // console.log(`signUpFailure ran. Error is:`, error)

  $('form').trigger('reset')
  return error
}

// Sign in an existing account
const signInSuccess = function (data) {
  $('.message').text('Sign in successfull')
  messageSuccess()
  // console.log(`signInSuccess ran. Data is:`, data)

  store.user = data.user

  $('.authenticated').show()
  $('.unauthenticated').hide()

  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('.message').text('Sign in failed!')
  messageFail()
  // console.log(`signInFailure ran. Error is:`, error)

  $('form').trigger('reset')
  return error
}

// Allows user to change their password
const changePasswordSuccess = function (data) {
  $('.message').text('Changed password successfully!')
  messageSuccess()
  // console.log(`changePasswordSuccess ran. Data is:`, data)

  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('.message').text('Change password failed!')
  messageFail()
  // console.log(`changePasswordFailure ran. Error is:`, error)

  $('form').trigger('reset')
  return error
}

// Sign the user out and change user to null
const signOutSuccess = function (data) {
  $('.message').text('Sign out successfull')
  messageSuccess()
  // console.log(`signOutSuccess ran. Data is:`, data)
  refresh()
  $('.container').hide()
  $('#games-display').hide()
  $('#games-data').hide()

  $('form').trigger('reset')

  $('.authenticated').hide()
  $('.unauthenticated').show()

  store.user = null
}

const signOutFailure = function (error) {
  $('.message').text('Error on sign out')
  messageSuccess()
  console.error('signOutFailure ran. Error is :', error)
}

// Store game data?
const gameStartSuccess = function (data) {
  // console.log('Game created')
  // console.log(data.games)
  store.games = data.game
  // console.log(store.games)
}

const gameStartFailure = function (error) {
  // console.log(`Game creation failed. Error is:`, error)
  return error
}

const gameIndexSuccess = function (data) {
  // console.log('Game index success')
  $('#games-display').show()
  $('#games-data').show()
  let gamesHtml = ''
  let gamesHtmldata = ''
  let totalGames = 0
  // store.games = data.games

  data.games.forEach(function (game) {
    const gamesSection = (`
      <p>Game ID: ${game._id}</p>
      `)
    totalGames += 1
    gamesHtml += gamesSection
  })

  const gamesSection = (`
      <p>Total games played: ${totalGames}</p>
      <p>Games played this session: ${gamesPlayed}</p>
      <p>X wins: ${winnerX}</p>
      <p>O wins: ${winnerO}</p>
      <p>Draws: ${winnerDraw}</p>
      <br>
      `)
  gamesHtmldata += gamesSection

  // After looping, put all HTML on page
  $('#games-data').html(gamesHtmldata)
  $('#games-display').html(gamesHtml)
}

const gameIndexFailure = function (error) {
  // console.log('Game index failed. Error is: ', error)
  return error
}

const gameIDSuccess = function (data) {
  $('#game-id').show()
  let idGames = ''
  // console.log(data)
  // console.log(store)
  const gamesIDSection = (`
    <p>Game ID: ${data.game._id}</p>
    <p>Game Array: ${data.game.cells}</p>
    `)
  idGames += gamesIDSection
  $('#games-display').html(idGames)
}

const gameIDFailure = function (error) {
  // console.log(`Something went wrong`, error)
  $('.message').text('Something went wrong')
  return error
}

const gameUpdateSuccess = function (data) {
  messageSuccess()
}

const gameUpdateFailure = function (error) {
  // console.log('Game update failed. Error is: ', error)
  $('.message').text('Something went wrong')
  return error
}

// Box click ui
// Change the box to either X or O based on who's turn it is
// Check for win condition
// Change turns
const changeBox = function (data) {
  if (gameOver === true) {
    // console.log('Game is over')
    $('.message').text('Game over')
  } else if (turn === 0) {
    if ($(event.target).hasClass('box')) {
      $(event.target).text('X')
      $(event.target).removeClass('box')
      $(event.target).addClass('x')
      gameArr[event.target.id] = 'x'
      // console.log(store)
      // data.games.cells.value = 'x'
      // store.games = data.games
      // console.log(store)
      checkWin()
      turn = 1

      // create object to send to API
      const data = {
        game: {
          cell: {
            index: event.target.id,
            value: 'x'
          },
          over: false
        }
      }

      // pass object to API function
      api.gameUpdate(data)
        .then(gameUpdateSuccess)
        .catch(gameUpdateFailure)
    }
  } else if (turn === 1) {
    $(event.target).text('O')
    $(event.target).removeClass('box')
    $(event.target).addClass('o')
    gameArr[event.target.id] = 'o'
    // data.games.cells.value = 'x'
    // store.games = data.games
    // console.log(gameArr)
    // console.log(store)
    checkWin()
    turn = 0

    // create object to send to API
    const data = {
      game: {
        cell: {
          index: event.target.id,
          value: 'o'
        },
        over: false
      }
    }

    // pass object to API function
    api.gameUpdate(data)
      .then(gameUpdateSuccess)
      .catch(gameUpdateFailure)
  }
}

// Keep the X or O in the box when already populated
const keepBox = function (error) {
  if (gameOver === true) {
    // console.log('Game is over')
    $('.message').text('Game over')
  } else if ($(event.target).hasClass('x') || $(event.target).hasClass('o')) {
    $('.message').text('Box already taken')
    messageFail()
    // console.log(error)
    return error
  }
}

// Refresh the game board for a new game
const refresh = function (data) {
  $('.container').show()
  $('.col-4').text('')
  $('.col-4').removeClass('x')
  $('.col-4').removeClass('o')
  $('.col-4').addClass('box')
  $('.message').text('New Game!')
  messageSuccess()
  for (let i = 0; i < gameArr.length; i++) {
    gameArr[i] = ''
  }
  turn = 0
  gameOver = false
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
  gameStartFailure,
  gameIndexSuccess,
  gameIndexFailure,
  gameUpdateSuccess,
  gameUpdateFailure,
  gameIDSuccess,
  gameIDFailure
}
