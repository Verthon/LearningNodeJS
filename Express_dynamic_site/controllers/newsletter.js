const Newsletter = require('../model/newsletter')

exports.getNewsletter = (req, res, next) => {
  console.log(req.body)
  const email = req.body.email
  const newsletter = new Newsletter({
    email: email
  })
  newsletter
    .save()
    .then(res => {
      console.log('Email added to mailing list', res)
    })
    .catch(err => {
      console.log(err)
    })
}
