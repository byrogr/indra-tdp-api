const { Router } = require('express')
const { check } = require('express-validator')

const { postAlarm } = require('../controllers/ftth/alarms.controller')
const validarCampos = require('../middlewares/validation')

const router = Router()

router.post('/alarms',[
    check('deviceDescription', 'El campo deviceDescription no debe estar vacio')
        .not().isEmpty().isString().withMessage('El campo deviceDescription debe ser de tipo String'),
    check('notificationId', 'El campo notificationId debe ser de tipo Integer')
        .optional({nullable: true}).isInt(),
    check('alarm', 'El campo alarm no debe estar vacio')
        .not().isEmpty().isObject().withMessage('El campo alarm debe ser un Object'),
    check('alarm.alarmaId', 'El campo alarmaId debe ser de tipo Integer')
        .isInt(),
    check('alarm.name', 'El campo name no debe estar vacio')
        .not().isEmpty().isString().withMessage('El campo name debe ser de tipo String'),
    check('alarm.location', 'El campo location no debe estar vacio')
        .not().isEmpty().isString().withMessage('El campo location debe ser de tipo String'),
    check('alarm.source', 'El campo source no debe estar vacio')
        .not().isEmpty().isString().withMessage('El campo source debe ser de tipo String'),
    check('alarm.specificProblem', 'El campo specificProblem debe ser de tipo String')
        .optional({nullable: true}).isString(),
    check('alarm.reason', 'El campo reason debe ser de tipo String')
        .optional({nullable: true}).isString(),
    check('alarm.severity', 'El campo severity no debe estar vacio')
        .not().isEmpty().isString().withMessage('El campo severity debe ser de tipo String'),
    check('alarm.originalSeverity', 'El campo originalSeverity no debe estar vacio')
        .not().isEmpty().isString().withMessage('El campo originalSeverity debe ser de tipo String'),
    check('alarm.state', 'El campo state no debe estar vacio')
        .not().isEmpty().isString().withMessage('El campo state debe ser de tipo String'),
    check('alarm.eventTime', 'El campo eventTime no debe estar vacio')
        .not().isEmpty().isISO8601().withMessage('El campo eventTime debe ser de tipo date y con el formato YYYY-MM-DD hh:mm:ss'),
    check('alarm.clearTime', 'El campo clearTime debe ser de tipo date y con el formato YYYY-MM-DD hh:mm:ss')
        .optional({nullable: true}).isISO8601(),
    check('additionalInfo', 'El campo additionalInfo debe ser de tipo array object')
        .optional({nullable: true}).isArray(),
    check('additionalInfo.*.key', 'El campo key no debe estar vacio')
        .not().isEmpty().isString().withMessage('El campo key debe ser de tipo String'),
    check('additionalInfo.*.value', 'El campo value debe ser de tipo String')
        .optional({nullable: true}).isString(),
    check('lastUpdateTime', 'El campo lastUpdateTime debe ser de tipo date y con el formato YYYY-MM-DD hh:mm:ss')
        .optional({nullable: true}).isISO8601(),
    validarCampos
] ,postAlarm)

module.exports = router
