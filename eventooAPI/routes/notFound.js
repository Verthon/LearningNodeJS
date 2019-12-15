const express = require('express');
const router = express.Router();

/* GET users listing. */
router.use(function(req, res, next) {
  res.status(400).json({message: 'Contact GET successful'});
});

router.post('/', function(req, res, next) {
  res.json({
    'email': req.body.email,
    'message': req.body.message,
    'created_on': req.body.created_on
  })
})

module.exports = router;