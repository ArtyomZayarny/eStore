import express from 'express'
const router = express.Router()
import locked from '../middleware/authMiddleware.js'
import { authUser, getUserProfile } from '../controllers/userController.js'

router.post('/login', authUser)
router.route('/profile').get(locked, getUserProfile)


export default router
