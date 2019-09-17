const express = require('express')
const router = express.Router()
const pageController = require('../controllers/pages')
const newsletterController = require('../controllers/newsletter')

router.get(
  '/',
  pageController.getSinglePage('index', {
    pageTitle: 'Homepage',
    links: ['speakers', 'about', 'schedule', 'contact']
  })
)

router.post('/', newsletterController.getNewsletter)

module.exports = router
