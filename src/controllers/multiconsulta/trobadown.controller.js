const TrobaDown = require("../../models/multiconsulta/trobadown.model")

const getTrobaDown = async (req,res) => {
    const { query } = req

    try{
        let mensaje = ''
        let data = []
        let color = []
        const where = { puerto_cmts: query.cmtsPort }
        const datos = await TrobaDown.findAll({ 
            attributes:['cmts','interface','description','cm_tot','cm_offline','oper',
                        'cmporc','date_time','date_time_f','timeDuration','validity'], 
            where }); 
        
        if( datos.length > 0 ){
            for(const dato in datos){
                data.push(datos[dato].dataValues)
            }
            mensaje = 'Hay datos historicos para graficar'
        }else{
            data = null
            mensaje = 'Sin histórico para graficar. Sin caidas masivas en los últimos 15 días.'
        }

        color = [{"description":"CM Total","color": "blue"},
                 {"description":"CM Offline","color": "red"},
                 {"description":"CM Oper","color": "green"}]


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
    getTrobaDown
}