const express = require('express')
const cors = require('cors')

class Server {
    constructor () {
        this.app = express()
        this.port = process.env.PORT

        //- Middlewares
        this.middlewares()

        //- Routes
        this.routes()
    }

    middlewares () {
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes () {
        this.app.use('/api/v1/ftth/', require('../routes/alarmas'))
    }

    start () {
        this.app.listen(this.port)
    }
}

module.exports = Server