import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc   Create new order
// @route  POST /api/orders
// @access Private

const addOrdeItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body
  console.log('req.body', req.body)
  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    })

    const createdOrder = await order.save();
    res.status(201).json(createdOrder)
  }
})

export { addOrdeItems }
