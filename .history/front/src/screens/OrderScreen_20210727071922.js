import React, { useEffect } from 'react'
import { Card, Col, Image, ListGroup, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getOrderDetails } from '../actions/orderActions'
import Checkoutsteps from '../components/CheckoutSteps'
import Message from '../components/message'

export default function OrderScreen({ match }) {

  const orderId = match.params.id;
  const dispatch = useDispatch();

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  //Calculate price
  order.itemsPrice = addDecimals(order.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty, 0))

  const orderDetails = useSelector(state => state.orderDetails)

  const { order, loading, error } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetails(orderId))
  }, [])

  return loading
    ? <Loader />
    : error
      ? <Message variant='danger'>{error}</Message>
      : <>
        <h1>Order {order._id}</h1>
        <Row>
          <Col md={8}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Shipping</h2>
                <p>
                  <strong>Address:</strong>
                  {order.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                  {order.shippingAddress.postalCode}{' '}
                  {order.shippingAddress.country}
                </p>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {order.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.cartItems.length === 0
                ? <Message>Order is empty</Message>
                : (
                  <ListGroup variant='flush'>
                    {order.cartItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image src={item.image} alt={item.name}
                              fluid rounded />
                          </Col>
                          <Col>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4}>
                            {item.qty} x ${item.price} = ${item.price * item.qty}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
            </ListGroup.Item>

          </Col>
          <Col md={4}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <h2>Order summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>${order.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>${order.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>


                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>${order.taxPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>${order.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  {error && <Message variant='danger'>{error}</Message>}
                </ListGroup.Item>

                <ListGroup.Item>

                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
  )
}
