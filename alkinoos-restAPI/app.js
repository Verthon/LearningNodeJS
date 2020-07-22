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

app.use(helmet())

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ft0n5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(app.listen(8070, console.log('Listening on port 8070')))
  .catch(error => console.log(error))

app.use(express.static("build"))

app.use('/api/menu', routes.menu)
app.use('/api/book-table', routes.bookTable)

app.use(express.static("client/build"))

// app.use((req, res) => {
//   res.status(404).json({ success: false, message: 'Resource not found.' })
//   res.status(400).json({ success: false, message: '400 Bad request' })
// })
