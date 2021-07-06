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
                {cartItems.map(item => (
                  <ListGroup.Item key={item.product}>
                    <Col md={2}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fluidrounded
                      />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={2}>{item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e) => {
                          dispatch(addToCart(item.product, Number(e.target.value)))
                        }}>
                        {[...Array(item.countInStock).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button type="button" variant="light"
                        onClick={() => { removeFromCartHandler(item.product) }}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </ListGroup.Item>
                ))}
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
