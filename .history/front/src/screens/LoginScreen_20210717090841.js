import React from 'react'
import { Form, Row, Column, Button } from 'react-bootstrap'
import Message from '../components/message'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

export function Loginscreen(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const submitHandler = () => {

  }

  return (
    <FormContainer>
      <h1>Sign in</h1>
      <Form onSubmit={submitHandler}>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>

        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
      </Form>

    </FormContainer>
  )
}
