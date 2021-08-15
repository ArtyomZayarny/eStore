import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addOrdeItems, getOrderById, updateOrderToPaid, getMyOrders } from '../controllers/orderContoller.js'

const router = express.Router()

router.route('/').post(protect, addOrdeItems)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)



export default router
