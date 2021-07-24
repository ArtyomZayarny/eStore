import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import Checoutsteps from '../components/ChecoutSteps'
import FormContainer from '../components/FormContainer'

export default function PaymentScreen({ history }) {

  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal ')


  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }
  return (
    <FormContainer>
      <Checoutsteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
        </Form.Group>
        <Col>
          <Form.Check
            type='radio'
            name='paymentMethod'
            label='PayPal or Creadit Card'
            value='PayPal'
            id='PayPal'
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
          </Form.Check>
          <Form.Check
            type='radio'
            label='Stripe'
            name='paymentMethod'
            id='Stripe'
            value='Stripe'
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
          </Form.Check>
        </Col>

        <Button type='submit' variant='primary'>Continue</Button>
      </Form>
    </FormContainer>
  )
}
