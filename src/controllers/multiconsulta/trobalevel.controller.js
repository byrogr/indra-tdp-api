const Errors = require("../../errors/errors");
const TrobaLevel = require("../../models/multiconsulta/trobalevel.model");

const getTrobaLevel = async (req,res,next) => {
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

            color = [{"description":"powerup","color": "blue"},
                 {"description":"powerds","color": "orange"},
                 {"description":"snrup","color": "green"},
                 {"description":"snrdown","color": "red"}]

            res.status(200).json({
                code: 200,
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
    getTrobaLevel
}
