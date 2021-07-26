import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import addOrdeItems from '../controllers/orderController.js'

const router = express.Router()

router.route('/').post(protect, addOrdeItems)



export default router
