import React from 'react'
import { Container } from 'react-bootstrap'

const synopsis = (props) => {
    return (
        <div> 
       
        <Container >
        <h4>Synopsis<hr/></h4>
        <p className="title">{props.title}</p>
        
        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>       
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p> */}
        <br/>
        <h4>Movie Info<hr/></h4>
        <p className="body">{props.body}</p>
        
        </Container>
        </div> 
    )
}

export default synopsis