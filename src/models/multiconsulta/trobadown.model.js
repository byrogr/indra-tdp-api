const { DataTypes } = require('sequelize')

const db = require('../../db/connection')

const TrobaDown = db.define('TrobaDown' , {
    cmts:{
        type: DataTypes.STRING(20)
    },
    interface:{
        type: DataTypes.STRING(20)
    },
    description:{
        type: DataTypes.STRING(100)
    },
    cm_tot:{
        type: DataTypes.INTEGER
    },
    cm_offline:{
        type: DataTypes.INTEGER
    },
    oper:{
        type: DataTypes.INTEGER
    },
    cmporc:{
        type: DataTypes.DOUBLE(18,2)
    },
    date_time:{
        type: DataTypes.DATE
    },
    date_time_f:{
        type: DataTypes.DATE
    },
    timeDuration:{
        type: DataTypes.STRING(30)
    },
    validity:{
        type: DataTypes.STRING(2)
    }
},{
    tableName: 'troba_fall_down_view',
    timestamps: false
})

module.exports = TrobaDown