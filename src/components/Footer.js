import React from 'react'
import { Col, Container, Image, NavLink, Row } from 'react-bootstrap'
import apple from './assets/apple store 1.png'
import facebook from './assets/face 1.png'
import google from './assets/google play 1.png'
import instagram from './assets/instagram 1.png'
import pinterest from './assets/pinterest 1.png'

const Footer = () => {
  return (
    <div className='bg-header-footer text-light'>
      <Container>
        <Row className='pt-5'>
          <Col md='6'>
            <h1>UCMovie</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
          </Col>


          <Col md='2'>
            <ul className='list-unstyled'>
              <NavLink className='text-light'><li>Tentang Kami</li></NavLink>
              <NavLink className='text-light'><li>Blog</li></NavLink>
              <NavLink className='text-light'><li>Layanan</li></NavLink>
              <NavLink className='text-light'><li>Karir</li></NavLink>
              <NavLink className='text-light'><li>Pusat Media</li></NavLink>
            </ul>
          </Col>

          <Col md='4'>
            <p>Download</p>
            <Image src={google} className='download' alt='download from google play store' />
            <Image src={apple} className='download' alt='download from apple store' />

            <p>Social Media</p>
            <Image src={facebook} className='page' alt='facebook page' />
            <Image src={instagram} className='page' alt='instagram page' />
            <Image src={pinterest} className='page' alt='pinterest page' />
          </Col>
        </Row>

        <hr />

        <Row className='pb-3'>
          <Col className='text-center'>
            <p>Copyright © 2020 UCMovie.  All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer