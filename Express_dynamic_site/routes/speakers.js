const express = require('express')
const router = express.Router()

const pageController = require('../controllers/pages')
const speakersController = require('../controllers/speakers')

router.get('/speakers', pageController.getSinglePage('speakers', { pageTitle: 'Speakers' }))
router.get('/speakers', speakersController.getAllSpeakers)

module.exports = router
