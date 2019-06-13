const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(200).json({
    message: "Orders were fetched",
    order: order,
  })
});

module.exports = router;