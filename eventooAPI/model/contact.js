const bookshelf = require('../config/bookshelf')

const Contact = bookshelf.model('Contact', {
  tableName: 'contacts'
})

module.exports.create = (contacts) => {
  return new Contact({
    email: contacts.email,
    phone: contacts.phone,
    message: contacts.message,
  }).save()
}