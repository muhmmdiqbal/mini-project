import React, {Component, Fragment } from 'react'
import {  Container, } from 'react-bootstrap'
import Synopsis from './../components/Synopsis/Synopsis'
import axios from 'axios'

class Overview extends Component {
    state = {
        synopsis: []
    }
    
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts/1')
        
        // .then((response) => response.json())
        // .then(json => {
        //     this.setState({
        //         synopsis: json
        //     })
        // })
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        
        .then((result) => {
            // console.log(result.data);
            this.setState({
                synopsis: result.data
            })
            
        })
        
        
    }
    render() {
    return (
        <Fragment>
       <div> 
       
        <Container >
        
        {/* {
            this.state.synopsis.map(synopsis => { */}
             <Synopsis key={this.state.synopsis.id} title={this.state.synopsis.title} body={this.state.synopsis.body}/>
        
            
        
        
        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>       
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p> */}
        <br/>
        <h4><hr/></h4>
        
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
        </Fragment>
    )
}}

export default Overview