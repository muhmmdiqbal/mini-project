import React, { Component, Fragment } from 'react'
import { Container, Media, Form, Button } from 'react-bootstrap'
import Star from '../components/Star'
// import Comments from '../components/Comments'
// import CommentsForm from '../components/Comment-form'


import '../App.css'; 
import axios from 'axios'


class review extends Component {
    constructor(){
        super()
        this.state = {
            results: [],
          form: {
            _id: 1,
            Nama: 'Aing',
            Rating: 3,
            Review: '',
            id: '',
          }
        }
    }


    componentDidMount(){
        axios.get('http://13.212.139.34:3000/user/profile/reviews/tim@example.com?page=1')
    .then(res => { console.log(res, 'TS4')
        const results = res.data.results
        this.setState({results});
    })
    .catch(err => console.log('parsing data is failed, err'))

    }

    postDataToAPI = () => {
        axios.post('http://13.212.139.34:3000/user/review/timc@example.com', this.state.form)
        .then((res) => {
            console.log(res);
        })
    .catch(err => console.log('parsing data is failed, err'))

    }

    handleFormChange = (event) => {
        let formNew = {...this.state.form};
        let timestamp = new Date().getTime();
        formNew['_id','id'] = timestamp;
        formNew[event.target.name] = event.target.value;
        this.setState({
            form: formNew
        }, () => {
            console.log('value obj formNew: ', this.state.form)
        })
    }
    handleSubmit = () => {
        this.postDataToAPI()
    }
    
    render(){
        const{results} = this.state
        console.log(results, 'RW')
        return(
              <Fragment>
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
                                   <Star name="rating" newValue={this.handleFormChange}/>  <br/> 
                                   
                                   <Form.Control size="lg" as="textarea" rows={3} placeholder="Leave a Review" 
                                   type="text" 
                                   onChange={this.handleFormChange}
                                   name="Review"/><br/>
                                   <Button as="input" type="submit" value="Submit" className="submit" onClick={this.handleSubmit}/>
                                   </Media.Body>
                                   
                                   </Media>
                               </Form.Group>
                       
                               </Form>
                    <br />
                  {results ? results.map(item => {
                    const {Nama, Review, Picture, id, Rating, _id} = results 
                      return (
                        <div key={_id}>
                            {/* <Comments name={item.Nama} review={item.Review}/> */}
                                    <Media>
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src={item.Picture}
                                        alt="Reviewer"
                                    />
                                    <Media.Body>
                                        <h5 className="name">{item.Nama}</h5>
                                        <Star value={item.Rating} edit={false}/>
                                        <p className="review" key={_id}>{item.Review}</p>
                                    </Media.Body>
                                    </Media>
                                    
                                    {/* <Media>
                                        
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
                                    </Media><br/> */}
                                    
                                    
                                <br />
                            </div>  
                      )
                  }) : null}
                                </Container>
             
              </Fragment>
        )    
    }
}

export default review;




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

// import React from 'react'

// // bring Provider from react-redux, it's the bridge for connecting react to redux
// import { Provider } from 'react-redux'

// // Bring the redux store too
// import store from '../Redux/store'

// // Components
// import Comments from '../components/Comments'


// const Review = () => {
//   return (
//     // Register your redux Provider here
//     <Provider store={store}>
//       <Comments />
//     </Provider>
//   )
// }
// export default Review
