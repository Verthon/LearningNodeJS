import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import routes from './routes'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

const MONGO_URI =
  'mongodb+srv://' +
  process.env.DB_USER +
  ':' +
  process.env.DB_PASS +
  '@cluster0-ft0n5.mongodb.net/admin?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
  res.send('Babel imports working')
})

app.use('/menu', routes.menu)
app.use('/book-table', routes.bookTable)
app.use('/orders', routes.orders)

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Resource not found.' })
})

app.listen(3000, console.log('Listening on port 3000'))
