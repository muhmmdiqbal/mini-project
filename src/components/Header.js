import React, { useState } from 'react'
import { Col, Container, Form, FormControl, Image,  Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import FormModal from './FormModal'
import logo from './assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const icon = <FontAwesomeIcon icon={faUserCircle} size='2x' />
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggedIn = () => {
    setIsLoggedIn(true)
  }



  return (
    <>
      <Navbar className='bg-header-footer navbar-dark' sticky='top' expand='lg'>
        <Container>
          <NavbarBrand href='/'><Image className='logo' src={logo} alt='logo app' /></NavbarBrand>
          
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Col>
              <Form inline>
                  <FormControl type="text" placeholder="Search" className="mx-auto w-75" />
              </Form>
            </Col>

            <Nav>
              { isLoggedIn
                ? <NavDropdown title={icon} id="basic-nav-dropdown">
                  <NavDropdown.Item className='font-weight-bold'>Full Name</NavDropdown.Item>
                  <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                  <NavDropdown.Item>Sign out</NavDropdown.Item>
                </NavDropdown>
                : <FormModal />
              }
            
              {/* <NavDropdown title={icon} id="basic-nav-dropdown">
                <NavDropdown.Item className='font-weight-bold'>Full Name</NavDropdown.Item>
                <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                <NavDropdown.Item>Sign out</NavDropdown.Item>
              </NavDropdown>

              <FormModal /> */}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header