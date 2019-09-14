const express = require('express')
const router = express.Router()

const pageController = require('../controllers/pages')

router.get(
  '/news',
  pageController.getSinglePage('news', {
    pageTitle: 'News',
    links: ['speakers', 'about', 'schedule', 'news', 'contact']
  })
)

module.exports = router
