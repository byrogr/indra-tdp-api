const TraficoDown = require('../../models/multiconsulta/trafficdown.model')

const getTrafficDown = async (req,res) => {
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
        }else{
            down = null
            data = null
            mensaje = 'No hay data para graficar - Revisar App'
        }
        
        res.status(201).json({
            code: 201,
            error: false,
            message: mensaje,
            response: {
                data : data,
                down : down
            }
        })

    } catch (err) {
        res.status(500).json({
            code: 500,
            error: true,
            message: 'Error al conectarse con el servicio',
            response: null        
        })
    }
}

module.exports = {
    getTrafficDown
}