import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'


export default function CartScreen({ match, location, history }) {
  const productId = match.params.id
  const query = location.search;
  console.log('query', query)
  const dispatch = useDispatch()


  useEffect(() => {

  }, [])

  return (
    <>
      <Col>
      </Col>
      <h1>Cart</h1>
    </>
  )
}
