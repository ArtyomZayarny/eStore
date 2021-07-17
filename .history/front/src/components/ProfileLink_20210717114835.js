import React from 'react'
import { LinkContainer } from "react-router-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from 'react-redux';

export default function Profilelink({ userName }) {
  const dispatch = useDispatch();

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
