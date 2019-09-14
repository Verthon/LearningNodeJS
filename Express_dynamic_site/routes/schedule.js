const express = require('express')
const router = express.Router()

const pageController = require('../controllers/pages')

router.get(
  '/schedule',
  pageController.getSinglePage('schedule', {
    pageTitle: 'Schedule',
    links: ['speakers', 'about', 'schedule', 'news', 'contact']
  })
)

module.exports = router
