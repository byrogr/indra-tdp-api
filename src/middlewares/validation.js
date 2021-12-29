const { validationResult } = require("express-validator")

const validarCampos = ( req, res, next ) =>{

    const errors = validationResult(req);
    let mensaje = [];
    let body = {};
    errors.array().map(err => mensaje.push( err.msg ));

    if(!errors.isEmpty()){
        if(req.baseUrl = '/api/v1/mc'){
            body = {
                code: 400,
                error: true,
                message: mensaje.toString() 
            }
        }else{
            body = {
                code: 400,
                failed: true,
                error: {
                    message: mensaje.toString()
                } 
            }
        }
        return res.status(400).json(body);
    }
    next();
}

module.exports = validarCampos