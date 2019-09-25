const express = require('express')
const router = express.Router()

const speakersController = require('../controllers/speakers')

router.get('/speakers', speakersController.getAllSpeakers)

module.exports = router
