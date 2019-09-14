const express = require('express')
const router = express.Router()

const pageController = require('../controllers/pages')
const contactController = require('../controllers/contact')

router.get('/contact', pageController.getSinglePage('contact', { pageTitle: 'Contact', links: ['speakers', 'about', 'schedule', 'news', 'contact'] }))
router.post('/contact', contactController.sendContactInfo)

module.exports = router
