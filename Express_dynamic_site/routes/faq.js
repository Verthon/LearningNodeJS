const express = require('express')
const router = express.Router()

const pageController = require('../controllers/pages')

router.get('/faq', pageController.getSinglePage('faq', { pageTitle: 'Faq' }))

module.exports = router
