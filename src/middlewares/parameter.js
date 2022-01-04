const Errors = require("../errors/errors")

const validarParameter = (req,res,next) => {
    const pathName = req.route.path
    const { query } = req
    let mensaje = ''
    
    if(pathName == '/queryMultiple'){
        if(!query.typeData){
            mensaje = 'typeData'
        }else if (!query.text){
            mensaje = 'text'
        }       
    }

    if(pathName == '/trafficDown'){
        if(!query.cmts){
            mensaje = 'cmts'
        }else if (!query.interface){
            mensaje = 'interface'
        }
    }

    if(pathName == '/trobaLevels' || pathName == '/trobaFallDown'){
        if(!query.cmtsPort){
            mensaje = 'cmtsPort'
        }else if (!query.trobaNode){
            mensaje = 'trobaNode'
        }
    }

    if(mensaje!=''){
        next(new Errors({
            codigo : 'SVC1000',
            mensaje : mensaje
        }))
    }

    next()
}

module.exports = validarParameter