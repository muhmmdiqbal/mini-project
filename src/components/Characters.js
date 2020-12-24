import React from 'react'
import { CardDeck, Card, Container} from 'react-bootstrap'

const characters = () => {
    return ( 
        <div>
            <Container>
            
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    
                    </Card.Body>
                    
                </Card>
                </CardDeck>
            </Container>
            <br />
        </div>
    )
}

export default characters