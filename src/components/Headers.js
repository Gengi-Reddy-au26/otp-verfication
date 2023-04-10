import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className=" text-light text-decoration-none">WeShare.Pro</NavLink>
          <Nav className="">
            <NavLink to="/register" className="mt-3 mx-2 text-light text-decoration-none">LogOut</NavLink>
            <img src="https://weshare.pro/wp-content/uploads/2022/09/We-Share-Logo-Green.png" style={{width:50}} alt="" />
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers