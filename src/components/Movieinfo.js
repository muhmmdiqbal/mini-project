import React from 'react'
// import { Container } from 'react-bootstrap'

const movieinfo = (props) => {
    return (
        <div> 
       
        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>       
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p> */}
        
        {/* <h4>Movie Info<hr/></h4> */}
        <p className="body"><strong>Released Date:</strong> {props.body}</p>
        <p className="body"><strong>Director:</strong> {props.body}</p>
        <p className="body"><strong>Featured Song:</strong> {props.body}</p>
        <p className="body"><strong>Budget:</strong> {props.body}</p>
        <br/>
        
        </div> 
    )
}

export default movieinfo