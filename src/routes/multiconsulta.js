const { Router } = require('express')
const { check } = require('express-validator')

const { getClient } = require('../controllers/multiconsulta/client.controller')
const { getTrafficDown } = require('../controllers/multiconsulta/trafficdown.controller')
const { getTrobaDown } = require('../controllers/multiconsulta/trobadown.controller')
const { getTrobaLevel } = require('../controllers/multiconsulta/trobalevel.controller')
const validarCampos = require('../middlewares/validation')

const router = Router()

router.get('/trafficDown', getTrafficDown)
router.get('/trobaLevels', getTrobaLevel)
router.get('/trobaFallDown', getTrobaDown)
router.get('/queryMultiple',[ 
    check('typeData', 'El campo typeData debe ser integer')
        .isInt().isIn([1,2,3,4,5,6]).withMessage('El campo typeData solo puede ser 1,2,3,4,5 o 6'),
    check('text').custom( (value, { req }) =>{
        if(req.query.typeData == 1){ 
            return new RegExp(/^[0-9\.]+$/).test(value)
        }else if(req.query.typeData == 2){
            return new RegExp(/^[a-zA-Z0-9\:.]+$/).test(value)
        }else {
            return new RegExp(/^[0-9]+$/).test(value)
        }
    }).withMessage('Formato invalido para el tipo de busqueda ingresada'),
    check('text').custom((value, { req }) =>{
        let response
        if(req.query.typeData == 1){
            response = (value.substr(0,1) == 0) ?  false : true;
        }else if(req.query.typeData == 2){
            response = ((value.trim()).length < 12 || (value.trim()).length > 17) ? false: true
        }else if(req.query.typeData == 3 || req.query.typeData == 4 ){
            response = ((value.trim()).length > 9 || (value.trim()).length < 7) ? false: true
        }else if(req.query.typeData == 5){
            response = ((value.trim()).length > 8 || (value.trim()).length < 8) ? false: true
        }else{
            response = ((value.trim()).length > 11 || (value.trim()).length < 11) ? false: true
        }
        return response
    }).withMessage('Longitud o formato invalido para el tipo de busqueda ingresada'),
    validarCampos
],getClient)

module.exports = router