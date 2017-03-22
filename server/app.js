require('dotenv').config()
const express = require('express')()
const http = require('http').Server(express)
const io = require('socket.io')(http)
const roomsHandler = require('./lib/roomsHandler')()

start()

function start () {
  let port = process.env.PORT || 1337
  roomsHandler.init(io, express)
  http.listen(port, () => console.log('listening on', port))
}
