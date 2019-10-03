import {Router} from 'express';
import bodyParser from 'body-parser';
const router = Router();

router.get('/orders', (req, res) => {
  return res.status(200).res.json({ request: 'GET request for router' });
});

router.get('/:routerId', (req, res) => {
  return res.send('')
});

router.put('/:orderId', (req, res) => {
  return res.send('Update router based on its id');
});

router.delete('/:orderId', (req, res) => {
  return res.send('Delete router based on its id');
});

export default router