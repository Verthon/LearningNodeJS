const express = require('express')
const router = express.Router()

const pageController = require('../controllers/pages')

router.get('/speakers', pageController.getSinglePage('speakers', { pageTitle: 'Speakers' }))

module.exports = router
