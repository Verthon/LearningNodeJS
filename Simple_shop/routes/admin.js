const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {pageTitle: 'Page not found!', products: ["Book, Ticket, Test"]});
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;