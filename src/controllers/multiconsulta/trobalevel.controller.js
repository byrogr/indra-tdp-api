const TrobaLevel = require("../../models/multiconsulta/trobalevel.model");

const getTrobaLevel = async (req,res) => {
    const { query } = req

    try{
        let mensaje = ''
        let data = []
        let color = []
        const where = { puerto_cmts: query.cmtsPort }
        const datos = await TrobaLevel.findAll({ 
            attributes :['cmts','interface','description','powerup_max','powerup_prom','powerup_min',
                         'powerds_max','powerds_prom','powerds_min','snr_avg','snr_down','fecha_hora'],
            where 
        });  

        if( datos.length > 0 ){
            for(const dato in datos){
                data.push(datos[dato].dataValues)
            }
            mensaje = 'Hay datos historicos para graficar'
        }else{
            data = null
            mensaje = 'Sin histórico para graficar. Sin niveles de troba en los últimos 15 días.'
        }

        color = [{"description":"powerup","color": "blue"},
                 {"description":"powerds","color": "orange"},
                 {"description":"snrup","color": "green"},
                 {"description":"snrdown","color": "red"}]
        

        res.status(201).json({
            code: 201,
            error: false,
            message: mensaje,
            response: {
                trobaNode : query.trobaNode,
                data : data,
                LevelColor : color
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
    getTrobaLevel
}