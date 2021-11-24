const { DataTypes } = require('sequelize')

const db = require('../../db/connection')

const Alarma = db.define('Alarma', {
  device: {
    type: DataTypes.STRING(100),
  },
  notificationId: {
  type: DataTypes.BIGINT
  },
  alarmaId: {
    type: DataTypes.BIGINT
  },
  nombre: {
    type: DataTypes.TEXT('medium')
  },
  locacion: {
    type: DataTypes.STRING
  },
  source: {
    type: DataTypes.STRING(150)
  },
  problema: {
    type: DataTypes.TEXT('medium'),
    allowNull: true
  },
  razon: {
    type: DataTypes.TEXT('medium'),
    allowNull: true
  },
  severidad: {
    type: DataTypes.STRING(20)
  },
  severidad_original: {
    type: DataTypes.STRING(20)
  },
  estado: {
    type: DataTypes.STRING(20)
  },
  fe_inicio: {
    type: DataTypes.DATE
  },
  fe_cese: {
    type: DataTypes.DATE,
    allowNull: true
  },
  info: {
    type: DataTypes.TEXT('medium'),
    allowNull: true
  },
  fe_ultima: {
    type: DataTypes.DATE,
    allowNull: true
  },
}, {
  tableName: 'alarmas_ftth'
})

module.exports = Alarma
