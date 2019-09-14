const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const server = express()

const errorController = require('./controllers/error')

// Routes
const homeRoute = require('./routes')
const speakersRoute = require('./routes/speakers')
const pricingRoute = require('./routes/pricing')
const ticketRoute = require('./routes/buy-ticket')
const contactRoute = require('./routes/contact')
const scheduleRoute = require('./routes/schedule')
const newsRoute = require('./routes/news')
const checkoutRoute = require('./routes/checkout')
const aboutRoute = require('./routes/about')

const PORT = 3000

server.use(express.static('public'))

server.set('view engine', 'ejs')
server.set('views', 'views')

server.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}))

server.use(homeRoute)
server.use(speakersRoute)
server.use(pricingRoute)
server.use(ticketRoute)
server.use(contactRoute)
server.use(scheduleRoute)
server.use(newsRoute)
server.use(checkoutRoute)
server.use(aboutRoute)

server.use(errorController.get404)

mongoose
  .connect(
    'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_CLUSTER + '?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => server.listen(PORT))
  .catch(err => console.log(err))

module.export = server
