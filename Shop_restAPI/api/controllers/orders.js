const Order = require('../models/order');
const Product = require('../models/product');

exports.getAllOrders = (req, res, next) => {
  Order.find()
    .select('productId quantity')
    .then(doc => {
      res.status(200).json({ doc });
    })
    .catch(err => {
      return {
        error: err,
      };
    });
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(200).json({
    message: 'Orders were fetched',
    order: order,
  });
};

exports.createOrder = (req, res, next) => {
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    quantity: req.body.quantity,
    product: req.body.productId,
  });
  order
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Order added.',
        order: result,
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.deleteOrder = (req, res, next) => {
  const id = req.params.orderId;
  Order.deleteOne({ _id: id })
    .then(result => {
      res.status(200).json({
        message: 'Order deleted.',
        request: {
          type: 'POST',
          url: 'http://localhost:3000/orders',
          body: { quantity: 'Number', productId: 'String' },
        },
      });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
}