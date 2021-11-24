const { Router } = require('express')

const { postAlarm } = require('../controllers/ftth/alarms.controller')

const router = Router()

router.post('/alarms', postAlarm)

module.exports = router
