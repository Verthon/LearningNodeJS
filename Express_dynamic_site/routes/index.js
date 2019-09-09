const express = require('express');

const router = express.Router();

const Newsletter = require('../model/newsletter');
const pageController = require('../controllers/pages');

router.get('/', pageController.getSinglePage('index', { pageTitle: 'Homepage', links: ['speakers', 'about-us', 'schedule', 'news'] }));

router.post('/', (req, res, next) => {
  const newsletter = new Newsletter(req.body.newsletter);
  return newsletter;
})

module.exports = router;
