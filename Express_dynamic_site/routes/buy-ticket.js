const express = require('express');
const bodyPareser = require('body-parser');
const path = require('path');
const router = express.Router();

router.get('/buy-ticket', (req, res) => {
  return res.render('buy-ticket', {pageTitle: 'Buy ticket'});
});

module.exports = router;