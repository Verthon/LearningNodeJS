const express = require('express');
const bodyPareser = require('body-parser');
const path = require('path');
const router = express.Router();

router.get('/pricing', (req, res) => {
  return res.render('pricing', {pageTitle: 'Pricing'});
});

module.exports = router;