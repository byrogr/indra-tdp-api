const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')

const db = require('../db/connection')
const docs = require('../docs/index')

const { notificationController } = require('../controllers/treeops/socket.controller')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT
    this.server = require('http').createServer( this.app )
    this.io = require('socket.io')( this.server, { cors: { origin: '*' } })

    //- Database
    this.dbConnection()

    //- Middlewares
    this.middlewares()

    //- Swagger Doc
    this.swagger()

    //- Routes
    this.routes()

    //- Sockets
    this.sockets()
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

  swagger () {
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(docs)
    )
  }

  routes () {
    this.app.use('/api/v1/ftth/', require('../routes/alarmas'))
    this.app.use('/api/v1/mc/', require('../routes/multiconsulta'))
  }

  sockets () {
    this.io.on('connection', notificationController)
  }

  start () {
    this.server.listen(this.port)
  }
}

module.exports = Server
