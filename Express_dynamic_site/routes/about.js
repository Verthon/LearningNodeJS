const express = require('express')
const router = express.Router()

const newsletterController = require('../controllers/newsletter')
const aboutController = require('../controllers/about')

router.get('/about', aboutController.getAbout)
router.post('/', newsletterController.getNewsletter)

module.exports = router
