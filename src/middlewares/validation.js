const { validationResult } = require("express-validator")

const validarCampos = ( req, res, next ) =>{

    const errors = validationResult(req);
    let mensaje = [];
    errors.array().map(err => mensaje.push( err.msg ));

    if(!errors.isEmpty()){
        return res.status(400).json({
            code: 400,
            failed: false,
            error: {
                message: mensaje.toString()
            }           
        });
    }

    next();
}

module.exports = validarCampos