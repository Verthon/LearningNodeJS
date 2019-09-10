const express = require('express')

const router = express.Router()

const pageController = require('../controllers/pages')

router.get(
  '/buy-ticket',
  pageController.getSinglePage('checkout', { pageTitle: 'Checkout' })
)

module.exports = router
