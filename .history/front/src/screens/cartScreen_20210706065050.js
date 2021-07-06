import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart } from '../actions/cartActions';
import Message from '../components/message'


export default function CartScreen({ match, location, history }) {
  const productId = match.params.id
  const query = location.search;
  const qty = query ? Number(query.split('=')[1]) : 1
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;
  console.log(cartItems)
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return (
    <>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {
          cartItems.length === 0
            ? (<Message>Your cart is empty <Link to='/'>Go back</Link></Message>)
            : (
              <ListGroup variant='flush'>

              </ListGroup>
            )
        }
      </Col>
      <Col md={2}>
      </Col>
      <Col md={2}>
      </Col>
    </>
  )
}
