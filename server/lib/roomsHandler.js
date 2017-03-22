module.exports = roomsHandler

function roomsHandler () {
  let io
  return {init}

  function init (_io, express) {
    io = _io
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
