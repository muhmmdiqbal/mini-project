import React from 'react'
import { Container, Media, Form } from 'react-bootstrap'

const review = () => {
    return ( 
    <div>
        <Container>
        <Form>
  
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Leave a Review" />
        </Form.Group>
        </Form>
        <Media>
        <Media left href="#">
            <img object data-src="https://i.picsum.photos/id/1062/64/64.jpg?hmac=k3r32Vx85v_GQogSso6jY4R9f5L2HHq-9FegviZGF1A" alt="" />
        </Media>
        <Media body>
            <Media heading>
            <strong>Media heading</strong>
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
        </Media>
        
        <br />
        </Container>
    </div>
    )
}

export default review