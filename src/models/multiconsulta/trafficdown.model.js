const { DataTypes } = require('sequelize')

const db = require('../../db/connection')

const TraficoDown = db.define('TraficoDown' , {
    cmts:{
        type: DataTypes.STRING(50)
    },
    down:{
        type: DataTypes.STRING(6)
    },
    date_time:{
        type: DataTypes.DATE
    },
    use:{
        type: DataTypes.DOUBLE(18,1)
    },
    quantity:{
        type: DataTypes.BIGINT
    }
},{
    tableName: 'trafico_down_view',
    timestamps: false
})

module.exports = TraficoDown