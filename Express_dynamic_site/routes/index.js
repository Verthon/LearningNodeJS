const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.render('index', {pageTitle: 'Homepage', links: ['speakers', 'about-us', 'schedule', 'news']});
});

module.exports = router;