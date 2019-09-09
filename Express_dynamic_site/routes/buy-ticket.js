const express = require('express');

const router = express.Router();

const pageController = require('../controllers/pages');

router.get('/buy-ticket', pageController.getSinglePage('buy-ticket', { pageTitle: 'Buy ticket' }));

module.exports = router;
