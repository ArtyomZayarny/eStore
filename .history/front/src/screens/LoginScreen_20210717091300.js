import React from 'react'
import { Form, Row, Column, Col, Button } from 'react-bootstrap'
import Message from '../components/message'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

export default function Loginscreen(props) {
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
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer ?
          <Link
            to={redirect
              ? `/redirect?/redirect=${redirect}`
              : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}
