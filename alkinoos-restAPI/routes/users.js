import express from 'express';
import bodyParser from 'body-parser';
const user = express();

user.get('/', (req, res) => {
  return res.send('GET request for user');
});

user.post('/', (req, res) => {
  return res.send('POST request for user');
});

user.put('/:userId', (req, res) => {
  return res.send('Update user based on its id');
});

user.delete('/:userId', (req, res) => {
  return res.send('Delete user based on its id');
});