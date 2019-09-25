const express = require('express')
const router = express.Router()

const scheduleController = require('../controllers/schedule')

router.get('/schedule', scheduleController.getSchedule)

module.exports = router
