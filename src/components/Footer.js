import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div style={{background: 'black', color: '#ffffff'}}>
      <Container>
        <Row className='pt-5'>
          <Col md='6'>
            <h1>MilanTV</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          </Col>

          <Col md='2'>
            <ul className='list-unstyled'>
              <li>Tentang Kami</li>
              <li>Blog</li>
              <li>Layanan</li>
              <li>Karir</li>
              <li>Pusat Media</li>
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
            <p>Copyright © 2000-202 MilanTV.  All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer