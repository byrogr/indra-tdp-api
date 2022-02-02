const { validationResult } = require("express-validator");
const Errors = require("../errors/errors");

const validarCampos = ( req, res, next ) =>{

    const errors = validationResult(req);
    let mensaje = [];
    errors.array().map(err => mensaje.push( err.msg ));

    if(!errors.isEmpty()){
        if(req.baseUrl = '/api/v1/mc'){
            next(new Errors({ 
                codigo : 'SVC1001' , 
                mensaje : mensaje.toString() 
            }))
        }else{
            return res.status(400).json({
                code: 400,
                failed: true,
                error: {
                    message: mensaje.toString()
                } 
            });
        }
    }
    next();
}

module.exports = validarCampos