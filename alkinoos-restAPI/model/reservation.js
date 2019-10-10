import mongoose from 'mongoose'
const Schema = mongoose.Schema

const reservationSchema = new Schema({
  email: String,
  name: String,
  date: String,
  guests: Number
})

reservationSchema.set('collection', 'reservations')

export const Reservation = mongoose.model('Reservation', reservationSchema)
