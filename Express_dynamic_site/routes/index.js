const express = require('express')
const router = express.Router()
const newsletterController = require('../controllers/newsletter')
const speakerController = require('../controllers/speakers')
const scheduleController = require('../controllers/schedule')

router.route('/')
  .get(speakerController.getAllSpeakers)
  .get(scheduleController.getSchedule)

router.post('/', newsletterController.getNewsletter)

module.exports = router
