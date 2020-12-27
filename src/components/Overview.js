import React, {Component, Fragment } from 'react'
import {  Container, } from 'react-bootstrap'
import Synopsis from '../components/Synopsis';
import Movieinfo from '../components/Movieinfo';
import axios from 'axios'

class Overview extends Component {
    state = {
        synopsis: [],
        movieinfo: []
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
            this.setState({
                movieinfo: result.data
            })
        })
        
        
        
    }
    render() {
    return (
        <Fragment>
       <div> 
       
        <Container >
        <h4>Synopsis<hr/></h4>
       
        <Synopsis key={this.state.synopsis.id} title={this.state.synopsis.title}/>
            
         <br/>
        <h4>Movie Info<hr/></h4>
        <Movieinfo  body={this.state.movieinfo.body}/>

        </Container>
        
        </div>
        </Fragment>
    )
}}

export default Overview