/* eslint-disable react/no-unused-state */
import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import contactInfo from '../contactInfo'
import { splitDate, splitTime, formatDate, convertToDate } from '../helpers'
import Modal from './Modal'
import about from '../images/brooke-lark-about.jpg'

class ReviewBooking extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      show: false, 
      booking: {},
      error: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { date, people, email, name } = this.props.booking
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        name: name,
        date: date,
        guests: people
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost:8070/api/book-table', options)
      .then(res => {
        if(!res.ok){
          throw res
        }
        res.json()
      })
      .then(res => {
        console.log('Res inside of 2nd then', res)
        localStorage.removeItem('booking')
        //this.setState({ error: res })
      })
      .catch(err => {
        console.log(
          'Error occured with sending POST req: ', err
        )
      })
  }

  render () {
    const { street, number, code, city, province } = contactInfo.info.location
    const { name, people, date } = this.props.booking
    const { show } = this.state

    const showModal = () => {
      this.setState({ show: true })
    }

    return (
      <Fragment>
        <Modal show={show} />
        <h1 className="heading review-booking__title">
          <Link to="/">{contactInfo.name}</Link>
        </h1>
        <article className="review-booking fade-in">
          <img src={about} alt="" />
          <p className="review-booking__client">
            <strong className="review-booking__name">{name}</strong> reservation
          </p>
          <div className="row review-booking__container">
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">{people}</p>
              <p className="review-booking__description">Guests</p>
            </div>
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">
                {splitDate(formatDate(convertToDate(date)))}
              </p>
              <p className="review-booking__description">Date</p>
            </div>
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">
                {splitTime(formatDate(convertToDate(date)))}
              </p>
              <p className="review-booking__description">Time</p>
            </div>
          </div>
          <p className="review-booking__address">
            {street} {number}
          </p>
          <p className="review-booking__address">
            {city}, {province}, {code}{' '}
          </p>
          <form onSubmit={this.handleSubmit} className="review-booking__footer">
            <button className="btn btn--light" type="button">
              <Link to="/book-table">Edit booking</Link>
            </button>

            <button className="btn btn--dark" onClick={showModal} type="submit">
              Confirm Booking
            </button>
          </form>
        </article>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return state
}

ReviewBooking.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string,
    search: propTypes.string
  }),
  name: propTypes.string,
  people: propTypes.number,
  date: propTypes.instanceOf(Date)
}

ReviewBooking.defaultProps = {
  location: propTypes.shape({
    pathname: propTypes.string,
    search: propTypes.string
  }),
  name: 'Jane Doe',
  people: 3,
  date: new Date()
}

export default connect(mapStateToProps)(ReviewBooking)
