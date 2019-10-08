import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import routes from './routes'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
dotenv.config()
const app = express()

const MONGO_URI =
  'mongodb+srv://' +
  process.env.DB_USER +
  ':' +
  process.env.DB_PASS +
  '@cluster0-ft0n5.mongodb.net/app?retryWrites=true&w=majority'

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(app.listen(8070, console.log('Listening on port 8070')))
  .catch(error => console.log(error))
app.use(bodyParser.json())
//app.use(helmet())

app.use(cors())

app.use(express.static(path.join(__dirname, '/static')))
app.use(express.static(path.resolve('client', 'build', 'index.html')))

app.use('/api/menu', routes.menu)
app.use('/api/book-table', routes.bookTable)

app.get('*', (req, res, next) => {
  res.sendFile(path.resolve('client', 'build', 'index.html'))
})

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Resource not found.' })
})
