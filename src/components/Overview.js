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
        fetch('https://jsonplaceholder.typicode.com/posts')
        
        .then(response => response.json())
        .then(json => {
            this.setState({
                synopsis: json
            })
        })
        // axios.get('https://jsonplaceholder.typicode.com/posts/1')
        
        // .then((result) => {
        //     // console.log(result.data);
        //     this.setState({
        //         synopsis: result.data
        //     })
        //     this.setState({
        //         movieinfo: result.data
        //     })
        // })
        
        
        
    }
    render() {
    return (
        <Fragment>
       <div> 
       
        <Container >
        <h4>Synopsis<hr/></h4>
       {
           this.state.synopsis.map(synopsis => {
            return <Synopsis key={this.state.synopsis.id} title={this.state.synopsis.title}/>

           })

       }
            
         <br/>
        <h4>Movie Info<hr/></h4>
        <Movieinfo  body={this.state.movieinfo.body}/>

        </Container>
        
        </div>
        </Fragment>
    )
}}

export default Overview

// import React, { Component, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import {  Container, } from 'react-bootstrap'

// // bring connect from react-redux, it's the bridge for connecting component to redux
// import { provider, connect } from 'react-redux'

// // bring the actions, just bring that have REQUESTED in the suffix
// // If you dispatching that doesn't have REQUESTED, it will not work
// import {
//   GET_MOVIEINFO_REQUESTED
// } from '../Redux/Action/movie-action'

// // Components
// import Movieinfo from '../components/Movieinfo'
// import Synopsis from '../components/Synopsis'

// const Overview = ({
// 	overview: { loading, overviews },
// 	getOverview
// }) => {
// 	useEffect(() => {
// 		getOverview()

// 		// eslint-disable-next-line
// 	}, [])

// 	return (
// 		// <Fragment>
//         <> 
       
//          <Container >
//          <h4>Synopsis<hr/></h4>
			
// 			{loading && 'Loading...'}

// 			{overviews && overviews.map((overview, index) => (
// 				<Movieinfo overview={overview} key={index} />

// 			))}
//             <br/>
//          <h4>Movie Info<hr/></h4>
//             {overviews && overviews.map((overview, index) => (
// 				<Synopsis overview={overview} key={index} />

// 			))}
//         </Container>
// 		</>
//         // </Fragment>
// 	)
// }

// Overview.propTypes = {
// 	loading: PropTypes.bool,
// 	overviews: PropTypes.array,
// 	getOverview: PropTypes.func.isRequired
// }

// // Get state to props
// const mapStateToProps = (state) => ({
//     overview: state.overview
// })

// // Get dispatch / function to props
// const mapDispatchToProps = (dispatch) => ({
//     getOverview: () => dispatch({ type: GET_MOVIEINFO_REQUESTED })
// })

// // To make those two function works register it using connect
// export default connect(mapStateToProps, mapDispatchToProps)(Overview)

