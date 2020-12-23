import React from 'react'
import {  Container, } from 'react-bootstrap'
import synopsis from '.Synopsis/synopsis'

const overview = () => {
    
    return (
       <div> 
       
        <Container >
        <h4>Synopsis<hr/></h4>
        {
            this.state.post.map(post => {
                return <Synopsis title={synopsis.title} desc={synopsis.body}/>
            })
        }
        
        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>       
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p> */}
        <br/>
        <h4>Movie Info<hr/></h4>

        {/* <p><strong>Release date: </strong>January 5, 1998</p>
        <p><strong>Director: </strong>John Doe</p>
        <p><strong>Featured Song: </strong>Pegasus fantasi</p>
        <p><strong>Budget: </strong>200 million USD</p>
        <p><strong>Release date: </strong>January 5, 1998</p>
        <p><strong>Director: </strong>John Doe</p>
        <p><strong>Featured Song: </strong>Pegasus fantasi</p>
        <p><strong>Budget: </strong>200 million USD</p> */}
        </Container>
        </div>
    )
}

export default overview