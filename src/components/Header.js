import React, { useState } from 'react'
import { Col, Container, Form, FormControl, Image,  Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import FormModal from './FormModal'
import logo from './assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Header = (props) => {
  const icon = <FontAwesomeIcon icon={faUserCircle} size='2x' />
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [searchData, setSearchData] = useState({
    
  })

  let search = ''

  const handleSearch = e => {
    e.preventDefault()
    const data = {
      movieTitle: search
    }

    axios.post(`http://13.212.139.34:3000/home/searchBar?page=1`, data)
      .then(
        res => {
          console.log(res)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
  }

  return (
    <>
      <Navbar className='bg-header-footer navbar-dark' sticky='top' expand='lg'>
        <Container>
          <NavbarBrand href='/'><Image className='logo' src={logo} alt='logo app' /></NavbarBrand>
          
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Col>
              <Form inline onSubmit={handleSearch}>
                  <FormControl type="text" placeholder="Enter movie title" className="mx-auto w-75" onChange={e => search = e.target.value} />
              </Form>
            </Col>

            <Nav className='text-center'>
              {

              }
                <NavDropdown title={icon} id="basic-nav-dropdown">
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