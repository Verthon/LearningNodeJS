import { body } from 'express-validator'
import { Booking } from '../model/booking'

export const validateBooking = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .custom(value => {
      return Booking.find({ email: value }).then(booking => {
        if (booking) {
          return Promise.reject(new Error('Email already used'))
        }
      })
    }),
  body('name').isString(),
  body('date')
    .isString()
    .isAfter(),
  body('guests').isNumeric()
]
