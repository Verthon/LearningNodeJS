const express = require('express');
const bodyPareser = require('body-parser');
const path = require('path');
const router = express.Router();


router.get('/', (req, res) => {
  return res.sendFile('/views/index.hbs');
});

module.exports = router;