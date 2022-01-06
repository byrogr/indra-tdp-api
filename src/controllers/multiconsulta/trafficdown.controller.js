const Errors = require('../../errors/errors')
const TraficoDown = require('../../models/multiconsulta/trafficdown.model')

const getTrafficDown = async (req,res,next) => {
    const { query } = req

    try{
        let mensaje = ''
        let data = []
        let down = ''
        const where = { cmts: query.cmts , interface: query.interface }
        const datos = await TraficoDown.findAll({ attributes:['cmts','down','date_time','use','quantity'], where });

        if( datos.length > 0 ){
            for(const dato in datos){
                data.push(datos[dato].dataValues)
            }
            down = datos[0].dataValues.down
            mensaje = 'Hay data para graficar'

            res.status(200).json({
                code: 200,
                error: false,
                message: mensaje,
                response: {
                    data : data,
                    down : down
                }
            })

        }else{
            mensaje = ' Resource cmts: ' + query.cmts + ' and interface: ' +  query.interface + ' does not exist'
            next(new Errors({
                codigo : 'SVC1006',
                mensaje : mensaje
            }))
        }


    } catch (err) {
        next(new Errors({
            codigo : 'SVR1000',
            mensaje : ''
        }))
    }
}

module.exports = {
    getTrafficDown
}
