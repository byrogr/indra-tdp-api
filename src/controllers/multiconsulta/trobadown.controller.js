const Errors = require("../../errors/errors")
const TrobaDown = require("../../models/multiconsulta/trobadown.model")

const getTrobaDown = async (req,res,next) => {
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
        }else{
            mensaje = ' Resource cmtsPort: ' + query.cmtsPort + ' and trobaNode: ' +  query.trobaNode + ' does not exist'
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
    getTrobaDown
}