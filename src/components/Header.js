import React from 'react'
import { Col, Container, Form, FormControl, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg='light'>
      <Container>
        <Col md="3">
          <i class="fab fa-youtube"></i>
          <NavbarBrand><h1 className='text-dark'>MilanTV</h1></NavbarBrand>
        </Col>

        <Col md="7">
          <Form inline>
            <FormControl type="text" placeholder="Search" size='lg' className='w-100' />
          </Form>
        </Col>
        
        <Col md="2">
          <NavLink href='#'><h4 className='text-dark'>Sign in</h4></NavLink>
        </Col>
      </Container>
    </Navbar>
  )
}

export default Header