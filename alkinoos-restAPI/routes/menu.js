import { Router } from 'express'
export const router = Router()

router.get('/', (req, res) => {
  res.json({ request: 'GET request for menu' })
})

export default router
