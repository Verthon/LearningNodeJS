const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
require('dotenv').config()

const MONGO_URI =
  'mongodb+srv://' +
  process.env.DB_USER +
  ':' +
  process.env.DB_PASS +
  '@' +
  process.env.DB_CLUSTER +
  '?retryWrites=true&w=majority'
const server = express()
const store = new MongoDBStore({
  uri: MONGO_URI,
  collection: 'sessions'
})

const errorController = require('./controllers/error')

// Routes
const homeRoute = require('./routes')
const speakersRoute = require('./routes/speakers')
const pricingRoute = require('./routes/pricing')
const ticketRoute = require('./routes/buy-ticket')
const contactRoute = require('./routes/contact')
const scheduleRoute = require('./routes/schedule')
const checkoutRoute = require('./routes/checkout')
const aboutRoute = require('./routes/about')

const PORT = 3000

server.use(express.static('public'))
server.use(
  session({
    secret: 'admin',
    resave: false,
    saveUninitialized: false,
    store: store
  })
)

server.set('view engine', 'ejs')
server.set('views', 'views')

server.use(
  bodyParser.urlencoded({
    extended: true
  })
)

server.use(homeRoute)
server.use(speakersRoute)
// server.use(pricingRoute)
server.use(ticketRoute)
server.use(contactRoute)
server.use(scheduleRoute)
//server.use(checkoutRoute)
server.use(aboutRoute)

server.use(errorController.get404)

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => server.listen(PORT))
  .catch(err => console.log(err))

module.export = server
