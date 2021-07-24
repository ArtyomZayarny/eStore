import React from 'react'
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Checkoutsteps from '../components/CheckoutSteps'

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
        </Col>
      </Row>

    </>
  )
}
