const express = require('express');
const bodyPareser = require('body-parser');
const path = require('path');
const router = express.Router();

router.get('/contact', (req, res) => {
  return res.render('contact', {pageTitle: 'Contact'});
});

module.exports = router;