const Errors = require("../errors/errors")

const validarMethod = (req,res,next) =>{

    if(!req.method || req.method != 'GET'){
        next(new Errors({
            codigo : 'SVC1003',
            mensaje : ''
        }))
    }
    next()
}

module.exports = validarMethod