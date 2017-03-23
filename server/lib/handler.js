module.exports = handler

function handler () {
  let documents = {}

  let io, mongoose

  return {init}

  function init (_io, express, _mongoose) {
    io = _io
    mongoose = _mongoose

    mongoose.connect('mongodb://localhost/code2')

    io.on('connection', onConnet)
    express.use(expressConfigs)
    express.disable('x-powered-by')
  }

  function expressConfigs (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers',
               'Origin, X-Requested-With, Content-Type, Accept')
    next()
  }

  function onConnet (socket) { }
}
