import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.get('/', (req, res, next) => {
  res.send('Babel imports working');
});