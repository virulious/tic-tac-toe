'use strict'

// getFormFields
const getFormFields = require('../../../lib/get-form-fields')

// UI and API
const api = require('./api')
const ui = require('./ui')
// const gameBoard = require('./gameBoard')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // Prevent the page from refreshing!
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// box clicks
const onPlayMove = function (event) {
  event.preventDefault()
  if ($(event.target).hasClass('box')) {
    ui.changeBox()
  } else {
    ui.keepBox()
  }
}

// Refresh the game board
const onRefresh = function (event) {
  event.preventDefault()
  ui.refresh()
}
/*
  if (turn === 0) {
    if ($(event.target).hasClass('box')) {
      $(event.target).text('X')
      $(event.target).removeClass()
      $(event.target).addClass('col-4 x')
      $('#message').text('Next move')
      $('#message').removeClass()
      $('#message').addClass('success')
      turn = 1
    } else if ($(event.target).hasClass('x') || $(event.target).hasClass('o')) {
      $('#message').text('Box already taken')
      $('#message').removeClass()
      $('#message').addClass('failure')
    }
  } else if (turn === 1) {
    if ($(event.target).hasClass('box')) {
      $(event.target).text('O')
      $(event.target).removeClass()
      $(event.target).addClass('col-4 o')
      $('#message').text('Next move')
      $('#message').removeClass()
      $('#message').addClass('success')
      turn = 0
    } else if ($(event.target).hasClass('x') || $(event.target).hasClass('o')) {
      $('#message').text('Box already taken')
      $('#message').removeClass()
      $('#message').addClass('failure')
    } else {
      console.log('something went wrong')
    }
  }
}
*/
/*
const onClickUm = function (event) {
  event.preventDefault()
  if (turn === 0) {
    if (document.getElementById('um').classList.contains('box')) {
      $('#um').text('X')
      $('#um').removeClass()
      $('#um').addClass('col-4 x')
      $('#message').text('Next move')
      $('#message').removeClass()
      $('#message').addClass('success')
      turn = 1
    } else if (document.getElementById('um').classList.contains('x') || document.getElementById('um').classList.contains('o')) {
      $('#message').text('Box already taken')
      $('#message').removeClass()
      $('#message').addClass('failure')
    } else {
      console.log('something went wrong')
    }
  } else if (turn === 1) {
    if (document.getElementById('um').classList.contains('box')) {
      $('#um').text('O')
      $('#um').removeClass()
      $('#um').addClass('col-4 o')
      $('#message').text('Next move')
      $('#message').removeClass()
      $('#message').addClass('success')
      turn = 0
    } else if (document.getElementById('um').classList.contains('x') || document.getElementById('um').classList.contains('o')) {
      $('#message').text('Box already taken')
      $('#message').removeClass()
      $('#message').addClass('failure')
    } else {
      console.log('something went wrong')
    }
  }
}
*/
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onPlayMove,
  onRefresh
}
