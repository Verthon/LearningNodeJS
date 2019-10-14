import { Router } from 'express'
import { saveBooking } from '../controllers/bookTable'
import { validateBooking } from '../controllers/validator'
const router = Router()

router.post('/', validateBooking, saveBooking)

export default router
