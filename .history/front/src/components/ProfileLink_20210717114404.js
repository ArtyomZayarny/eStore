import React from 'react'

export default function Profilelink(props) {


  return (
    <NavDropdown title={userInfo.name} id='username'>
      <LinkContainer to='/profile'>
        <NavDropdown.Item>Profile</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Item onClick={logoutHandler}>
        Logout
      </NavDropdown.Item>
    </NavDropdown>)
  )
}
