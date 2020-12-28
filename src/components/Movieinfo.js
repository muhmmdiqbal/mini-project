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
// import React from 'react'
// import PropTypes from 'prop-types'
// import { Container} from 'react-bootstrap'
// import '../App.css'; 

// const movieInfo = ({ overview }) => {
// 	return (
// 		<div>
// 		<Container>
		
// 		<h4>Movie Info<hr/></h4>
// 		<p><strong>Released Date: </strong>{overview.Released}</p>
// 		<p><strong>Director: </strong>{overview.Runtime}</p>
// 		<p><strong>Writer: </strong>{overview.Writer}</p>
// 		<p><strong>Genre: </strong>{overview.Genre}</p>
 
		
// 		</Container>
// 		</div>
// 	)
// }

// movieInfo.propTypes = {
// 	overview: PropTypes.object.isRequired
// }

// export default movieInfo
