'use strict'

const store = require('../store')
let turn = 0

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

const signInFailure = function (error) {
  $('#message').text('Sign in failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`signInFailure ran. Error is:`, error)

  $('form').trigger('reset')
}

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

// Box click ui
const changeBox = function (data) {
  if (turn === 0) {
    if ($(event.target).hasClass('box')) {
      $(event.target).text('X')
      $(event.target).removeClass()
      $(event.target).addClass('col-4 x')
      $('#message').text('Next move')
      $('#message').removeClass()
      $('#message').addClass('success')
      turn = 1
    }
  } else if (turn === 1) {
    $(event.target).text('O')
    $(event.target).removeClass()
    $(event.target).addClass('col-4 o')
    $('#message').text('Next move')
    $('#message').removeClass()
    $('#message').addClass('success')
    turn = 0
  }
}

const keepBox = function (error) {
  if ($(event.target).hasClass('x') || $(event.target).hasClass('o')) {
    $('#message').text('Box already taken')
    $('#message').removeClass()
    $('#message').addClass('failure')
    console.log(error)
  }
}

const refresh = function (data) {
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
  /*
  */
  turn = 0
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
  refresh
}
