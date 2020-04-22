'use strict'

const signUpSuccess = function (data) {
  $('#message').text('Sign up successfull')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`signUpSuccess ran. Data is:`, data)

  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess
}
