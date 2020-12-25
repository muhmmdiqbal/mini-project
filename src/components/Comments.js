import React from 'react'
import { Container, Media, Form, Button } from 'react-bootstrap'
import Star from '../components/Star'
import '../App.css'; 

const review = (props) => {
    return ( 
    <div>
        <Container>
        
            
        <Form>
        
        <Form.Group controlId="exampleForm.ControlTextarea1">
                     
            
            <Media>
            <img
                width={64}
                height={64}
                className="mr-3"
                src="https://bulma.io/images/placeholders/64x64.png"
                alt="Generic placeholder"
            />  
            <Media.Body>
            <h5>Reviewer</h5>
            <Star />  <br/> 
            
            <Form.Control size="lg" as="textarea" rows={3} placeholder="Leave a Review" /><br/>
            <Button as="input" type="submit" value="Submit" className="submit"/>
            </Media.Body>
            
            </Media>
        </Form.Group>

        </Form><br/>
            <Media>
            <img
                width={64}
                height={64}
                className="mr-3"
                src="https://bulma.io/images/placeholders/64x64.png"
                alt="Generic placeholder"
            />
            <Media.Body>
                <h5 className="name">{props.name}</h5>
                <p className="body">{props.body}</p>
            </Media.Body>
            </Media><br/>
            
            <Media>
                
            <img
                width={64}
                height={64}
                className="mr-3"
                src="https://bulma.io/images/placeholders/64x64.png"
                alt="Generic placeholder"
            />
            <Media.Body>
                <h5>Reviewer</h5>
                <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
                </p>
            </Media.Body>
            </Media><br/>
            
            
        <br />
        </Container>
    </div>
    )
}

export default review
