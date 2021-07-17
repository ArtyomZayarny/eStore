import React from 'react'
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from 'react-redux';

export default function Profilelink({ userName }) {

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <NavDropdown title={userName} id='username'>
      <LinkContainer to='/profile'>
        <NavDropdown.Item>Profile</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Item onClick={logoutHandler}>
        Logout
      </NavDropdown.Item>
    </NavDropdown>
  )

}
