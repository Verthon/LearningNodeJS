const express = require('express')
const router = express.Router()

const pageController = require('../controllers/pages')

router.get('/about', pageController.getSinglePage('about', {
  pageTitle: 'About',
  links: ['speakers', 'about', 'schedule', 'news', 'contact']
}))

module.exports = router
