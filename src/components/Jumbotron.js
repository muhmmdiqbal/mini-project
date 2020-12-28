import React from 'react'
import {Jumbotron, Container, Row, Col, Button } from 'react-bootstrap'
// import '../App.css';

const jumbotron = () => {
    
    return (
        <div>
        <Jumbotron fluid>
        {/* <Jumbotron.item> */}
        {/* <img 
          src='https://webneel.com/daily/sites/default/files/images/daily/08-2018/3-india-movie-poster-design-bollywood-jodhaakbar.jpg'
          
        /> */}
        {/* </Jumbotron.item>  */}

            <Container >
                <h1 className="jumbotron-text">This is Film</h1>
                <Row>
                <Col xs lg="7">   
                    <p className="jumbotron-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu
                    </p>
                    </Col> 
                </Row>
                    <p>
                        <Button active tag="a" href="https://www.youtube.com/watch?v=-SdQ35LUIwk&list=PLU4DS8KR-LJ03qEsHn9zV4qdhcWtusBqb&index=11" action variant="outline-danger">Watch Trailer</Button> {' '}
                        <Button variant="outline-danger">Add to Watchlist</Button>
                    </p>
            </Container>
        </Jumbotron> 
        {/* <Carousel>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src='https://wualumni.org/image/web-banner---Mary-Poppins.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel> */}
        </div>
    )}
    

export default jumbotron
