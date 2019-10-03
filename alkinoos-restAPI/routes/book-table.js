import { Router } from 'express';
import bodyParser from 'body-parser';
const router = Router();

router.get('/book-table', (req, res) => {
  res.status(200).res.json({ request: 'GET request for book table' });
});

router.post('/book-table', (req, res) => {
  res.json({ request: 'POST request for router' });
});

export default router;