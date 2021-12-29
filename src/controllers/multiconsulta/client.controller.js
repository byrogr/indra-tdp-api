const { Op } = require("sequelize/dist");
const { ClienteTelefono, ClienteDniRuc, ClienteSrbb, Cliente } = require("../../models/multiconsulta/client.model");

const getClient = async (req,res) => {
    const { query } = req

    try{
        let where = {}

        if(query.typeData == 3 || query.typeData == 4){
            const data = await ClienteTelefono.findAll({
                    attributes : ['cliente'],
                    where: {
                        [Op.or]:[
                            {telf1 : query.text},{telf2 : query.text},{telf3 : query.text},{telf4 : query.text},
                            {telf5 : query.text},{telf6 : query.text},{telf7 : query.text},{telf8 : query.text},
                            {telf9 : query.text},{telf10 : query.text},{telf11 : query.text},{telf12 : query.text}
                        ]
                    }
                })

            if(query.typeData == 3){
                where = (data[0].dataValues.cliente == null) ? { [Op.or]: [{phone1 : query.text},{phone2 : query.text},{contactPhone : query.text}]} : { clientCod : data[0].dataValues.cliente}
            }else{
                where = (data[0].dataValues.cliente == null) ? { telefonohfc : query.text} : { clientCod : data[0].dataValues.cliente}
            }
        } else if ( query.typeData == 5){
            const data = await ClienteDniRuc.findAll({
                    attributes : ['cliente'],
                    where: { numerodoc : query.text }
                })

            where = { clientCod : data[0].dataValues.cliente }

        } else if (query.typeData == 6){
            const data = await ClienteDniRuc.findAll({
                    attributes : ['cliente'],
                    where: { numeroruc : query.text }
                })

            where = { clientCod : data[0].dataValues.cliente }
            
        } else if (query.typeData == 1){

            where = { clientCod : query.text}

        } else {

            let mac = (((query.text).replace('.','')).replace(':','')).replace('-','')
            where = { mac3 : mac} 

        }

        let datos = ''
        let mensaje = ''
        let queryresult = ''
        let cablemoden = []
        
        datos = await ClienteSrbb.findAll({ where })
        if( datos.length == 0){
            datos = await Cliente.findAll({ where })
        }

        if(datos.length > 0){
            queryresult = datos[0].dataValues
            mensaje = 'Se encontro resultados'
            cablemoden = null
        }else{
            mensaje = 'No existen resultados de busqueda asociados a los filtros seleccionados'
            queryresult = null
            cablemoden = null
        }

        res.status(500).json({
            code: 201,
            error: false,
            message: mensaje,
            QueryResult: queryresult ,
            IpsCableModemAssignment: cablemoden     
        })


    } catch (err) {
        res.status(500).json({
            code: 500,
            error: true,
            message: 'Error al conectarse con el servicio',     
        })
    }
}

module.exports = {
    getClient
}