const express = require('express');
const bodyPareser = require('body-parser');
const router = express.Router();


router.get('/speakers', (req, res) => {
  return res.send('GET request for speakers');
});

module.exports = router;