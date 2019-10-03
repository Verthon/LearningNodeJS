import { Router } from 'express';
import bodyParser from 'body-parser';
export const router = Router();

router.get('/menu', (req, res) => {
  res.status(200).res.json({ request: 'GET request for menu' });
});

export default router;