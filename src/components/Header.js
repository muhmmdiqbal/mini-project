import React from 'react'
import { Col, Container, Form, FormControl, Image,  Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import FormModal from './FormModal';

const Header = () => {
  const src = 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png'

  return (
    <>
      <Navbar bg='light' sticky='top' expand='lg'>
        <Container>
          <NavbarBrand href='/'><h1 className='text-dark'>MilanTV</h1></NavbarBrand>
          
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Col>
              <Form inline>
                  <FormControl type="text" placeholder="Search" className="mx-auto w-75" />
              </Form>
            </Col>

            <Nav>
              <NavDropdown title={<Image className='rounded-circle' width='30' src={src} alt='profile'/>} id="basic-nav-dropdown">
                <NavDropdown.Item className='font-weight-bold'>Full Name</NavDropdown.Item>
                <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                <NavDropdown.Item>Sign out</NavDropdown.Item>
              </NavDropdown>

              <FormModal />
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header