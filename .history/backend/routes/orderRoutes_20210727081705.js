import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addOrdeItems, getOrderById, updateOrderToPaid } from '../controllers/orderContoller.js'

const router = express.Router()

router.route('/').post(protect, addOrdeItems)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)



export default router
