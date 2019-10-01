const express = require('express')
const router = express.Router()

const speakersController = require('../controllers/speakers')
const newsletterController = require('../controllers/newsletter')

router.get('/speakers', speakersController.getAllSpeakers)
router.post('/', newsletterController.getNewsletter)

module.exports = router
