import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import routes from './routes';
const app = express();

const uri =
  "mongodb+srv://user:admin@cluster0-ft0n5.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true })
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
})
app.use('/menu', routes.menu)
app.use('/book-table', routes.bookTable)
app.use('/orders', routes.orders)

app.get('/', (req, res, next) => {
  res.send('Babel imports working');
});



app.listen(3000, console.log('Listening on port 3000'))