const Contact = require('../model/Contact')

exports.sendContactInfo = (req, res, next) => {
  console.log(req.body)
  const email = req.body.email
  const message = req.body.message
  const name = req.body.name
  const phone = req.body.phone
  const contact = new Contact({
    email: email,
    name: name,
    message: message,
    phone: phone
  })
  contact
    .save()
    .then(res => {
      console.log('Email added to mailing list', res)
    })
    .catch(err => {
      console.log(err)
    })
}
