import React from 'react'
import { Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Checkoutsteps from '../components/CheckoutSteps'
import Message from '../components/message'

export default function PlaceOrderScreen(props) {

  const cart = useSelector(state => state.cart)

  return (
    <>
      <Checkoutsteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode}{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroupItem>
          </ListGroup>

          <ListGroupItem>
            <h2>Payment Method</h2>
            <strong>Method: </strong>
            {cart.paymentMethod}
          </ListGroupItem>

          <ListGroupItem>
            <h2>Order Items</h2>
            {cart.cartItems.length === 0
              ? <Message>Your cart is empty</Message>
              : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroupItem key={index}>
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
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
          </ListGroupItem>

        </Col>
      </Row>

    </>
  )
}
