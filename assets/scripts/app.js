'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // Event listener for Sign Up:
  $('#sign-up').on('submit', authEvents.onSignUp)
  // Event listener for Sign in:
  $('#sign-in').on('submit', authEvents.onSignIn)
  // Event listener for Change Password:
  $('#change-password').on('submit', authEvents.onChangePassword)
  // Event listener for Sign Out:
  $('#sign-out').on('submit', authEvents.onSignOut)
  // Event listener for box clicks:
  $('.box').on('click', authEvents.onPlayMove)
  // Event listener for clearing the game board
  $('#refresh').on('submit', authEvents.onRefresh)
  // Event listener to get the game index
  $('#game-index').on('submit', authEvents.onGameIndex)
  // Event listener to get game by INDEX
  $('#game-id').on('submit', authEvents.onGameID)
  /*
  $('#ul').on('click', authEvents.onClickUl)
  $('#um').on('click', authEvents.onClickUm)
  $('#ur').on('click', authEvents.onClickUr)
  $('#ml').on('click', authEvents.onClickMl)
  $('#mm').on('click', authEvents.onClickMm)
  $('#mr').on('click', authEvents.onClickMr)
  $('#ll').on('click', authEvents.onClickLl)
  $('#lm').on('click', authEvents.onClickLm)
  $('#lr').on('click', authEvents.onClickLr)
  */
})
