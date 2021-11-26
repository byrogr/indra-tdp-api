const { Sequelize } = require('sequelize')

const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: 'America/Lima'
})

module.exports = db
