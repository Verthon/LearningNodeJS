const mongoose = require('mongoose')

const Schema = mongoose.Schema

const scheduleSchema = new Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  img: { type: String, required: true },
  subject: { type: String, required: true },
  venue: { type: String, required: true }
})

module.exports = mongoose.model('Schedule', scheduleSchema)
