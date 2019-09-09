const express = require('express')
const router = express.Router()

const pageController = require('../controllers/pages')

router.get('/pricing', pageController.getSinglePage('pricing', { pageTitle: 'Pricing' }))

module.exports = router
