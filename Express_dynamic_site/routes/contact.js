const express = require('express')
const router = express.Router()

const pageController = require('../controllers/pages')

router.get('/contact', pageController.getSinglePage('contact', { pageTitle: 'Contact' }))

module.exports = router
