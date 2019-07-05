const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth');

const OrdersController = require('../controllers/orders');

router.get('/', checkAuth, OrdersController.getAllOrders);

router.post('/', checkAuth, OrdersController.createOrder);

router.delete('/:orderId', checkAuth, OrdersController.deleteOrder);

module.exports = router;
