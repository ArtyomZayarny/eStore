import asyncHandler from 'express-async-handler'
import Product from '../../front/src/components/Product.js'
import Order from '../models/orderModel.js'

// @desc   Create new order
// @route  POST /api/orders
// @access Private

const addOrdeItems = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})
