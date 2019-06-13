const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Handling GET products"
  })
});

router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };

  res.status(201).json({
    message: "Handling POST products",
    createdProduct: product,
  })
});

router.get('/productId', (req, res, next) => {
  const id = req.params.productID;
  if(id === 'special') {
    res.status(200).json({
      message: 'You have discovered an special ID',
      id: id,
    });
  }else{
    res.status(200).json({
      message: 'You have discovered an special ID'
    });
  }
});

router.patch('/', (req, res, next) => {
  res.status(200).json({
    message: "Handling PATCH products"
  })
});

router.delete('/', (req, res, next) => {
  res.status(200).json({
    message: "Handling DELETE products"
  })
});

module.exports = router;