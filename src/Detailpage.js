import React from 'react'
import {Jumbotron, Container, Row, Col, Button, ListGroup} from 'react-bootstrap'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Overview from './Overview/Overview'
import './App.css';
import China from "./China";
import Review from './components/Review';

// import Characters from './components/Characters'
// import Review from './components/Review'

const detailpage = () => {
    
    return (
        <div>
        <Jumbotron className="jumbotron">
            
            <Container >
                <h1 className="jumbotron-text">This is Film</h1>
                <Row>
                <Col xs lg="7">   
                    <p className="jumbotron-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu
                    </p>
                    </Col> 
                </Row>
                    <p>
                        <Button active tag="a" href="#" action variant="outline-danger">Watch Trailer</Button> {' '}
                        <Button variant="outline-danger">Add to Watchlist</Button>
                    </p>
            </Container>
        </Jumbotron> 
        <Container >
        {/* <Col xs lg="4"> */}
        <ListGroup horizontal >
{/*         
        <ListGroup.Item active tag="a" href="<Review />" action>Overview</ListGroup.Item>
        <ListGroup.Item  tag="a" href="<Overview />" action>Characters</ListGroup.Item>
        <ListGroup.Item  tag="a" href="" action>Review</ListGroup.Item> */}
        <HashRouter>
        <div>
          
          <ul className="header">
            <li><NavLink active tag="a" exact to="/overview">Overview</NavLink></li>
            <li><NavLink to="/china">Characters</NavLink></li>
            <li><NavLink to="/review">Review</NavLink></li>
            {/* <li><NavLink to="/fletch">Fletch</NavLink></li>
            <li><NavLink to="/axios">Axios</NavLink></li> */}
          </ul>
          <div className="content">
            {/* <Route exact path="/" component={Home}/> */}
            <Route exact path="/china" component={China}/>
            <Route exact path="/overview" component={Overview}/>
            <Route exact path="/review" component={Review}/>
            {/* <Route exact path="/germany" component={Germany}/>
            <Route exact path="/counterapp" component={CounterApp}/> */}
            {/* <Route exact path="/fletch" component={Fletch}/>
            <Route exact path="/axios" component={Axios}/> */}
          </div>
        </div>
        </HashRouter>
        
        </ListGroup>
        {/* </Col> */}
        </Container>
        <br />
        {/* <Overview /> */}
        </div>
        )
    }

export default detailpage