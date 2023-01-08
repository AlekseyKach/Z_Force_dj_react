import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from 'react-router-bootstrap'
import { Nav, Navbar,Container, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'


const Header = () => {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin


  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >Zvika Force</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <LinkContainer to="/cart">
              <Nav.Link > <i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
              </LinkContainer>
              
              {userInfo ? (
                <NavDropdown title={userInfo.name} id = 'username'>
                  <LinkContainer to='/' 
                </NavDropdown>
              )}

              <LinkContainer to ="/login">
                <Nav.Link >  <i className="fas fa-user"></i>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
