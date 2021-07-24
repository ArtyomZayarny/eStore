import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

export default function ShippingScreen({ history }) {

  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')

  const submitHandler = () => {

  }
  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>

      </Form>
    </FormContainer>
  )
}
