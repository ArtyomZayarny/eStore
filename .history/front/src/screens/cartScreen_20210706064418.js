import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart } from '../actions/cartActions';


export default function CartScreen({ match, location, history }) {
  const productId = match.params.id
  const query = location.search;
  const qty = query ? Number(query.split('=')[1]) : 1
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return (
    <>
      <Col>
      </Col>
      <h1>Cart</h1>
    </>
  )
}
