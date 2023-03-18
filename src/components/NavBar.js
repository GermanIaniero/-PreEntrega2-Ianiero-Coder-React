import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
//import { Link } from 'react-router-dom'
import CartWidget from "./CartWidget.js"


function NavBar(){
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Isa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Carrito</Nav.Link>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>  
    )   
}

export default NavBar