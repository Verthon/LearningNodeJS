const express = require('express')
const router = express.Router()

const pageController = require('../controllers/pages')

router.get('/about', pageController.getSinglePage('about', { pageTitle: 'About' }))

module.exports = router
