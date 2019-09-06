const express = require('express');
const bodyPareser = require('body-parser');
const router = express.Router();


router.get('/faq', (req, res) => {
  return res.send('FAQ');
});

module.exports = router;