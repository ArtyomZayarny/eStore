import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addOrdeItems, getOrderById } from '../controllers/orderContoller.js'

const router = express.Router()

router.route('/').post(protect, addOrdeItems)
router.route('/:id').get(protect, getOrderById)



export default router
