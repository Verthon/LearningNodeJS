import { body } from 'express-validator'
import { Booking } from '../model/booking'

export const validateBooking = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .custom(value => {
      return Booking.exists({ email: value }).then(booking => {
        if (booking) {
          return Promise.reject(new Error('Given email address is already used.'))
        }
      })
    }),
  body('name').isString(),
  body('date')
    .isString()
    .isAfter(),
  body('guests').isNumeric().custom(value => {
    if (value < 1 || value > 4) {
      return Promise.reject(new Error('Number of guests must be between 1 and 4.'))
    }
    return true
  })
]
