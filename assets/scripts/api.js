'use strict'

const config = require('./config.js')
const store = require('./store')


const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'POST',
    data
  })
}
