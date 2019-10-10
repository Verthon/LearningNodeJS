import { Router } from 'express'
import { sendReservation } from '../controllers/bookTable'
const router = Router()

router.post('/', sendReservation)

export default router
