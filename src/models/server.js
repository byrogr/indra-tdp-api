const express = require('express')
const cors = require('cors')

const db = require('../db/connection')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT

    //- Database
    this.dbConnection()

    //- Middlewares
    this.middlewares()

    //- Routes
    this.routes()
  }

  async dbConnection () {
    try {
      await db.authenticate()
      console.log('Conectado a la base de datos')
    } catch (err) {
      throw new Error(err)
    }
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
