const Contact = require('../model/contact')

module.exports = contactController = (req, res, next) => {
  Contact.create({
    phone: req.body.phone,
    message: req.body.message,
    email: req.body.email
  }).then(() =>{
    res.json({message: 'Thank you, your message has been sent.'})
  }).catch(next)
}