import React, {Component, Fragment } from 'react'
import {  Container, } from 'react-bootstrap'
import Synopsis from '../components/Synopsis';

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
        <h4>Synopsis<hr/></h4>
        {
            this.state.post.map(post => {
                return <Synopsis title={Synopsis.title} desc={Synopsis.body}/>
            })
        }
        
        {/* {
            this.state.synopsis.map(synopsis => { */}
             <Synopsis key={this.state.synopsis.id} title={this.state.synopsis.title} body={this.state.synopsis.body}/>
        
         <br/>
        <h4><hr/></h4>
        </Container>
        
        </div>
        </Fragment>
    )
}}

export default Overview