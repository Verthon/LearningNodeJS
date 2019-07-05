import express from 'express';
import bodyParser from 'body-parser';
const order = express();

order.get('/', (req, res) => {
  return res.send('GET request for order');
});

order.get('/:orderId', (req, res) => {
  return res.send('')
});

order.post('/', (req, res) => {
  return res.send('POST request for order');
});

order.put('/:orderId', (req, res) => {
  return res.send('Update order based on its id');
});

order.delete('/:orderId', (req, res) => {
  return res.send('Delete order based on its id');
});