const express = require('express');
const bodyPareser = require('body-parser');
const path = require('path');
const router = express.Router();


router.get('/speakers', (req, res) => {
  return res.render('speakers', {pageTitle: 'Our speakers'});
});

module.exports = router;