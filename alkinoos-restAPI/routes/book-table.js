import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.json({ request: 'GET request for book table' })
})

router.post('/', (req, res) => {
  res.json({ request: 'POST request for router' })
})

export default router
