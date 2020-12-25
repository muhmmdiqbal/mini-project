import React from 'react'
import { Container, Tab } from 'react-bootstrap'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Overview from '../components/Overview'
import Jumbotron from '../components/Jumbotron'
import '../App.css';
import Characters from "../components/Characters";
import Review from './Review';

const detailpage = () => {
    
    return (
        <div>
        <Jumbotron />
        <Container >
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/">Overview</NavLink></li>
            <li><NavLink to="/characters">Characters</NavLink></li>
            <li><NavLink to="/review">Review</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Overview}/>
            <Route exact path="/characters" component={Characters}/>
            <Route exact path="/review" component={Review}/>
          </div>
        </div>
        </HashRouter>
        </Tab.Container>
        </Container>
        <br />
        
        </div>
        )
    }

export default detailpage