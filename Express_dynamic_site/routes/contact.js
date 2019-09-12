const express = require('express')
const router = express.Router()

const pageController = require('../controllers/pages')
const contactController = require('../controllers/contact')

router.get('/contact', pageController.getSinglePage('contact', { pageTitle: 'Contact' }))
router.post('/contact', contactController.sendContactInfo)

module.exports = router
