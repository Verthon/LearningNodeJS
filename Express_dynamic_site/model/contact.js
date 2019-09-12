const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: false },
  message: { type: String, required: true }
})

module.exports = mongoose.model('Contact', contactSchema)
