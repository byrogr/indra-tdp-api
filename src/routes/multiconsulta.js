const { Router } = require('express')
const { check } = require('express-validator')

const { getClient } = require('../controllers/multiconsulta/client.controller')
const { getTrafficDown } = require('../controllers/multiconsulta/trafficdown.controller')
const { getTrobaDown } = require('../controllers/multiconsulta/trobadown.controller')
const { getTrobaLevel } = require('../controllers/multiconsulta/trobalevel.controller')
const errorMiddleware = require('../middlewares/error')
const validarHeader = require('../middlewares/header')
const validarMethod = require('../middlewares/method')
const validarParameter = require('../middlewares/parameter')
const validarCampos = require('../middlewares/validation')

const router = Router()

router.use(validarMethod)

router.get('/trafficDown', validarHeader,validarParameter,[
    check('cmts','El campo cmts debe ser string').isString(),
    check('interface','El campo interface debe ser string').isString(),
    validarCampos
],getTrafficDown)
router.get('/trobaLevels', validarHeader,validarParameter,[
    check('cmtsPort','El campo cmtsPort debe ser string').isString(),
    check('trobaNode','El campo trobaNode debe ser string').isString(),
    validarCampos
], getTrobaLevel)
router.get('/trobaFallDown', validarHeader,validarParameter,[
    check('cmtsPort','El campo cmtsPort debe ser string').isString(),
    check('trobaNode','El campo trobaNode debe ser string').isString(),
    validarCampos
],getTrobaDown)
router.get('/queryMultiple', validarHeader,validarParameter,[ 
    check('typeData', 'El campo typeData debe ser integer')
        .isInt().isIn([1,2,3,4,5,6]).withMessage('El campo typeData solo puede ser 1,2,3,4,5 o 6'),
    validarCampos
],getClient)

router.use(errorMiddleware)

module.exports = router