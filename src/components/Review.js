// import React, {Component, Fragment } from 'react'
// import {  Container, } from 'react-bootstrap'
// import Comments from '../components/Comments'
// import axios from 'axios'

// class Review extends Component {
//     state = {
//         comments: []
//     }
    
//     componentDidMount(){
//         // fetch('https://jsonplaceholder.typicode.com/posts/1')
        
//         // .then((response) => response.json())
//         // .then(json => {
//         //     this.setState({
//         //         synopsis: json
//         //     })
//         // })
//         axios.get('https://jsonplaceholder.typicode.com/comments/1')
        
//         .then((result) => {
//             // console.log(result.data);
//             this.setState({
//                 comments: result.data
//             })
            
//         })
        
        
//     }
//     render() {
//     return (
//         <Fragment>
//        <div> 
       
//         <Container >
        
//               <Comments key={this.state.comments.id} name={this.state.comments.name} body={this.state.comments.body}/>
           
//         </Container>
        
//         </div>
//         </Fragment>
//     )
// }}

// export default Review

import React from 'react'

// bring Provider from react-redux, it's the bridge for connecting react to redux
import { Provider } from 'react-redux'

// Bring the redux store too
import store from '../Redux/store'

// Components
import Todo from '../components/Todo'


const Review = () => {
  return (
    // Register your redux Provider here
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}
export default Review
