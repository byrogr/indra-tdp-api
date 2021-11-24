const { Router } = require('express')

const { alarmsPost } = require('../controllers/ftth/alarms.controller')

const router = Router()

router.post('/alarms', alarmsPost)

module.exports = router