const Contact = require('../model/contact')
const sgMail = require('@sendgrid/mail')
const { validationResult } = require('express-validator')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.getContact = (req, res, next) => {
  res.render('contact', {
    pageTitle: 'Contact',
    links: ['speakers', 'about', 'schedule', 'contact'],
    hasError: false
  })
}

exports.sendContactInfo = (req, res, next) => {
  const email = req.body.email
  const message = req.body.message
  const name = req.body.name
  const phone = req.body.phone
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).render('contact', {
      pageTitle: 'Contact',
      links: ['speakers', 'about', 'schedule', 'contact'],
      hasError: true,
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    })
  }
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
