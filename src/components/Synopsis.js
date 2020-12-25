import React from 'react'
import { Container } from 'react-bootstrap'

const synopsis = (props) => {
    return (
        <div> 
       
        <Container >
        <h4>Synopsis<hr/></h4>
        <p className="title">{props.title}</p>
         <br/>
        <h4>Movie Info<hr/></h4>
        <p className="body">{props.body}</p>
        
        </Container>
        </div> 
    )
}

export default synopsis