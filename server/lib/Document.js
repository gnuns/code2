module.exports = document

const documentModel = require('./models/Room')

function document (id, io, mongoose) {
  const Room = mongoose.model('Room', documentModel)
  let clientCount = 0
  let body = ''

  initDocument()

  return {
    getBody: () => body,
    getClientCount: () => clientCount
  }

  function initDocument () {
    Room.where({id})
    .findOne((err, room) => {
      if (!err || room) body = room.body

    })
  }
}
