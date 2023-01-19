import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand>
          <Link to="/">Note Zipper</Link>  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form inline>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            </Form>
          </Nav>  
           
          
          <Nav> 
            <Nav.Link>
              <Link to="/mynotes">
                My Notes
              </Link>
            </Nav.Link>
            <NavDropdown title="Augustine Opoku-Kesse" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                My profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header