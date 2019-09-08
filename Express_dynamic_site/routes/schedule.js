const express = require('express');
const bodyPareser = require('body-parser');
const path = require('path');
const router = express.Router();

const pageController = require('../controllers/pages');

router.get('/schedule', pageController.getSinglePage('schedule', {pageTitle: 'Schedule'}));

module.exports = router;