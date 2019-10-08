import { Router } from 'express'
import { getMenu } from '../controllers/menu'
export const router = Router()

router.get('/', getMenu)

export default router
