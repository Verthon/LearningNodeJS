const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController')

router.get('/', function(req, res, next) {
  res.json({message: 'Contact GET successful'});
});

router.post('/', contactController)

module.exports = router;