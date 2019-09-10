const Ticket = require('../model/ticket')

exports.buyTicket = (req, res, next) => {
  const name = req.body.name
  const price = req.body.price
  const amount = req.body.amount
  const ticket = new Ticket({
    name: name,
    price: price,
    amount: amount
  })
  ticket
    .save()
    .then(res => {
      console.log(res, 'Ticket added')
      res.redirect('/checkout')
    })
    .catch(err => console.log(err))
}
