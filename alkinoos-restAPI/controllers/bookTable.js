import { Booking } from '../model/booking'
import { validationResult } from 'express-validator'

export const saveBooking = (req, res) => {
  res.type('application/json')
  const data = {
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    guests: req.body.guests,
    errors: validationResult(req)
  }

  const { name, email, date, guests, errors } = data

  if (!errors.isEmpty()) {
    //console.log(errors)
    return res.status(422).json({
      errors: errors.array()
    })
  }

  const booking = new Booking({
    name: name,
    email: email,
    date: date,
    guests: guests
  })

  booking
    .save()
    .then(res => console.log('Your booking was added', res))
    .catch(err => console.log('Error occured: ', err))
}
