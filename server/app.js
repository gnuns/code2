require('dotenv').config()
const express = require('express')()
const http = require('http').Server(express)
const io = require('socket.io')(http)
const handler = require('./lib/handler')()
const mongoose = require('mongoose')

start()

function start () {
  let port = process.env.PORT || 1337
  handler.init(io, express, mongoose)
  http.listen(port, () => console.log('listening on', port))
}
