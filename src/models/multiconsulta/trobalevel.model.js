const { DataTypes } = require('sequelize')

const db = require('../../db/connection')

const TrobaLevel = db.define('TrobaLevel' , {
    cmts:{
        type: DataTypes.STRING(20)
    },
    interface:{
        type: DataTypes.STRING(20)
    },
    description:{
        type: DataTypes.STRING(80)
    },
    powerup_max:{
        type: DataTypes.STRING(20)
    },
    powerup_prom:{
        type: DataTypes.STRING(20)
    },
    powerup_min:{
        type: DataTypes.STRING(20)
    },
    powerds_max:{
        type: DataTypes.STRING(20)
    },
    powerds_prom:{
        type: DataTypes.STRING(20)
    },
    powerds_min:{
        type: DataTypes.STRING(20)
    },
    snr_avg:{
        type: DataTypes.STRING(10)
    },
    snr_down:{
        type: DataTypes.STRING(10)
    },
    fecha_hora:{
        type: DataTypes.DATE
    }
},{
    tableName: 'troba_level_view',
    timestamps: false
})

module.exports = TrobaLevel