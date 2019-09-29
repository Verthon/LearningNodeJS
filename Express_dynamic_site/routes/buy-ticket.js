const express = require('express')

const router = express.Router()

const buyTicketController = require('../controllers/buyTicket')

router.get('/buy-ticket', buyTicketController.getBuyTicket)
router.post('/buy-ticket', buyTicketController.buyTicket)

module.exports = router
