const { DataTypes } = require('sequelize')

const db = require('../../db/connection')

const Cliente = db.define('Cliente' , {
    serviceId:{
        type: DataTypes.INTEGER
    },
    cmProductId:{
        type: DataTypes.INTEGER
    },
    saleId:{
        type: DataTypes.INTEGER
    },
    mtaProductId:{
        type: DataTypes.INTEGER
    },
    clientCod:{
        type: DataTypes.INTEGER
    },
    clientName:{
        type: DataTypes.STRING(300)
    },
    phone1:{
        type: DataTypes.INTEGER
    },
    phone2:{
        type: DataTypes.INTEGER
    },
    trobaNode:{
        type: DataTypes.STRING(20)
    },
    interface:{
        type: DataTypes.STRING(20)
    },
    cmts:{
        type: DataTypes.STRING(20)
    },
    contactPhone:{
        type: DataTypes.INTEGER
    },
    activePack:{
        type: DataTypes.STRING(20)
    },
    ipAddress:{
        type: DataTypes.STRING(40)
    },
    macAddress:{
        type: DataTypes.STRING(40)
    },
    bonding:{
        type: DataTypes.STRING(20)
    },
    snrDown:{
        type: DataTypes.DOUBLE(10,2)
    },
    powerDown:{
        type: DataTypes.DOUBLE(10,2)
    },
    snrUp:{
        type: DataTypes.DOUBLE(10,2)
    },
    powerUp:{
        type: DataTypes.DOUBLE(10,2)
    },
    macState:{
        type: DataTypes.STRING(10)
    },
    manufacturer:{
        type: DataTypes.STRING(30)
    },
    model:{
        type: DataTypes.STRING(30)
    },
    firmware:{
        type: DataTypes.STRING(30)
    },
    docsis:{
        type: DataTypes.STRING(30)
    },
    voIp:{
        type: DataTypes.STRING(100)
    },
    ispCpe:{
        type: DataTypes.STRING(10)
    }
},{
    tableName: 'query_multiple_view',
    timestamps: false
})

const ClienteSrbb = db.define('ClienteSrbb' , {
    serviceId:{
        type: DataTypes.INTEGER
    },
    cmProductId:{
        type: DataTypes.INTEGER
    },
    saleId:{
        type: DataTypes.INTEGER
    },
    mtaProductId:{
        type: DataTypes.INTEGER
    },
    clientCod:{
        type: DataTypes.INTEGER
    },
    clientName:{
        type: DataTypes.STRING(300)
    },
    phone1:{
        type: DataTypes.INTEGER
    },
    phone2:{
        type: DataTypes.INTEGER
    },
    trobaNode:{
        type: DataTypes.STRING(20)
    },
    interface:{
        type: DataTypes.STRING(20)
    },
    cmts:{
        type: DataTypes.STRING(20)
    },
    contactPhone:{
        type: DataTypes.INTEGER
    },
    activePack:{
        type: DataTypes.STRING(20)
    },
    ipAddress:{
        type: DataTypes.STRING(40)
    },
    macAddress:{
        type: DataTypes.STRING(40)
    },
    bonding:{
        type: DataTypes.STRING(20)
    },
    snrDown:{
        type: DataTypes.DOUBLE(10,2)
    },
    powerDown:{
        type: DataTypes.DOUBLE(10,2)
    },
    snrUp:{
        type: DataTypes.DOUBLE(10,2)
    },
    powerUp:{
        type: DataTypes.DOUBLE(10,2)
    },
    macState:{
        type: DataTypes.STRING(10)
    },
    manufacturer:{
        type: DataTypes.STRING(30)
    },
    model:{
        type: DataTypes.STRING(30)
    },
    firmware:{
        type: DataTypes.STRING(30)
    },
    docsis:{
        type: DataTypes.STRING(30)
    },
    voIp:{
        type: DataTypes.STRING(100)
    },
    ispCpe:{
        type: DataTypes.STRING(10)
    }
},{
    tableName: 'query_multiple_srbb_view',
    timestamps: false
})

const ClienteTelefono = db.define('ClienteTelefono',{
    cliente:{
        type: DataTypes.DOUBLE
    }
},{
    tableName: 'cliente_telefono_view',
    timestamps: false
})

const ClienteDniRuc = db.define('ClienteDniRuc',{
    cliente:{
        type: DataTypes.DOUBLE
    }
},{
    tableName: 'cliente_dni_ruc_view',
    timestamps: false
})

module.exports = {
    Cliente,
    ClienteSrbb,
    ClienteTelefono,
    ClienteDniRuc
}