import { Reservation } from '../model/reservation'

export const sendReservation = (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    guests: req.body.guests
  }

  console.log(req.body)

  const { name, email, date, guests } = data

  const reservation = new Reservation({
    name: name,
    email: email,
    date: date,
    guests: guests
  })

  reservation
    .save()
    .then(res => console.log('Your reservation was added', res))
    .catch(err => console.log('Error occured: ', err))
    
}
