import mongoose from 'mongoose'
const Schema = mongoose.Schema

const bookingSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  guests: {
    type: Number,
    required: true
  }
})

bookingSchema.set('collection', 'bookings')

export const Booking = mongoose.model('Booking', bookingSchema)
