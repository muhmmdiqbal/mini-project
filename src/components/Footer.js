import React from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='bg-dark text-light'>
      <Container>
        <Row className='pt-5'>
          <Col md='6'>
            <h1>MilanTV</h1>
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


            <p>Social Media</p>
          </Col>
        </Row>

        <hr />

        <Row className='pb-3'>
          <Col className='text-center'>
            <p>Copyright © 2000-2020 MilanTV.  All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer