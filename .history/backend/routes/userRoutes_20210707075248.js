import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userController.js'

router.route('/login').get(getProducts)


export default router