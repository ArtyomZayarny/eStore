import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export default function Formcontainer({ children }) {


  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}
