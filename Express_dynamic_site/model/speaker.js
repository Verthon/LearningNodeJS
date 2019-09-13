const mongoose = require('mongoose')

const Schema = mongoose.Schema

const speakerSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  skills: { type: Array, require: true },
  personalInfo: { type: Object, required: true },
  socials: { type: Array, required: false },
  img: { type: String, required: false }
})

module.exports = mongoose.model('Speaker', speakerSchema)
