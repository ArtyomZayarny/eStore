import React from 'react'
import { NavDropdown } from "react-bootstrap";

export default function Profilelink(props) {

  const logoutHandler = ({ name }) => {
    dispatch(logout())
  }
  return (
    <NavDropdown title={name} id='username'>
      <LinkContainer to='/profile'>
        <NavDropdown.Item>Profile</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Item onClick={logoutHandler}>
        Logout
      </NavDropdown.Item>
    </NavDropdown>)
  )
}
