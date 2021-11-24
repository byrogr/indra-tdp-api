const express = require('express')
const cors = require('cors')

const {
    readCreateTicketRemedyMessages,
    readChangeTicketRemedyMessages
} = require('../services/treeops/tickets.consumer')

const {
    notificationController
 } = require('../controllers/treeops/socket.controller')

class Server {
    constructor () {
        this.app = express()
        this.port = process.env.PORT
        this.server = require('http').createServer( this.app )

        this.io = require('socket.io')( this.server, {
            cors: {
                origin: '*',
            }
        })

        //- Middlewares
        this.middlewares()

        // this.readCreateTicketRemedyMessages()

        //- Routes
        this.routes()

        //- Sockets
        this.sockets()
    }

    middlewares () {
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes () {
        this.app.use('/api/v1/ftth/', require('../routes/alarmas'))
        this.app.use('/api/v1/remedy/', require('../routes/treeops'))
    }

    sockets () {
        this.io.on('connection', notificationController)
    }

    start () {
        this.server.listen(this.port)
    }
}

module.exports = Server