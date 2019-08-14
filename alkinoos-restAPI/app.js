import express from 'express';
import bodyParser from 'body-parser';
import mongoConnect from './model/database';
const app = express();

mongoConnect(client => {
  console.log(client);
  app.listen(3000);
})

// app.get('/', (req, res, next) => {
//   res.send('Babel imports working');
// });