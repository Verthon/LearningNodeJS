const express = require('express')

const router = express.Router()

const pageController = require('../controllers/pages')

router.get(
  '/checkout',
  pageController.getSinglePage('checkout', { pageTitle: 'Checkout', links: ['speakers', 'about', 'schedule', 'news', 'contact'] })
)

module.exports = router
