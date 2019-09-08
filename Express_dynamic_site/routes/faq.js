const express = require('express');
const bodyPareser = require('body-parser');
const router = express.Router();


router.get('/faq', (req, res) => {
  return res.render('faq', {pageTitle: 'Frequently asked questions'});
});

module.exports = router;