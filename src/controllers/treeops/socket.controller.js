const notificationController = (socket) => {
    console.log('Cliente conectado => ', socket.id)

    socket.on('assign-ticket', ( payload ) => {
        console.log('Ticket asignado => ', payload)

        socket.broadcast.emit('assign-ticket', payload)
    })
}

module.exports = {
    notificationController
}