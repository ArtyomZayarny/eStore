import express from 'express'
const router = express.Router()
import protec from '../middleware/authMiddleware.js'
import { authUser, getUserProfile } from '../controllers/userController.js'

router.post('/login', authUser)
router.route('/profile').get(protec, getUserProfile)


export default router
