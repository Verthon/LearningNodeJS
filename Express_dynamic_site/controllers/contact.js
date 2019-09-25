const Contact = require('../model/contact')

exports.getContact = (req, res, next) => {
  res.render('contact', {
    pageTitle: 'Contact',
    links: ['speakers', 'about', 'schedule', 'contact']
  }
  )
}

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
      console.log('Form contact sent', res)
    })
    .catch(err => {
      console.log(err)
    })
}
